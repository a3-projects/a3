import { cn } from "@/lib/utils";
import { Button } from "@/ui/Button";
import { useState, useRef } from "react";

export const ContactForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const showForm = () => {
    setFormVisible(true);
    requestAnimationFrame(() => {
      emailRef.current?.focus();
    });
  };

  return (
    <div>
      {!formVisible && (
        <div className="mx-auto flex items-center justify-center">
          <Button className="underline underline-offset-4" onClick={showForm} variant="ghost">
            Oder schreibe uns eine Nachricht
          </Button>
        </div>
      )}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/anfrage-erfolgreich-uebermittelt"
        className={cn({ hidden: !formVisible, flex: formVisible }, "mx-auto mt-12 flex-col gap-4")}
      >
        <h3 className="text-xl">Deine Anfrage</h3>

        <div id="contact-form">
          <input type="hidden" name="subject" value="New lead from %{formName} (%{submissionId})" />
          <label className="text-muted-front flex flex-col gap-3">
            Email
            <input
              ref={emailRef}
              className="text-front border-border bg-input-back focus:border-primary-500 focus:outline-primary-500/50 rounded-xl border-4 p-4 outline-offset-0 backdrop-blur-sm outline-none placeholder:opacity-70 focus:outline-4"
              placeholder="Deine E-Mail"
              required
              name="email"
              type="email"
            />
          </label>
          <label className="text-muted-front mt-4 flex flex-col gap-3">
            Anfrage
            <textarea
              className="text-front border-border bg-input-back focus:border-primary-500 focus:outline-primary-500/50 h-[200px] rounded-xl border-4 p-4 outline-offset-0 backdrop-blur-sm outline-none placeholder:opacity-70 focus:outline-4"
              required
              name="message"
              placeholder="Erzähle uns etwas über dein Projekt."
            ></textarea>
          </label>
          <Button className="mt-4 self-start" type="submit">
            Anfrage absenden
          </Button>
        </div>
      </form>
    </div>
  );
};
