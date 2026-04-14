import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyDialog = ({ open, onOpenChange }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto border-neutral-200 bg-white text-neutral-900 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-neutral-900">Privacy Policy for SuperGPapp.com</DialogTitle>
          <DialogDescription className="font-body text-left text-neutral-600">
            Last Updated: April 14, 2026
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 text-sm leading-relaxed text-neutral-700">
          <p>
            This Privacy Policy explains how <strong>SuperGPapp.com</strong> collects, uses, and protects your personal
            data in compliance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the{" "}
            <strong>Data Protection Act 2018</strong>.
          </p>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">1. Data Controller</h3>
            <p>
              SuperGPapp.com is the data controller responsible for your personal data. If you have any questions
              regarding this policy or our privacy practices, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Email:</strong> info@supergpapp.co.uk
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.supergpapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 underline underline-offset-2 hover:text-neutral-900"
                >
                  www.supergpapp.com
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">2. The Data We Collect</h3>
            <p>
              Because our website is informational, we only collect limited data. We may collect, use, store, and
              transfer the following:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Inquiry Data:</strong> Name, email address, job title, and any other information you provide
                when completing our <strong>&quot;Request a Demo&quot;</strong> form.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and location
                data when you visit our site.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you navigate and interact with our website.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">3. Legal Basis for Processing</h3>
            <p>Under the UK GDPR, we rely on the following lawful bases:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Legitimate Interests:</strong> To respond to your demo requests and provide information about
                our services.
              </li>
              <li>
                <strong>Consent:</strong> Where you have explicitly opted-in to receive further marketing communications
                from us.
              </li>
              <li>
                <strong>Legal Obligation:</strong> Where we must comply with a statutory requirement.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">4. How We Use Your Data</h3>
            <p>We use your information specifically to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Process Demo Requests:</strong> Contact you to arrange and deliver a demonstration of our
                platform.
              </li>
              <li>
                <strong>Communications:</strong> Respond to your inquiries or feedback submitted via our website.
              </li>
              <li>
                <strong>Site Optimization:</strong> Use technical data to improve website functionality and user
                experience.
              </li>
              <li>
                <strong>Security:</strong> Protect our website and business from fraud or cyber-attacks.
              </li>
            </ul>
            <p className="text-neutral-600">
              <strong>Note:</strong> SuperGPapp.com does not currently offer user accounts. We only store information
              necessary to facilitate your specific inquiries.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">5. Data Retention</h3>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes for which it was
              collected. For demo requests, this typically means the duration of our communication with you, unless you
              request earlier deletion or we are required by law to keep it longer.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">6. Your Legal Rights</h3>
            <p>Under UK data protection laws, you have rights including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about you.
              </li>
              <li>
                <strong>Rectification:</strong> Ask us to correct inaccurate or incomplete information.
              </li>
              <li>
                <strong>Erasure:</strong> Request that we delete your data (the &quot;right to be forgotten&quot;).
              </li>
              <li>
                <strong>Withdraw Consent:</strong> If you have signed up for updates, you can opt-out at any time.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">7. International Transfers</h3>
            <p>
              If we use third-party tools (such as email service providers) that host data outside of the UK, we ensure
              they provide a level of protection equivalent to UK standards through approved legal safeguards.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base text-neutral-900">8. Complaints</h3>
            <p>
              You have the right to make a complaint at any time to the <strong>Information Commissioner&apos;s Office
              (ICO)</strong>{" "}
              (
              <a
                href="https://www.ico.org.uk"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-800 underline underline-offset-2 hover:text-neutral-900"
              >
                www.ico.org.uk
              </a>
              ). We would appreciate the chance to address your concerns directly before you approach the ICO.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
