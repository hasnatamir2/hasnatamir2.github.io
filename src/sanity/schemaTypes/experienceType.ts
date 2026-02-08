import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "year",
      title: "Year Range",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Company Website",
      type: "url",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Work Type",
      type: "string",
      options: {
        list: ["Remote", "Hybrid", "On-site"],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{type: 'string'}]
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Controls ordering on the page (lower first).",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
