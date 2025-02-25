export default function DatenschutzPage() {
  return (
    <div className="section-container-with-bg min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Datenschutzerklärung für ABI Autocenter UG</h1>
        <p className="text-muted-foreground">Stand: 24. Februar 2025</p>
        
        <section className="prose dark:prose-invert max-w-none">
          <h2>1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns, der <strong>ABI Autocenter UG</strong>, 
            ein wichtiges Anliegen. Wir verarbeiten Ihre Daten gemäß den gesetzlichen 
            Datenschutzvorschriften, insbesondere der DSGVO. Diese Datenschutzerklärung informiert 
            Sie darüber, welche Daten wir erheben, wie wir sie nutzen und welche Rechte Sie haben.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>ABI Autocenter UG</strong><br />
            Oberwanger Str. 16<br />
            D-87439 Kempten (Allgäu)<br />
            Telefon: +49 (0) 831 / 1234567<br />
            E-Mail: <a href="mailto:info@abiautocenter.de" className="text-[hsl(var(--gold))] hover:underline">
              info@abiautocenter.de
            </a>
          </p>

          {/* ... Weitere Abschnitte ... */}
          
          <h2>4. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und 
            bestimmte Funktionen bereitzustellen.
          </p>

          <h3>Cookie-Arten:</h3>
          <ol>
            <li>
              <strong>Wesentliche (technische) Cookies:</strong><br />
              Diese Cookies sind notwendig, um die grundlegenden Funktionen der Website 
              sicherzustellen und können nicht deaktiviert werden.
            </li>
            <li>
              <strong>Statistiken (analytische Cookies):</strong><br />
              Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren 
              (z. B. welche Seiten häufig besucht werden). Die Verarbeitung erfolgt nur mit 
              Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </li>
            <li>
              <strong>Marketing-Cookies:</strong><br />
              Marketing-Cookies werden verwendet, um Ihnen relevante Anzeigen und Inhalte 
              anzuzeigen, basierend auf Ihrem Nutzerverhalten auf unserer Website oder anderen Plattformen.
            </li>
          </ol>

          <h3>Cookie-Einstellungen verwalten:</h3>
          <p>
            Sie können Ihre Cookie-Präferenzen jederzeit über die Cookie-Einstellungen auf 
            unserer Website anpassen oder in Ihrem Browser festlegen.
          </p>

          <h2>5. Hosting</h2>
          <p>
            Unsere Website wird bei einem externen Dienstleister gehostet, der personenbezogene 
            Daten wie IP-Adressen und technische Nutzungsdaten speichert.
          </p>

          <h3>Rechtsgrundlage:</h3>
          <p>
            Die Verarbeitung erfolgt zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie 
            im berechtigten Interesse an einer sicheren Bereitstellung unserer Dienste 
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Wir haben mit dem Hoster einen Vertrag zur Auftragsverarbeitung abgeschlossen, 
            um eine datenschutzkonforme Verarbeitung sicherzustellen.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen Daten:</p>
          <ul>
            <li>
              <strong>Auskunftsrecht:</strong> Informationen über die gespeicherten Daten 
              erhalten (Art. 15 DSGVO).
            </li>
            <li>
              <strong>Recht auf Berichtigung:</strong> Unrichtige oder unvollständige Daten 
              korrigieren lassen (Art. 16 DSGVO).
            </li>
            <li>
              <strong>Recht auf Löschung:</strong> Löschung Ihrer Daten verlangen, sofern keine 
              gesetzlichen Aufbewahrungspflichten bestehen (Art. 17 DSGVO).
            </li>
            <li>
              <strong>Recht auf Einschränkung der Verarbeitung:</strong> Verarbeitung Ihrer 
              Daten unter bestimmten Voraussetzungen einschränken lassen (Art. 18 DSGVO).
            </li>
            <li>
              <strong>Widerspruchsrecht:</strong> Der Verarbeitung Ihrer Daten widersprechen, 
              insbesondere bei Direktwerbung (Art. 21 DSGVO).
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit:</strong> Ihre Daten in einem gängigen 
              Format erhalten oder an Dritte übertragen lassen (Art. 20 DSGVO).
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte können Sie uns jederzeit unter den oben angegebenen 
            Kontaktdaten kontaktieren.
          </p>

          <h2>7. Datensicherheit</h2>
          <p>
            Wir setzen technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen 
            Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.
          </p>

          <h2>8. Änderungen der Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um 
            geänderten rechtlichen Anforderungen oder neuen Funktionen unserer Website 
            gerecht zu werden.
          </p>

          <hr className="my-8" />

          <p className="text-sm text-muted-foreground">
            Diese Datenschutzerklärung wurde speziell für die Anforderungen von ABI Autocenter UG 
            erstellt und berücksichtigt die Nutzung von Cookies sowie die spezifischen 
            Dienstleistungen des Unternehmens wie Terminbuchungen und Hebebühnenvermietung 
            gemäß den Vorgaben der DSGVO und des TTDSG (Telekommunikation-Telemedien-Datenschutz-Gesetz).
          </p>
        </section>
      </div>
    </div>
  )
} 