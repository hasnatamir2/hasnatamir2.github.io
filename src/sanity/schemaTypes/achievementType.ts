import { defineField, defineType } from "sanity";
import { ConfettiIcon } from "@sanity/icons";

export const achievementType = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon key used in the UI.",
      options: {
        list: [
          { title: "Trophy", value: "trophy" },
          { title: "Award", value: "award" },
          { title: "Star", value: "star" },
        ],
      },
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
