'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6 text-stone-700 dark:text-stone-300">
   <Navbar />
      <h1 className="text-3xl mt-8  mb-8 text-center">Terms of Service</h1>

      <div className="space-y-6 leading-relaxed text-sm">

        <p><strong>Effective Date:</strong> April 25, 2025</p>

        <p>
          Welcome to Boilrplate CLI! These Terms of Service ("Terms") govern your use of our software tools, website, and services ("Services"). By using Boilrplate, you agree to these Terms. If you do not agree, do not use our Services.
        </p>

        <h2 className="text-lg  mt-8 mb-2">1. Using Boilrplate</h2>
        <p>
          Boilrplate CLI allows users to scaffold boilerplate code for fullstack applications through predefined templates. Access to certain AI-powered features is currently restricted and may require special access codes. 
          You agree to use Boilrplate responsibly and for lawful purposes only. We reserve the right to restrict or revoke your access to the Services at any time for violation of these Terms.
        </p>

        <h2 className="text-lg mt-8 mb-2">2. AI-Generated Content</h2>
        <p>
          Some functionality (such as AI-powered project generation) may rely on third-party AI providers. AI features are experimental and provided "as is" without guarantees of accuracy or reliability. 
          Access to AI functionality may require an access code and is subject to change, suspension, or removal at our discretion.
        </p>

        <h2 className="text-lg mt-8 mb-2">3. Waitlist and Early Access</h2>
        <p>
          Joining the waitlist does not guarantee access to AI features. Early access may be granted selectively based on availability, testing phases, or internal decisions.
        </p>

        <h2 className="text-lg mt-8 mb-2">4. Data and Privacy</h2>
        <p>
          We collect minimal necessary information, such as email addresses for the waitlist. We do not sell or share personal information with third parties without your consent. 
          For more information. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
        </p>

        <h2 className="text-lg  mt-8 mb-2">5. Intellectual Property</h2>
        <p>
          Boilrplate CLI, branding, and related materials are intellectual property of the Boilrplate team. You are free to use the generated boilerplate code for personal or commercial projects. 
          However, the Boilrplate tool itself remains proprietary.
        </p>

        <h2 className="text-lg  mt-8 mb-2">6. Disclaimers</h2>
        <p>
          Boilrplate is provided "as is" without any warranty. We do not guarantee uninterrupted access or that the Services will meet your expectations.
          Use of AI integrations and generated code is at your own risk.
        </p>

        <h2 className="text-lg  mt-8 mb-2">7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Boilrplate and its creators will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our Services.
        </p>

        <h2 className="text-lg  mt-8 mb-2">8. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Services after updates constitutes acceptance of the revised Terms. 
          Changes will be posted on this page.
        </p>

        <h2 className="text-lg  mt-8 mb-2">9. Contact</h2>
        <p>
          If you have any questions or concerns, please reach out to us:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Email: <Link href="mailto:support@heyboilrplate.com" className="underline text-blue-500">purohitaman@icloud.com</Link></li>
          <li>Website: <Link href="https://www.heyboilrplate.com" className="underline text-blue-500">heyboilrplate.com</Link></li>
        </ul>

      </div>
      <footer className="text-center text-xs text-stone-400 py-6">
  © {new Date().getFullYear()} Boilrplate. <Link href="/terms" className="underline">Terms of Service</Link>
</footer>
    </main>
  );
}
