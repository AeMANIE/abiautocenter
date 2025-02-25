export default function ImpressumPage() {
  return (
    <div className="section-container-with-bg min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Impressum für ABI Autocenter UG</h1>
        
        <section className="prose dark:prose-invert max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            ABI Autocenter UG<br />
            Oberwanger Str. 16<br />
            D-87439 Kempten (Allgäu), Deutschland
          </p>
          
          <p>
            Handelsregister: HRB 18058<br />
            Registergericht: Amtsgericht Kempten
          </p>

          <h3>Vertreten durch:</h3>
          <p>Herr Levent Aras</p>

          <hr className="my-8" />

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 (0) 831 / 1234567<br />
            E-Mail: <a href="mailto:info@abiautocenter.de" className="text-[hsl(var(--gold))] hover:underline">
              info@abiautocenter.de
            </a>
          </p>

          <hr className="my-8" />

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE123456789
          </p>

          <hr className="my-8" />

          <h3>Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV</h3>
          <p>
            Herr Levent Aras<br />
            Oberwanger Str. 16<br />
            D-87439 Kempten (Allgäu), Deutschland
          </p>

          <hr className="my-8" />

          <h3>Haftung für Inhalte</h3>
          <p>
            Wir sind als Betreiber dieser Webseite gemäß § 7 Abs.1 TMG für die Inhalte auf unseren 
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir 
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
            überwachen oder nach Hinweisen auf rechtswidrige Tätigkeiten zu suchen. 
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab dem 
            Zeitpunkt möglich, zu dem eine konkrete Rechtsverletzung bekannt wird. Sobald uns 
            entsprechende Rechtsverletzungen bekannt werden, entfernen wir diese Inhalte unverzüglich.
          </p>

          <hr className="my-8" />

          <h3>Haftung für Links</h3>
          <p>
            Unsere Webseite enthält Links zu externen Webseiten Dritter. Auf deren Inhalte haben 
            wir keinen Einfluss, weshalb wir für diese fremden Inhalte keine Gewähr übernehmen 
            können. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder 
            Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung wurden die Seiten auf mögliche 
            Rechtsverstöße geprüft, und es waren keine rechtswidrigen Inhalte erkennbar. Eine 
            permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
            Hinweise auf Rechtsverletzungen nicht zumutbar. Sollten uns Rechtsverletzungen 
            bekannt werden, entfernen wir solche Links umgehend.
          </p>

          <hr className="my-8" />

          <h3>Urheberrecht</h3>
          <p>
            Die durch uns erstellten Inhalte und Werke auf dieser Webseite unterliegen dem 
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
            der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen 
            Zustimmung bzw. der des jeweiligen Autors oder Erstellers. Downloads und Kopien 
            dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
            Soweit Inhalte auf dieser Seite nicht von uns erstellt wurden, beachten wir die 
            Urheberrechte Dritter und kennzeichnen diese entsprechend. Sollten Sie dennoch auf 
            eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis. Bei 
            Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
          </p>

          <hr className="my-8" />

          <h3>Streitbeilegung</h3>
          <p>
            Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
            teil und sind dazu auch nicht verpflichtet.
          </p>
        </section>
      </div>
    </div>
  )
} 