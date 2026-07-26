import { defineField, defineType, defineArrayMember } from 'sanity'

/* A training, skills or employment programme run by the council, shown under
   Career and Jobs. Staff add and edit these in the studio; no code change is
   needed to publish a new programme or update how people apply. */

export default defineType({
  name: 'programme',
  title: 'Programme',
  type: 'document',
  fields: [
    defineField({
      name: 'title', title: 'Programme Name', type: 'string',
      description: 'e.g. Career Accelerator Programme',
      validation: (R) => R.required().max(90),
    }),
    defineField({
      name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'summary', title: 'Short Summary', type: 'text', rows: 3,
      description: 'One or two sentences shown on the programme card. Max 220 characters.',
      validation: (R) => R.required().max(220),
    }),
    defineField({
      name: 'status', title: 'Status', type: 'string',
      options: {
        list: [
          { title: 'Open for applications', value: 'open' },
          { title: 'Coming soon',           value: 'upcoming' },
          { title: 'Applications closed',   value: 'closed' },
          { title: 'Ongoing',               value: 'ongoing' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'coverImage', title: 'Cover Image', type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt', title: 'Alt Text', type: 'string',
          validation: (R) => R.required().warning('Add alt text so screen readers can describe this image.'),
        }),
      ],
    }),
    defineField({
      name: 'audience', title: 'Who It Is For', type: 'string',
      description: 'e.g. Young people aged 18 to 35 resident in Ibeju-Lekki',
    }),
    defineField({
      name: 'outcomes', title: 'What You Will Learn', type: 'array',
      of: [{ type: 'string' }],
      description: 'Add one skill or outcome per line.',
    }),
    defineField({
      name: 'partners', title: 'Partners', type: 'array',
      of: [{ type: 'string' }],
      description: 'Organisations delivering the programme with the council.',
    }),
    defineField({
      name: 'venue', title: 'Venue or Delivery', type: 'string',
      description: 'e.g. Ibeju-Lekki ICT Training Centre',
    }),
    defineField({
      name: 'body', title: 'Full Description', type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image', options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt Text' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'howToApply', title: 'How To Apply', type: 'array',
      of: [{ type: 'string' }],
      description: 'One step per line. Leave empty while applications are not yet open.',
    }),
    defineField({
      name: 'applyLink', title: 'Application Link', type: 'url',
      description: 'Where the Apply button goes. Leave empty if using a downloadable form below.',
      validation: (R) => R.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
    }),
    defineField({
      name: 'applyFile', title: 'Or Application Form (file)', type: 'file',
      description: 'If set and no link is given, the Apply button downloads this form.',
    }),
    defineField({
      name: 'deadline', title: 'Application Deadline', type: 'date',
      options: { dateFormat: 'DD MMMM YYYY' },
    }),
    defineField({
      name: 'contact', title: 'Enquiries Contact', type: 'string',
      description: 'Phone number or email for questions about this programme.',
    }),
    defineField({
      name: 'order', title: 'Display Order', type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 10,
    }),
    defineField({
      name: 'active', title: 'Show On Website', type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', status: 'status', media: 'coverImage', active: 'active' },
    prepare({ title, status, media, active }: { title?: string; status?: string; media?: any; active?: boolean }) {
      const labels: Record<string, string> = {
        open: 'Open for applications',
        upcoming: 'Coming soon',
        closed: 'Applications closed',
        ongoing: 'Ongoing',
      }
      return {
        title: title ?? 'Programme',
        subtitle: (active === false ? 'Hidden - ' : '') + (labels[status ?? ''] ?? ''),
        media,
      }
    },
  },
})
