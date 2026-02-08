import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "resume",
      title: "Resume URL",
      type: "url",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "object",
      fields: [
        defineField({
          name: "yearsExperience",
          title: "Years Experience",
          type: "string",
        }),
        defineField({
          name: "projectsDelivered",
          title: "Projects Delivered",
          type: "string",
        }),
        defineField({
          name: "technologiesMastered",
          title: "Technologies Mastered",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: 'pageTabline',
      title: 'Page Tabline',
      type: 'text',
    }),
    defineField({
      name: 'pageSubTitle1',
      title: 'Page Subtitle 1',
      type: 'text',
    }),
    defineField({
      name: 'pageSubTitle2',
      title: 'Page Subtitle 2',
      type: 'text'
    })
  ],
});
