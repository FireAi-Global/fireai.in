const Privacy = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 pt-24">
      <h1 className="text-3xl font-bold mb-8 pt-10">Privacy Policy</h1>
      
      <p className="mb-6">
        <span className="font-medium">Effective Date: March 14, 2024</span>
      </p>
      
      <p className="mb-6">
        Fire AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our services.
        By using Fire AI, you agree to the terms outlined in this policy.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          At Fire AI, we value your privacy and are committed to transparency regarding how we process your personal data. 
          This Privacy Policy explains how we collect, use, and protect your information when you use our platform and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. About This Policy</h2>
        <p className="mb-4">This Privacy Policy applies to Fire AI&apos;s services, including its website and any related tools. It outlines:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>What personal data we collect.</li>
          <li>How we use your data.</li>
          <li>Your rights concerning your data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data We Collect</h2>
        <p className="mb-4">Fire AI collects different types of personal data based on how you use our services. This includes:</p>
        
        <h3 className="text-xl font-medium mb-3">3.1 Information You Provide Directly</h3>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><span className="font-medium">Account Information:</span> Name, email address, phone number, and login details.</li>
          <li><span className="font-medium">Billing Information:</span> Payment details for subscriptions or purchases, processed through secure third-party payment providers.</li>
          <li><span className="font-medium">User Data Inputs:</span> Any data you upload for analysis and processing.</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">3.2 Information We Collect Automatically</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><span className="font-medium">Usage Data:</span> Logs, timestamps, and activity records to improve service performance.</li>
          <li><span className="font-medium">Device & Connection Information:</span> IP address, browser type, and operating system.</li>
          <li><span className="font-medium">Cookies & Tracking Technologies:</span> We use cookies to enhance your experience and for analytics.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Data</h2>
        <p className="mb-4">Fire AI processes your personal data to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Provide, maintain, and improve our services.</li>
          <li>Process data inputs and generate insights as requested.</li>
          <li>Secure the platform and prevent fraud.</li>
          <li>Communicate important updates, support, or marketing (with opt-out options).</li>
          <li>Ensure compliance with legal and regulatory obligations.</li>
        </ul>
        <p className="mt-4 font-medium">We do not sell your data to third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary for service provision, legal obligations, or ongoing analysis if requested by users. 
          Uploaded data is not stored permanently unless required for continued use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Sharing of Personal Data</h2>
        <p className="mb-4">Fire AI may share your personal data only in the following cases:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>With service providers (e.g., cloud hosting, payment processors) to operate Fire AI.</li>
          <li>For legal compliance, responding to legal requests from authorities.</li>
          <li>In business transfers, such as mergers, acquisitions, or restructuring.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p className="mb-4">Fire AI employs strict security measures to protect user data, including:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Encryption of data transmissions.</li>
          <li>Secure storage with access control.</li>
          <li>Regular security audits and compliance checks.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Your Rights & Choices</h2>
        <p className="mb-4">Users have the right to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access, update, or delete personal data held by Fire AI.</li>
          <li>Opt out of marketing communications at any time.</li>
          <li>Restrict or object to data processing under certain conditions.</li>
        </ul>
        <p className="mt-4">
          To exercise your rights, contact us at{" "}
          <a href="mailto:info@fireai.in" className="text-blue-600 hover:underline">
            info@fireai.in
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Integrations</h2>
        <p>
          Fire AI may integrate with third-party services (e.g., cloud storage, analytics). 
          Their privacy policies govern their data usage, and we encourage reviewing them separately.
        </p>
      </section>

      {/* Incident Reporting and CERT-In Compliance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Incident Reporting and CERT-In Compliance</h2>
        <p>
          We are committed to maintaining the security and integrity of our systems and user data. In line with the directives issued by the Indian Computer Emergency Response Team (CERT-In), we have established a formal process for identifying, assessing, and reporting cybersecurity incidents.
        </p>
        <p className="my-4">
          As part of our compliance obligations:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>
            <span className="font-medium">Timely Notification:</span> In the event of a cybersecurity incident, we are committed to reporting the incident to CERT-In within 6 hours of detection or identification, in accordance with applicable regulatory requirements.
          </li>
          <li>
            <span className="font-medium">Official Reporting Channels:</span> All such reports are submitted through the official communication channels designated by CERT-In, including:
            <ul className="list-disc ml-6 space-y-1 mt-1">
              <li>Email: <a href="mailto:incident@cert-in.org.in" className="text-blue-600 hover:underline">incident@cert-in.org.in</a></li>
              <li>Phone: <a href="tel:1800-11-4949" className="text-blue-600 hover:underline">1800-11-4949</a></li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Reporting Format:</span> We use the standardized reporting template provided in Annexure-I of the CERT-In circular dated April 28, 2022, ensuring that all required details—such as incident type, affected systems, detection timeline, and mitigation actions—are thoroughly documented.
          </li>
          <li>
            <span className="font-medium">Internal Process:</span> Our internal cybersecurity response policy ensures that incidents are promptly escalated, validated, and reported to the appropriate authorities, enabling rapid containment and resolution.
          </li>
          <li>
            <span className="font-medium">Recordkeeping:</span> All incident reports and related correspondence are securely maintained as part of our compliance and audit practices.
          </li>
        </ul>
        <p>
          This proactive approach to incident reporting supports our ongoing efforts to protect user data, ensure system resilience, and comply with applicable cybersecurity regulations in India.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
        <p>
          Fire AI may update this Privacy Policy periodically. Significant changes will be communicated via email or an in-app alert.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
        <p>
          For any questions or concerns about this Privacy Policy, please reach out to:{" "}
          <a href="mailto:info@fireai.in" className="text-blue-600 hover:underline">
            info@fireai.in
          </a>
        </p>
      </section>

      <div className="bg-gray-100 p-4 rounded-lg mt-8">
        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 

export default Privacy;