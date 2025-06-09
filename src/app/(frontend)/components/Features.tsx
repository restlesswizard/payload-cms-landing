type Feature = {
  heading: string
  description: string
}

type FeaturesProps = {
  features: Feature[]
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  if (!features || features.length === 0) return null

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {features.map((f, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">{f.heading}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
