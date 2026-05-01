
### EmailJS setup

The contact form sends directly through EmailJS from the browser. Add these
environment variables to your local `.env.local` file before testing the form:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Make sure your EmailJS template expects the fields `from_name`, `from_email`,
`reply_to`, `to_name`, `to_email`, and `message`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

