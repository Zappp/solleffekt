import { OptimizeSection } from 'app/components/sections/OptimizeSection'
import { SectionSeparator } from 'app/components/sections/SectionSeparator'
import { SolarPanelsHeaderSection } from 'app/components/sections/SolarPanelsHeaderSection'
import { SolarPanelsPartnerSection } from 'app/components/sections/SolarPanelsPartnerSection'
import { SolarPanelsSolutionsSection } from 'app/components/sections/SolarPanelsSolutionsSection'

export default function SolarPanelsPage() {
  return (
    <div className="flex flex-col gap-12">
      <SolarPanelsHeaderSection
        title="Solar Panels"
        description="High-efficiency photovoltaic modules tailored for residential and commercial installations."
        imageSrc="/test-image.jpg"
        imageAlt="Solar panels"
        primaryCtaLabel="Termin vereinbaren"
        primaryCtaHref="#appointment"
        secondaryCtaLabel="Warum wir"
        secondaryCtaHref="#why-us"
      />

      <SectionSeparator backgroundImageSrc="/test-image.jpg" />

      <SolarPanelsSolutionsSection
        overline="Unsere Solar Lösungen"
        heading="Alles aus einer Hand - alle Komponenten aufeinander abgestimmt."
        descriptions={[
          'Als Herstellvertreib setzt VIGOR mit nachhaltigen Solarmodulen neue technologische Maßstäbe. Unsere Solarmodule zählen zu den Besten der Welt und wir stellen Ihnen eine breite Palette dieser zur Auswahl. Die Besonderheit dabei liegt darauf, wir liefern alle aufeinander abgestimmten Komponenten aus einer Hand.',
          'Die Unterbaukonstruktionen, Mikroinverter, Wechselrichter und Speicher sind aufeinander abgestimmt, um eine reibungslose Integration zu gewährleisten. Unser Ziel ist es, Verzögerungen bei der Montage durch fehlende oder inkongruente Teile zu vermeiden.',
        ]}
        ctaLabel="Termin vereinbaren"
        ctaHref="#appointment"
        items={[
          {
            id: 's1',
            title: 'Dach- und Fassaden-PV-Lösungen',
            description:
              'Maßgeschneiderte Dach- und Fassadenlösungen, die Gebäudeoberflächen in eine Energiequelle verwandeln – effizient und ästhetisch.',
            iconSrc: '/logo.png',
            iconAlt: 'Home icon',
          },
          {
            id: 's2',
            title: 'Frei- und Wasserflächen-PV-Lösungen',
            description:
              'Innovative Photovoltaik-Lösungen für ungenutzte Flächen an Land und auf Wasser – effizient und umweltfreundlich.',
            iconSrc: '/logo.png',
            iconAlt: 'Building icon',
          },
          {
            id: 's3',
            title: 'Speicher- und Monitoringlösungen',
            description:
              'Skalierbare Speicher, Microinverter und Monitoring für maximale Performance und Ausfallsicherheit.',
            iconSrc: '/logo.png',
            iconAlt: 'Ground icon',
          },
        ]}
      />

      <SolarPanelsPartnerSection
        items={[
          {
            id: 'b1',
            overline: 'Exklusive Partnerschaft mit dem Weltmarktführer APsystems',
            points: [
              {
                id: 'p1',
                title: 'Marktführer von Multi-Modul Mikro-Wechselrichtern',
                description:
                  'Weltweit größtes Angebot an Leistungselektronik auf Modulebene. Bis Ende 2022 wurden weit mehr als 3GW an MLPE-Produkten verbaut.',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'p2',
                title: 'Erhöhte Systemeﬃzienz um bis zu 20% ',
                description:
                  'APsystems-Einheiten verarbeiten zwei PV-Module, wodurch die Installations- und Systemkosten gesenkt werden.',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'p3',
                title: 'Intelligente Steuerung',
                description:
                  'Mit AP EasyPower haben Sie schnelle, einfache Überwachung und Analyse Ihrer Solaranlage – bequem vom Handy.',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
            ],
            imageSrc: '/test-image.jpg',
            imageAlt: 'APsystems device',
          },
          {
            id: 'b2',
            overline: 'Weitere Vorteile und Anwendungen',
            points: [
              {
                id: 'p4',
                title: 'Skalierbar und zukunftssicher',
                description:
                  'Module und Speicher flexibel erweiterbar – wächst mit Ihren Bedürfnissen.',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'p5',
                title: 'Robustes Monitoring',
                description: 'Transparente Daten und Alarme für maximale Verfügbarkeit.',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
            ],
            imageSrc: '/test-image.jpg',
            imageAlt: 'Illustration',
          },
        ]}
      />

      <OptimizeSection
        overline="Optimization"
        title="Optimize your system"
        subtitle="Maximize performance with smart monitoring and proactive maintenance."
        imageSrc="/test-image.jpg"
        imageAlt="Optimize"
        items={[
          {
            id: 'o1',
            description: 'Real-time performance insights at a glance.',
            iconSrc: '/logo.png',
            iconAlt: 'Icon',
          },
          {
            id: 'o2',
            description: 'Automated alerts to prevent downtime.',
            iconSrc: '/logo.png',
            iconAlt: 'Icon',
          },
          {
            id: 'o3',
            description: 'Actionable recommendations to improve yield.',
            iconSrc: '/logo.png',
            iconAlt: 'Icon',
          },
        ]}
      />
    </div>
  )
}
