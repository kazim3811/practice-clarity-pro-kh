import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-neutral-200 bg-white text-neutral-900 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-neutral-900">Contact</DialogTitle>
          <DialogDescription className="font-body text-left text-neutral-600">
            For general enquiries please e-mail{" "}
            <a
              href="mailto:info@SuperGPapp.co.uk"
              className="text-neutral-800 underline underline-offset-2 hover:text-neutral-900"
            >
              info@SuperGPapp.co.uk
            </a>
            .
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
