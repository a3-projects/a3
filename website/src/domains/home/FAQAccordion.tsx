import { Accordion } from "./Accordion";

export function FAQAccordion() {
  return (
    <Accordion.Group>
      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Was genau bekomme ich nach 14 Tagen?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Einen funktionierenden Prototypen deiner Software-Idee – echte, lauffähige Software, kein
            Design-Mockup. Fokussiert auf das eine Kernproblem, das gelöst werden muss. Denn 80% der Nutzer
            verwenden nur 20% der Funktionen – wir bauen die richtigen 20%.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Was passiert, wenn mir das Ergebnis nicht gefällt?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Dann war es das. Du behältst den Code und hast keine weiteren Verpflichtungen. Natürlich arbeiten
            wir während der 14 Tage eng mit dir zusammen, damit das nicht passiert – aber die Entscheidung
            liegt bei dir.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Warum nur 14 Tage und nur 5.000 €?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Erfolgreiche Startups iterieren im Schnitt 3–5 MVP-Versionen, bevor sie skalieren. Je früher du
            echtes Feedback bekommst, desto weniger Geld verbrennst du für Features, die keiner braucht. 14
            Tage sind kurz genug für minimales Risiko – und lang genug für echte Ergebnisse.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Wie läuft die Kommunikation während des Sprints?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Intensiv. Du bekommst tägliche Updates, wir sind ständig erreichbar. Slack, Video-Calls, was auch
            immer für dich funktioniert. Das komplette Team steht dir zur Verfügung.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Gehört mir der Code am Ende?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Ja, zu 100%. Der Code, den wir in den 14 Tagen schreiben, gehört dir. Ob du mit uns weitermachst
            oder nicht – du hast volle Kontrolle.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Was kostet es, nach dem Sprint weiterzumachen?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Das hängt davon ab, was du brauchst. Nach dem Sprint kennst du uns, wir kennen dein Projekt. Auf
            dieser Basis machen wir dir ein faires, transparentes Angebot für die nächsten Schritte.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Ist das Angebot für jede Art von Software?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Für die meisten Web-Anwendungen, ja. Im ersten Gespräch klären wir, ob dein Projekt für einen
            14-Tage-Sprint geeignet ist. Bei sehr komplexen Projekten schlagen wir möglicherweise einen
            anderen Ansatz vor.
          </p>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Welche Technologien nutzt ihr?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Wir sind keine Tool-Fanatiker und wählen die Technologie, die zu deinem Anliegen passt.
            Legacy-Code ist auch kein Problem für uns. Als grobe Orientierung findest du hier einige unserer
            persönlichen Favoriten:
          </p>
          <p className="ty-label-md text-front mt-4">Frontend (TypeScript):</p>
          <ul className="ty-body-sm text-muted-front list-disc pl-6">
            <li>React / Next</li>
            <li>Vue / Nuxt</li>
            <li>Astro.js</li>
          </ul>
          <p className="ty-label-md text-front mt-4">Backend:</p>
          <ul className="ty-body-sm text-muted-front list-disc pl-6">
            <li>Next / PayloadCMS</li>
            <li>Node</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
          <p className="ty-label-md text-front mt-4">Infra:</p>
          <ul className="ty-body-sm text-muted-front list-disc pl-6">
            <li>AWS</li>
            <li>Github</li>
            <li>Nx (Monorepos)</li>
            <li>Kubernetes</li>
          </ul>
        </Accordion.Body>
      </Accordion>

      <Accordion className="animate-blur-fade-in">
        <Accordion.Trigger>
          <h3 className="ty-headline-xs text-front pr-4">Wie schnell könnt ihr starten?</h3>
        </Accordion.Trigger>
        <Accordion.Body>
          <p className="ty-body-md text-muted-front">
            Vielleicht schon morgen. Nach einem kurzen Kennenlern-Call (15-30 Minuten) wissen wir beide, ob es
            passt. Wenn ja, legen wir schnellstmöglich los.
          </p>
        </Accordion.Body>
      </Accordion>
    </Accordion.Group>
  );
}
