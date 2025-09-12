import { MainHeader } from 'app/components/sections/main/MainHeader'
import { MainMission } from 'app/components/sections/main/MainMission'
import { MainProducts } from 'app/components/sections/main/MainProducts'
import { MainWhyUs } from 'app/components/sections/main/MainWhyUs'
import { SharedOptimize } from 'app/components/sections/shared/SharedOptimize'

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <MainHeader
        title="Lorem ipsum dolor sit amet"
        subtitle="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="/test-image.jpg"
        imageAlt="Hero"
        caption="Small image caption"
      />

      <MainProducts
        heading="Products"
        products={[
          {
            id: 'p1',
            title: 'Product One',
            imageSrc: '/test-image.jpg',
            imageAlt: 'Hero',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.',
          },
          {
            id: 'p2',
            title: 'Product Two',
            imageSrc: '/test-image.jpg',
            imageAlt: 'Hero',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            id: 'p3',
            title: 'Product Three',
            imageSrc: '/test-image.jpg',
            imageAlt: 'Hero',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
        ]}
      />

      <MainWhyUs
        heading="Why us"
        items={[
          {
            id: 'w1',
            imageCaption: 'Caption one',
            imageSrc: '/test-image.jpg',
            imageAlt: 'Hero',
            points: [
              {
                id: 'w1p1',
                title: 'Dach- und Fassaden-PV-Lösungen',
                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p2',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p3',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p4',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p5',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
            ],
          },
          {
            id: 'w2',
            imageCaption: 'Caption two',
            imageSrc: '/test-image.jpg',
            imageAlt: 'Hero',
            points: [
              {
                id: 'w2p1',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w2p2',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p3',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p4',
                title: 'Dach- und Fassaden-PV-Lösungen',

                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
              {
                id: 'w1p5',
                title: 'Dach- und Fassaden-PV-Lösungen',
                description:
                  'High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. High quality components with rigorous testing. ',
                iconSrc: '/logo.png',
                iconAlt: 'Icon',
              },
            ],
          },
        ]}
      />

      <MainMission
        title="Our mission"
        subtitle="ENABLING CLEAN ENERGY FOR EVERYONE"
        imageSrc="/test-image.jpg"
        imageAlt="Mission"
      />

      <SharedOptimize
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
