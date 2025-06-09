import React from 'react'

type HeroProps = {
  title: string
  heroText: string
}

export const Hero: React.FC<HeroProps> = ({ title, heroText }) => {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg">{heroText}</p>
    </section>
  )
}
