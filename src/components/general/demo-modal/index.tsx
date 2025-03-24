import { Show, createEffect, createSignal, onMount } from "solid-js";
import MobileNumberInput, {countriesWithFlags} from "../mobile-number";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    grecaptcha?: any;
  }
}

const countryPhonePatterns: Record<string, RegExp> = {
  US: /^\d{10}$/, // USA: 10 digits
  CA: /^\d{10}$/, // Canada: same as USA
  GB: /^\d{9,10}$/, // UK: 9 or 10 digits
  IN: /^\d{10}$/, // India: 10 digits
  AU: /^\d{9}$/, // Australia: 9 digits
  DE: /^\d{10,11}$/, // Germany: 10-11 digits
  FR: /^\d{9}$/, // France: 9 digits
  BR: /^\d{10,11}$/, // Brazil: 10-11 digits
  JP: /^\d{9,10}$/, // Japan: 9-10 digits
  CN: /^\d{11}$/, // China: 11 digits
  RU: /^\d{10}$/, // Russia: 10 digits
  MX: /^\d{10}$/, // Mexico: 10 digits
  // Default pattern for countries not listed
  DEFAULT: /^\d{7,14}$/ // General pattern for local numbers
};

export default function FireAIDemoModal(props: ModalProps) {
  const [fullName, setFullName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("+91");
  const [showSuccessModal, setShowSuccessModal] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const [recaptchaToken, setRecaptchaToken] = createSignal("");
  const [errors, setErrors] = createSignal({
    fullName: "",
    email: "",
    phone: "",
    recaptcha: "",
    form: "",
  });

  const [isRecaptchaScriptLoaded, setIsRecaptchaScriptLoaded] = createSignal(false);

  let recaptchaWidgetId: number | null = null;

  const validateEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => {
    const dialCodeMatch = phone.match(/^\+\d{1,4}/);
    if (!dialCodeMatch) return false;

    const dialCode = dialCodeMatch[0];
    const country = countriesWithFlags.find(c => c.dial_code === dialCode);

    if (!country) {
      const localNumber = phone.replace(/^\+\d{1,4}/, '');
      return /^\d{7,14}$/.test(localNumber);
    }

    const localNumber = phone.slice(dialCode.length);

    countryPhonePatterns[country.code].test(localNumber);
  };

  // 1) Load the reCAPTCHA script once on component mount
  onMount(() => {
    if (!document.querySelector("#recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      // Use explicit rendering (sitekey passed in renderRecaptcha)
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log("reCAPTCHA script loaded!");
        setIsRecaptchaScriptLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      if (window.grecaptcha) {
        setIsRecaptchaScriptLoaded(true);
      }
    }
  });

  // 2) Render or reset the captcha in #recaptcha-container
  function renderRecaptcha() {
    if (!window.grecaptcha) return;

    const container = document.getElementById("recaptcha-container");
    if (!container) return;

    // If we already have a widget ID, the widget might be orphaned if the modal was closed.
    // So always check if the container has children. If not, force a re-render.
    if (recaptchaWidgetId !== null && container.childElementCount > 0) {
      window.grecaptcha.reset(recaptchaWidgetId);
    } else {
      recaptchaWidgetId = window.grecaptcha.render("recaptcha-container", {
        sitekey: "6LddZ7kqAAAAAH9SA02xMRJoukBGkOVwjJE9mb8T",
        callback: (token: string) => {
          console.log("Recaptcha token:", token);
          if (token) {
            setRecaptchaToken(token);
            setErrors((prev) => ({ ...prev, recaptcha: "" }));
          }
        },
      });
    }
  }

  // 3) Watch for modal open & script loaded => render or reset captcha
  createEffect(() => {
    if (props.isOpen && isRecaptchaScriptLoaded()) {
      renderRecaptcha();
    }
  });

  // Handle form submission
  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    let newErrors = {
      fullName: "",
      email: "",
      phone: "",
      recaptcha: "",
      form: "",
    };
    let isValid = true;

    if (!fullName().trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }
    if (!validateEmail(email())) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }
    if (!validatePhone(phone())) {
      newErrors.phone = `Enter a valid phone number`;
      isValid = false;
    }
    if (!recaptchaToken()) {
      newErrors.recaptcha = "Please complete the reCAPTCHA";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe02s2IaZEegKigKtUqLR6g2-2zmgiQtUh7cE0iK9uLYcNh4Q/formResponse";
    const formData = new FormData();
    formData.append("entry.1033181941", email());
    formData.append("entry.2067890755", phone());
    formData.append("entry.664092787", fullName());

    try {
      setLoading(true);
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      console.log("Form submitted successfully");
      setFullName("");
      setEmail("");
      setPhone("+91");
      setRecaptchaToken("");
      setErrors({ fullName: "", email: "", phone: "", recaptcha: "", form: "" });
      props.onClose();

      // Reset the recaptcha widget ID so that it re-renders next time
      recaptchaWidgetId = null;

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev) => ({
        ...prev,
        form: "Submission failed. Please try again later.",
      }));
    } finally {
      setLoading(false);
    }
  };

  // Handle closing the modal
  const handleClose = () => {
    props.onClose();
    setFullName("");
    setEmail("");
    setPhone("+91");
    setRecaptchaToken("");
    setErrors({ fullName: "", email: "", phone: "", recaptcha: "", form: "" });
    // Reset recaptchaWidgetId on close so that we re-render next time
    recaptchaWidgetId = null;
  };

  return (
      <>
        <Show when={props.isOpen}>
          <div
              class="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md"
              onClick={handleClose}
          >
            <div
                class="bg-white z-20 rounded-xl shadow-xl h-auto w-[90%] lg:overflow-none overflow-auto max-w-md p-[36px] relative"
                onClick={(e) => e.stopPropagation()}
            >
              <h2 class="text-[26px] font-medium text-center leading-[40px] mb-3">
                Book a Free{" "}
                <span class="bg-gradient-to-r from-[#0600A3] via-[#0169FD] to-[#000] text-transparent bg-clip-text">
                FireAI{" "}
              </span>
                De
                <span class="bg-gradient-to-r from-[#0600A3] via-[#0600A3] to-[#000] text-transparent bg-clip-text">
                m
              </span>
                o Call
              </h2>
              <p class="text-gray-500 font-normal text-center text-[16px] leading-[24px] mb-6">
                Transform your business growth with AI-driven insights. Get real-time
                alerts & risk analysis.
              </p>

              <form class="space-y-5 mt-[28px]" onSubmit={handleSubmit}>
                <div>
                  <label class="block text-[16px] font-medium mb-1">Full Name</label>
                  <input
                      type="text"
                      placeholder="Your full name"
                      class={`w-full p-3 border h-[42px] mt-[4px] rounded-md focus:outline-none focus:ring-1 ${
                          errors().fullName
                              ? "border-red-500"
                              : "border-gray-300 focus:ring-[#8B87F4]"
                      }`}
                      value={fullName()}
                      onInput={(e) => {
                        setFullName(e.currentTarget.value);
                        if (e.currentTarget.value.trim()) {
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }
                      }}
                  />
                  {errors().fullName && (
                      <p class="text-red-500 text-sm mt-1">{errors().fullName}</p>
                  )}
                </div>

                <div>
                  <label class="block text-[16px] font-medium mb-1">Email Address</label>
                  <input
                      type="email"
                      placeholder="you@gmail.com"
                      class={`w-full p-3 border h-[42px] mt-[4px] rounded-md focus:outline-none focus:ring-1 ${
                          errors().email
                              ? "border-red-500"
                              : "border-gray-300 focus:ring-[#8B87F4]"
                      }`}
                      value={email()}
                      onInput={(e) => {
                        setEmail(e.currentTarget.value);
                        if (validateEmail(e.currentTarget.value)) {
                          setErrors((prev) => ({ ...prev, email: "" }));
                        }
                      }}
                  />
                  {errors().email && (
                      <p class="text-red-500 text-sm mt-1">{errors().email}</p>
                  )}
                </div>

                <div>
                  <label class="block text-[16px] font-medium mb-1">Phone Number</label>
                  <MobileNumberInput
                      value={phone()}
                      onChange={setPhone}
                      error={errors().phone}
                  />
                </div>

                <div id="recaptcha-container" class="g-recaptcha mb-0"></div>
                {errors().recaptcha && (
                    <p class="text-red-500 text-sm mt-0">{errors().recaptcha}</p>
                )}

                <button
                    type="submit"
                    disabled={loading()}
                    class={`w-full flex justify-center cursor-pointer items-center text-center align-middle mt-[36px] h-[42px] ${
                        loading()
                            ? "bg-gray-400"
                            : "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500"
                    } text-white py-3 rounded-lg text-lg font-medium hover:opacity-90 transition`}
                >
                  Submit
                </button>

                {errors().form && (
                    <p class="text-red-500 text-sm mt-2">{errors().form}</p>
                )}
              </form>

              <button
                  onClick={handleClose}
                  class="absolute top-2 right-4 font-light cursor-pointer text-gray-500 hover:text-gray-700 text-sm"
              >
                ✖
              </button>
            </div>
          </div>
        </Show>

        <Show when={showSuccessModal()}>
          <div class="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md">
            <div class="bg-white rounded-xl shadow-xl w-[281px] h-auto p-[28px] text-center align-middle">
              <div class="text-green-500 text-6xl flex justify-center">
                <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M27.0274 28.7652L20.1622 21.0884C18.5557 19.2837 15.7961 19.131 13.9912 20.7375C12.1863 22.344 12.0338 25.1036 13.6403 26.9085L24.0915 38.5911C25.6981 40.3958 28.4576 40.5486 30.2625 38.942L52.4605 4.43563C52.4605 4.43563 53.7591 2.32302 52.1311 1.25596C52.1311 1.25596 50.7776 0.429978 49.393 2.02699L27.0274 28.7652ZM50.3572 12.2102L47.4091 16.8198C49.1159 19.9971 50.0946 23.6282 50.0946 27.5002C50.0946 33.7476 47.5642 39.3808 43.4726 43.4728C39.381 47.5644 33.7376 50.0948 27.5 50.0948C21.2526 50.0948 15.6194 47.5644 11.5274 43.4728C7.4239 39.3812 4.90539 33.7476 4.90539 27.5002C4.90539 21.2528 7.43576 15.6196 11.5274 11.5276C15.619 7.436 21.2526 4.90557 27.5 4.90557C32.3077 4.90557 36.7406 6.40231 40.4024 8.95418L43.5606 5.17055C39.0394 1.92402 33.4846 0 27.5 0C19.9088 0 13.024 3.07945 8.052 8.052C3.08 13.0245 0 19.9088 0 27.5C0 35.0912 3.07945 41.976 8.052 46.948C13.0246 51.92 19.9088 55 27.5 55C35.0912 55 41.976 51.9205 46.948 46.948C51.92 41.9754 55 35.0912 55 27.5C55 21.8448 53.2958 16.5888 50.3572 12.2102Z"
                      fill="url(#paint0_linear_1000_115)"
                  />
                  <defs>
                    <linearGradient
                        id="paint0_linear_1000_115"
                        x1="-28.1587"
                        y1="55"
                        x2="56.9078"
                        y2="51.3285"
                        gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#08A03D" />
                      <stop offset="1" stop-color="#56C17F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 class="text-xl font-medium mt-4">We have received your response</h2>
              <p class="text-gray-500 font-normal text-[16px] mt-2">
                Someone from our team will reach out to you soon.
              </p>
              <button
                  onClick={() => setShowSuccessModal(false)}
                  class="w-full flex justify-center cursor-pointer items-center text-center align-middle mt-[36px] h-[42px] bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </Show>
      </>
  );
}
