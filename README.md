# SuperGP Marketing Site

## Contact Form With Formspree

The demo/contact form submits directly to a Formspree endpoint from the frontend.

### Environment Variables

Copy `.env.example` to `.env` for local testing:

- `VITE_FORMSPREE_ENDPOINT`: your Formspree endpoint (for example `https://formspree.io/f/abc123xy`).

### Formspree Setup

1. Create a form in Formspree.
2. Set the notification destination to your inbox (for example `info@supergpapp.co.uk`).
3. Copy your form endpoint into `VITE_FORMSPREE_ENDPOINT`.
4. Redeploy after setting the environment variable in your host.

### Spam Protection

- The contact form includes a hidden honeypot field to reduce bot submissions.
- You can enable extra protection in Formspree dashboard settings if needed.
