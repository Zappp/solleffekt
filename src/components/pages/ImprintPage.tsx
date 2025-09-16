export interface ImprintPageData {
  title: string
  sections: {
    title: string
    items: { label: string; value: string }[]
  }[]
}

export function ImprintPage({ data }: { data: ImprintPageData }) {
  return (
    <section className="section-layout py-12">
      <h1 className="typography-h1 mb-8">{data.title}</h1>

      {data.sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h2 className="typography-h3 mb-2">{section.title}</h2>
          {section.items.map((item, itemIndex) => (
            <p key={itemIndex} className="typography-body">
              {item.label ? `${item.label}: ` : ''}
              {item.value}
            </p>
          ))}
        </div>
      ))}
    </section>
  )
}
