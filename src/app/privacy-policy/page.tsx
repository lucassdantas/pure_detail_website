import { Banner } from "@/app/components/Banner";
import { Section } from "@/app/components/Section";
import { companyName, email } from "@/app/utils/constantVales/companyData";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Banner title="Privacy Policy" bgImgClass="servicesBanner" hasButton={false} />
      <Section className='bg-white border-b-black border-b-2'>
        <div className="prose max-w-none text-gray-800 pb-12 policy">
          <h2 className='firstTitle'>Introduction</h2>
          <p>
            At {companyName}, we respect your privacy and are committed to
            protecting your personal information in accordance with the 
            <strong> Privacy Act 2020 (New Zealand)</strong>. This Privacy Policy
            explains how we collect, use, store, and disclose your information
            when you use our website and services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name and contact details (e.g. email address, phone number)</li>
            <li>Billing and payment information</li>
            <li>Vehicle details or service preferences (if applicable)</li>
            <li>
              Technical information (e.g. IP address, browser type, cookies)
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process payments and bookings</li>
            <li>Communicate with you about your enquiries or services</li>
            <li>Send you updates, promotions, or marketing (with consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to improve user
            experience and analyse traffic. You can manage or disable cookies
            through your browser settings, but this may affect site
            functionality.
          </p>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your data
            only with:
          </p>
          <ul>
            <li>Trusted service providers (e.g. payment processors)</li>
            <li>
              Authorities or regulators if required by law or legal process
            </li>
            <li>
              Business partners where you have given consent or where necessary
              to provide our services
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from
            loss, misuse, unauthorised access, or disclosure. However, no method
            of transmission over the internet is completely secure.
          </p>

          <h2>Access and Correction</h2>
          <p>
            You have the right to access and correct the personal information we
            hold about you, in line with the Privacy Act 2020. To make a request,
            please contact us at{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>

          <h2>International Transfers</h2>
          <p>
            If we transfer your personal information outside New Zealand, we
            will ensure that appropriate safeguards are in place to protect your
            data in accordance with the Privacy Act 2020.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated “last revised” date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            how your information is handled, please contact us at:
          </p>
          <p>
            {companyName} <br />
            Email: <a href={`mailto:${email}`}>{email}</a><br />
          </p>

          <p className="text-sm text-gray-500 mt-6">
            Last updated: 27/09/2025
          </p>
        </div>
      </Section>
    </>
  );
}
