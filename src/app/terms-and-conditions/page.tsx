import { Banner } from "@/app/components/Banner";
import { Section } from "@/app/components/Section";
import { companyName, email } from "@/app/utils/constantVales/companyData";

export default function TermsConditionsPage() {
  return (
    <>
      <Banner title="Terms & Conditions" bgImgClass="servicesBanner" hasButton={false} />
      <Section className="bg-white border-b-black border-b-2">
        <div className="prose max-w-none text-gray-800 pb-12 policy">
          <h2 className='firstTitle'>Introduction</h2>
          <p>
            Welcome to {companyName}. By accessing or using our website and
            services, you agree to be bound by these Terms & Conditions. If you
            do not agree with any part of these terms, you should not use our
            services.
          </p>

          <h2>Use of Our Services</h2>
          <p>By using our services, you agree that you will:</p>
          <ul>
            <li>Provide accurate and up-to-date information when requested</li>
            <li>Not use our services for unlawful or harmful purposes</li>
            <li>
              Respect the rights of others, including intellectual property and
              privacy rights
            </li>
          </ul>

          <h2>Accounts and Security</h2>
          <p>
            If you create an account with us, you are responsible for
            maintaining the confidentiality of your login details and for all
            activities that occur under your account. Please notify us
            immediately at <a href={`mailto:${email}`}>{email}</a> if you suspect
            any unauthorised use of your account.
          </p>

          <h2>Payments and Refunds</h2>
          <p>
            All prices are listed in New Zealand Dollars (NZD) unless otherwise
            specified. Payments must be made in full at the time of purchase or
            booking. Refunds and returns are subject to our{" "}
            <strong>Refund & Returns Policy</strong>.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of {companyName} or our licensors, and is
            protected by copyright and trademark laws. You may not use,
            reproduce, or distribute our content without prior written consent.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {companyName} is not liable
            for any indirect, incidental, or consequential damages arising from
            the use or inability to use our services.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Any
            changes will be effective immediately upon posting on this page. We
            encourage you to review these terms regularly.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance
            with the laws of New Zealand. Any disputes will be subject to the
            exclusive jurisdiction of the New Zealand courts.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us at:
          </p>
          <p>
            {companyName} <br />
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>

          <p className="text-sm text-gray-500 mt-6">
            Last updated: 27/09/2025
          </p>
        </div>
      </Section>
    </>
  );
}
