type CTAProps = {
  text: string
  link: string
}

export const CTA: React.FC<CTAProps> = ({ text, link }) => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <a href={link} className="text-xl text-blue-600 underline">
        {text}
      </a>
    </section>
  )
}
