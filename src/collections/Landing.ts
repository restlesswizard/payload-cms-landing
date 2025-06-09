import { CollectionConfig } from 'payload'

const Landing: CollectionConfig = {
  slug: 'landing',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'heroText',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        { name: 'text', type: 'text' },
        { name: 'link', type: 'text' },
      ],
    },
  ],
}

export default Landing
