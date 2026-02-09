import { defineField, defineType } from "sanity";
import { CodeBlockIcon } from "@sanity/icons";

export const openSourceContributionType = defineType({
  name: "openSourceContribution",
  title: "Open Source Contribution",
  type: "document",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "stars",
      title: "Stars",
      type: "string",
    }),
    defineField({
      name: "forks",
      title: "Forks",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Repository URL",
      type: "url",
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
