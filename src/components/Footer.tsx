import { useState } from "react";
import ContactDialog from "./ContactDialog";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <p>© {new Date().getFullYear()} SuperGP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      <PrivacyPolicyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Footer;
