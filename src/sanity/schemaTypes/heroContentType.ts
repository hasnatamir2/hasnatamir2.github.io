import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const heroContentType = defineType({
  name: 'heroContent',
  title: 'Homepage hero',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Introduction',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'headingContinuation',
      title: 'Heading continuation',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: 'avatar',
      title: 'Personal agent artwork',
      type: 'image',
      description:
        'Use the centered square avatar with a transparent background. The website adds the animated eyes; keep the eye area blank.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required().max(200),
        }),
      ],
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      name: 'resumeLabel',
      title: 'Resume button label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'contactLabel',
      title: 'Contact button label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'experienceLabel',
      title: 'Experience label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'projectsLabel',
      title: 'Projects label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'pauseMotionLabel',
      title: 'Pause motion label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'playMotionLabel',
      title: 'Play motion label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'description', media: 'avatar' },
  },
})
