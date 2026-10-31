import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type Status = "idle" | "sending" | "sent" | "error" | "missing" | "captcha";

const messages: Record<Exclude<Status, "idle">, string> = {
  sending: "Sending your message…",
  sent: "Thanks, your message is on its way. I'll get back to you soon.",
  error:
    "Your message didn't send. Please try again, or email me at info@benjaminbushman.com.",
  missing: "Please fill in your name, email and message.",
  captcha: "Please check the “I'm not a robot” box before sending.",
};

const Contact = () => {
  const [mailData, setMailData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { user_name, user_email, message } = mailData;

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user_name.trim() || !user_email.trim() || !message.trim()) {
      setStatus("missing");
      return;
    }
    if (!recaptchaToken) {
      setStatus("captcha");
      return;
    }
    setStatus("sending");
    emailjs
      .send(
        "service_abijmul", // service id
        "template_i6yddu7", // template id
        { ...mailData, "g-recaptcha-response": recaptchaToken },
        "Je1lX0MpHjZ51x-nR" // public api
      )
      .then(
        () => {
          setStatus("sent");
          setMailData({ user_name: "", user_email: "", message: "" });
          setRecaptchaToken(null);
          recaptchaRef.current?.reset();
        },
        () => setStatus("error")
      );
  };

  const isProblem = status === "error" || status === "missing" || status === "captcha";

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let's talk</h2>
          <p>
            Need a website, an accessibility audit, or help with your network?
            Hiring for a role I'd be good at? Send me a note and I'll get back
            to you soon.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:info@benjaminbushman.com">info@benjaminbushman.com</a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href="tel:+18013721410">801-372-1410</a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/benjamin-bushman/" target="_blank" rel="noopener noreferrer">
                in/benjamin-bushman<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/benbushman98" target="_blank" rel="noopener noreferrer">
                benbushman98<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="user_name" type="text" autoComplete="name" value={user_name} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="user_email" type="email" autoComplete="email" value={user_email} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} value={message} onChange={onChange} required />
          </div>
          <div className="captcha">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lcs-QUqAAAAAAZG6tRMnZ4SDeoZxJzLmCh5i9IP"
              onChange={setRecaptchaToken}
            />
          </div>
          <div className="form-footer">
            <button className="button" type="submit" disabled={status === "sending"}>
              Send message
            </button>
            <p className="form-note">
              Sent through EmailJS and protected by Google reCAPTCHA. See the{" "}
              <a href="/privacy/">privacy policy</a>.
            </p>
          </div>
          <p
            className={`form-status ${isProblem ? "is-error" : ""} ${status === "sent" ? "is-success" : ""}`}
            role="status"
            aria-live="polite"
          >
            {status !== "idle" && messages[status]}
          </p>
        </form>
      </div>
    </section>
  );
};
export default Contact;
