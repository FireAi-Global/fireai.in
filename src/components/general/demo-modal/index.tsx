import { Show, createEffect, createSignal } from "solid-js";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) =>
    /^\+\d{1,4}\d{7,14}$/.test(phone); // Updated regex for international numbers

  const handleSubmit = async (e: Event) => {
    e.preventDefault();


    let newErrors = { fullName: "", email: "", phone: "", recaptcha: "" };
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
      newErrors.phone =
        "Enter a valid phone number (e.g., +911234567890)";
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
        setLoading(true)
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      console.log("Form submitted successfully");

      // Reset form fields and close modal
      setFullName("");
      setEmail("");
      setPhone("");
      setErrors({ fullName: "", email: "", phone: "", recaptcha: "" });
      props.onClose();
      setRecaptchaToken("");
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
    } finally{
        setLoading(false)
    }
  };

  const handleClose = () => {
    props.onClose();
    setFullName("");
    setEmail("");
    setPhone("");
    setRecaptchaToken("");
    setErrors({ fullName: "", email: "", phone: "", recaptcha: "" });
  };

  createEffect(() => {
    if (props.isOpen) {
      // Add the reCAPTCHA script if not already present
      if (!document.querySelector("#recaptcha-script")) {
        const script = document.createElement("script");
        script.id = "recaptcha-script";
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
      // Wait for the script to load then render the reCAPTCHA widget
      const interval = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(interval);
          window.grecaptcha.render("recaptcha-container", {
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
      }, 500);
    }
  });

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
                <label class="block text-[16px] font-medium mb-1">
                  Email Address
                </label>
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
                <label class="block text-[16px] font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+911234567890"
                  class={`w-full p-3 border h-[42px] mt-[4px] rounded-md focus:outline-none focus:ring-1 ${
                    errors().phone
                      ? "border-red-500"
                      : "border-gray-300 focus:ring-[#8B87F4]"
                  }`}
                  value={phone()}
                  onInput={(e) => {
                    setPhone(e.currentTarget.value);
                    if (validatePhone(e.currentTarget.value)) {
                      setErrors((prev) => ({ ...prev, phone: "" }));
                    }
                  }}
                />
                {errors().phone && (
                  <p class="text-red-500 text-sm mt-1">{errors().phone}</p>
                )}
              </div>

              {/* The reCAPTCHA container without a duplicate callback */}
              <div id="recaptcha-container" class="g-recaptcha mb-0"></div>
              {errors().recaptcha && (
                <p class="text-red-500 text-sm mt-0">{errors().recaptcha}</p>
              )}

              <button
                type="submit"
                disabled={loading()}
                class={`w-full flex justify-center cursor-pointer 
                    items-center text-center align-middle mt-[36px] h-[42px] ${loading()? 'bg-gray-400' :'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500'}  text-white py-3 rounded-lg text-lg font-medium hover:opacity-90 transition`}
              >
                Submit
              </button>
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
            <div class="text-green-500 text-6xl items-center flex justify-center flex-col">
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
