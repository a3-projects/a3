import { Accordion } from "./Accordion";

export function FAQAccordion() {
  return (
    <Accordion.Group>
      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="text-front pr-4 font-bold">Wie läuft eine Zusammenarbeit typisch ab?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="text-muted-front font-serif">
            Wir starten immer mit einem unverbindlichen Kennenlern-Call von 15-30 Minuten. Dort besprechen wir
            deine Ziele und schauen, ob die Chemie stimmt. Danach entwickeln wir gemeinsam einen Plan –
            transparent, mit klaren Meilensteinen und regelmäßigen Updates. Kurze Entwicklungszyklen sorgen
            dafür, dass du schnell sichtbare Fortschritte siehst.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="text-front pr-4 font-bold">Was kostet ein Projekt bei euch?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="text-muted-front font-serif">
            Unsere Preise orientieren sich an Umfang, Zeitrahmen und der Frage, ob du einmalig Unterstützung
            benötigst oder eine laufende Zusammenarbeit wünschst. Wir sind transparent: Lass uns dein Ziel
            kurz besprechen — wir machen einen konkreten Vorschlag, der zu deinem Budget und Zeitplan passt.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="text-front pr-4 font-bold">Arbeitet ihr remote oder vor Ort?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="text-muted-front font-serif">
            Wir sind zwischen Nürnberg und Heinsberg verteilt. Remote-Arbeit hat sich bei uns bewährt und ist
            unser Standard für die tägliche Zusammenarbeit. Für größere Projekte kommen wir gezielt vor Ort,
            etwa für Strategie-Workshops, Kickoffs oder Planungsmeetings; nicht für routinemäßige tägliche
            Arbeit. Die weitere Umsetzung läuft überwiegend remote und wird durch regelmäßige Video-Calls
            sowie klar strukturierte Abläufe unterstützt. Du entscheidest, wie viel Präsenz dein Projekt
            benötigt.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="text-front pr-4 font-bold">Welche Technologien nutzt ihr?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="text-muted-front font-serif">
            Wir sind keine Tool-Fanatiker und wählen die Technologie, die zu deinem Anliegen passt.
            Legacy-Code ist auch kein Problem für uns. Als grobe Orientierung findest du hier einige unserer
            persönlichen Favoriten:
          </p>
          <p className="mt-4 font-bold">Frontend (TypeScript):</p>
          <ul className="text-muted-front list-disc pl-6 font-serif">
            <li>React / Next</li>
            <li>Vue / Nuxt</li>
            <li>Astro.js</li>
          </ul>
          <p className="mt-4 font-bold">Backend:</p>
          <ul className="text-muted-front list-disc pl-6 font-serif">
            <li>Next / PayloadCMS</li>
            <li>Node</li>
            <li>Python</li>
          </ul>
          <p className="mt-4 font-bold">Infra:</p>
          <ul className="text-muted-front list-disc pl-6 font-serif">
            <li>AWS</li>
            <li>Github</li>
            <li>Nx (Monorepos)</li>
            <li>Kubernetes</li>
          </ul>
          <p className="text-muted-front mt-4 font-serif"></p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="text-front pr-4 font-bold">Wie schnell könnt ihr starten?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="text-muted-front font-serif">
            Vielleicht schon morgen — in der Regel reicht ein kurzes Kennenlern-Call (15 Minuten). Im Call
            klären wir Ziele, Prioritäten und den kleinsten sinnvollen nächsten Schritt. Oft können wir danach
            sofort starten; andernfalls erstellen wir einen kurzen, konkreten Plan und legen direkt los.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="text-front pr-4 font-bold">In welchem Arbeitsumfeld arbeitet ihr?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="text-muted-front font-serif">
            Am effektivsten sind wir, wenn wir selbständig und unabhängig arbeiten können, egal ob wir ein
            Projekt von Grund auf aufsetzen oder uns in dein bestehendes Team oder Projekt integrieren. Für
            dich heißt das: Weniger Koordinationsaufwand, mehr Ergebnisse. Dein Ziel steht immer im
            Mittelpunkt.
          </p>
        </Accordion.Body>
      </Accordion>
    </Accordion.Group>
  );
}
