import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "years",
      title: "Years",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "DevOps", value: "devops" },
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
