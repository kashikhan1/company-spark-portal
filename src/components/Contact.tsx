import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e?.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());
    formValues["to_name"] = import.meta.env.VITE_PUBLIC_TO_NAME;
    formValues["to_email"] = import.meta.env.VITE_PUBLIC_TO_EMAIL;
    setIsSending(true);
    emailjs
      .send(
        import.meta.env.VITE_PUBLIC_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
        formValues,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 text-sm md:text-md font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4 select-none"
            aria-live="polite"
            role="status"
          >
            Get in Touch
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch
            with us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            className="space-y-6 flex flex-col"
            ref={formRef}
            onSubmit={handleSubmit}
            aria-describedby="form-instructions"
          >
            <p id="form-instructions" className="sr-only">
              Fill out the form below to send us a message. All fields are
              required.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  aria-required="true"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can we help?"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={6}
                required
                aria-required="true"
              />
            </div>

            <Button
              disabled={isSending}
              type="submit"
              className="w-full sm:w-auto"
              aria-disabled={isSending}
            >
              {isSending ? (
                <span className="loader" aria-hidden="true"></span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
