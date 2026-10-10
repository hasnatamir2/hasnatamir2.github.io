import { defineField, defineType } from 'sanity'
import { SearchIcon } from '@sanity/icons'

export const seoType = defineType({
  name: 'seo',
  title: 'Search and social sharing',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      description:
        'Optional override. Otherwise the name and professional title are used.',
      validation: (rule) =>
        rule.max(60).warning('Aim for 60 characters or fewer.'),
    }),
    defineField({
      name: 'description',
      title: 'Search description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Aim for 160 characters or fewer.'),
    }),
    defineField({
      name: 'image',
      title: 'Social sharing image',
      type: 'image',
      description:
        'Optional 1200 × 630 image. Otherwise a sharing card is generated from the current hero and avatar.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required().max(200),
        }),
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide homepage from search engines',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
