import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

// Импортируем компоненты
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { CTA } from './components/CTA'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  await payload.auth({ headers }) // можно убрать user, если он не нужен

  const landingData = await payload.find({
    collection: 'landing',
    limit: 1,
  })

  const landing = landingData.docs[0] as any

  return (
    <main>
      {landing?.title && landing?.heroText && (
        <Hero title={landing.title} heroText={landing.heroText} />
      )}

      {landing?.features && <Features features={landing.features} />}

      {landing?.cta && <CTA text={landing.cta.text} link={landing.cta.link} />}
    </main>
  )
}
