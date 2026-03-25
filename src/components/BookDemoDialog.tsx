import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const PAIN_POINTS = [
  "Rota management is chaotic and time-consuming",
  "Too many spreadsheets and disconnected tools",
  "Staff communication relies on WhatsApp/informal channels",
  "No real-time visibility into daily operations",
  "Onboarding and training staff takes too long",
];

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoDialog = ({ open, onOpenChange }: BookDemoDialogProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    numSites: "",
    numEmployees: "",
    painPoint: "",
    otherPainPoint: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo request received!",
      description: "We'll be in touch within 24 hours.",
    });
    onOpenChange(false);
    setForm({ firstName: "", lastName: "", jobTitle: "", email: "", numSites: "", numEmployees: "", painPoint: "", otherPainPoint: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-headline">Book a Demo</DialogTitle>
          <DialogDescription>See how SuperGP can transform your practice. Fill in your details and we'll be in touch.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="Jane" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Smith" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="jobTitle">Job Title *</Label>
            <Input id="jobTitle" required value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} placeholder="Practice Manager" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@surgery.nhs.uk" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="numSites">No. of Sites *</Label>
              <Input id="numSites" type="number" min="1" required value={form.numSites} onChange={(e) => update("numSites", e.target.value)} placeholder="1" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="numEmployees">No. of Employees *</Label>
              <Input id="numEmployees" type="number" min="1" required value={form.numEmployees} onChange={(e) => update("numEmployees", e.target.value)} placeholder="25" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Biggest Pain Point Right Now *</Label>
            <div className="space-y-2">
              {PAIN_POINTS.map((point) => (
                <label
                  key={point}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                    form.painPoint === point
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <input
                    type="radio"
                    name="painPoint"
                    value={point}
                    checked={form.painPoint === point}
                    onChange={(e) => update("painPoint", e.target.value)}
                    className="mt-0.5 accent-primary"
                    required
                  />
                  {point}
                </label>
              ))}
              <label
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                  form.painPoint === "other"
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="painPoint"
                  value="other"
                  checked={form.painPoint === "other"}
                  onChange={(e) => update("painPoint", e.target.value)}
                  className="mt-0.5 accent-primary"
                />
                Other
              </label>
              {form.painPoint === "other" && (
                <Textarea
                  placeholder="Tell us about your biggest challenge..."
                  value={form.otherPainPoint}
                  onChange={(e) => update("otherPainPoint", e.target.value)}
                  required
                  className="mt-1"
                />
              )}
            </div>
          </div>

          <Button type="submit" className="w-full font-display font-semibold text-base py-5">
            Request Demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
