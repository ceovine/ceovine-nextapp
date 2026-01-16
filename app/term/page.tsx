import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | CEO VINE',
  description:
    'Read the Terms and Conditions governing the use of CEO VINE website and services.',
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>

      <p className="text-sm text-gray-500 mb-8">
        Last Updated: October 2025
      </p>

      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Welcome to <strong>CEO VINE</strong>.
        </p>

        <p>
          These Terms & Conditions (“Terms”) govern your access to and use of our
          website <strong>www.ceovine.com</strong> and the services offered by
          CEO VINE (“we,” “our,” or “us”). By accessing or using our website or
          services, you agree to comply with and be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8">About CEO VINE</h2>
        <p>
          CEO VINE is a digital publication platform highlighting India’s most
          promising startups, visionary founders, and emerging brands.
        </p>
        <p>
          We provide editorial and promotional services including startup story
          features, founder interviews, and social media publications.
        </p>

        <h2 className="text-xl font-semibold mt-8">Use of Website</h2>
        <p>By using our website, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the site only for lawful purposes.</li>
          <li>
            Not engage in any activity that may harm or disrupt the website’s
            functionality or security.
          </li>
          <li>
            Not copy, reproduce, or redistribute our content without prior
            written consent.
          </li>
        </ul>
        <p>
          CEO VINE reserves the right to modify or suspend the website or any part
          of it without prior notice.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Paid Services & Payments
        </h2>
        <p>
          CEO VINE offers paid publication and branding services.
        </p>
        <p>By purchasing or subscribing to any paid service:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You agree to provide accurate billing and company information.</li>
          <li>
            Payments are to be made as per the agreed commercial proposal or
            invoice shared.
          </li>
          <li>
            All payments are non-refundable once the service process (such as
            publication drafting or scheduling) has commenced.
          </li>
        </ul>
        <p>
          Any additional customizations or add-on services will be charged
          separately, as agreed in writing.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Content Submission & Usage
        </h2>
        <p>
          Clients may provide information, text, images, logos, and other
          materials (“Submitted Content”) for publication.
        </p>
        <p>By submitting this content, you:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Grant CEO VINE the right to edit, publish, and distribute the content
            across its website and official social media channels.
          </li>
          <li>
            Confirm that all submitted content is original and does not infringe
            upon any third-party rights.
          </li>
          <li>
            Retain ownership of your materials, while granting CEO VINE a
            non-exclusive, royalty-free license to use them for publication and
            promotional purposes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Editorial Rights</h2>
        <p>
          CEO VINE maintains full editorial discretion over the content it
          publishes.
        </p>
        <p>
          We may modify or reject submissions that do not align with our
          editorial guidelines, legal standards, or brand integrity.
        </p>
        <p>
          Approved content may also be lightly edited for clarity, tone, and
          readability while preserving the original intent.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Intellectual Property
        </h2>
        <p>
          All articles, visuals, and materials created or published by CEO VINE
          (excluding client-provided content) remain the intellectual property
          of CEO VINE.
        </p>
        <p>
          Unauthorized reproduction or distribution of any material from our
          website is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Limitation of Liability
        </h2>
        <p>
          CEO VINE strives for accuracy and reliability in all its publications.
          However, we do not guarantee specific outcomes (such as business
          growth, funding, or media attention).
        </p>
        <p>We are not liable for any damages resulting from:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use or inability to use our website or services.</li>
          <li>Errors or omissions in any content.</li>
          <li>Third-party links or social media integrations.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Privacy Policy</h2>
        <p>
          Your use of CEO VINE’s website and services is also governed by our
          Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          Social Media & Third-Party Links
        </h2>
        <p>
          CEO VINE is not responsible for the privacy practices or content of
          external platforms linked through our website.
        </p>

        <h2 className="text-xl font-semibold mt-8">Termination</h2>
        <p>
          CEO VINE reserves the right to suspend or terminate access if any user
          violates these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8">Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of India, with exclusive
          jurisdiction of the courts of Bhubaneswar, Odisha.
        </p>

        <p className="mt-8">
          For questions or concerns, contact us at:{' '}
          <strong>corporate@ceovine.com</strong>
        </p>
      </section>
    </main>
  );
}
