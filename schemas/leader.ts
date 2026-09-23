import { defineField, defineType } from 'sanity'

/* Every person on the Executive Council, Legislative Council and Management
   Team. Council staff add, edit, reorder and retire members here; no code
   change is needed for a reshuffle, an election or a new appointment.

   Retiring someone: switch "Show on website" off. The record and the
   photograph are kept, so the history survives and the person can be brought
   back later. Deleting is still possible but rarely the right choice. */

export const ARMS = [
  { title: 'Executive Council',   value: 'executive' },
  { title: 'Legislative Council', value: 'legislative' },
  { title: 'Technical Advisers',  value: 'advisers' },
  { title: 'Management Team',     value: 'management' },
]

export const EXEC_SECTIONS = [
  { title: 'Executive Members',   value: 'executive-members' },
  { title: 'Supervisors',         value: 'supervisors' },
  { title: 'Special Advisers',    value: 'special-advisers' },
  { title: 'Non-Cabinet Members', value: 'non-cabinet' },
]

export default defineType({
  name: 'leader',
  title: 'Leadership Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Include the honorific, for example Hon. Engr. Abdullahi Sesan Olowa',
      validation: (R) => R.required().max(90),
    }),
    defineField({
      name: 'arm',
      title: 'Arm of Council',
      type: 'string',
      description: 'Which page this person appears on.',
      options: { list: ARMS, layout: 'radio' },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      description: 'Executive Council only. Which block on the page this person sits in.',
      options: { list: EXEC_SECTIONS },
      hidden: ({ document }) => document?.arm !== 'executive',
      validation: (R) =>
        R.custom((value, ctx) => {
          const doc = ctx.document as { arm?: string } | undefined
          if (doc?.arm === 'executive' && !value) return 'Choose a section for Executive Council members.'
          return true
        }),
    }),
    defineField({
      name: 'role',
      title: 'Role or Portfolio',
      type: 'string',
      description: 'For example Supervisor for Health. Leave empty for non-cabinet members.',
      validation: (R) => R.max(110),
    }),
    defineField({
      name: 'ward',
      title: 'Ward',
      type: 'string',
      description: 'Legislative councillors only, for example Ward C1.',
      hidden: ({ document }) => document?.arm !== 'legislative',
    }),
    defineField({
      name: 'photo',
      title: 'Portrait',
      type: 'image',
      options: { hotspot: true },
      description: 'A head and shoulders photograph. Without one, the card shows the initials.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the photograph for screen readers, for example the name and role.',
          validation: (R) => R.required().warning('Add alt text so screen reader users know who this is.'),
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Short Profile',
      type: 'text',
      rows: 3,
      description: 'Optional. Two or three sentences shown under the name on the card.',
      validation: (R) => R.max(400),
    }),
    defineField({
      name: 'featured',
      title: 'Feature at the top of the page',
      type: 'boolean',
      description: 'Legislative Council only. The Leader of the Council is shown alone above the grid.',
      initialValue: false,
      hidden: ({ document }) => document?.arm !== 'legislative',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within the section. Leave gaps of 10 so people can be slotted in later.',
      validation: (R) => R.required().integer().min(0),
      initialValue: 100,
    }),
    defineField({
      name: 'active',
      title: 'Show on website',
      type: 'boolean',
      description:
        'Switch off when someone leaves office. They disappear from the website but the record and photograph are kept.',
      initialValue: true,
    }),
  ],

  orderings: [
    {
      title: 'Arm, then display order',
      name: 'armOrder',
      by: [
        { field: 'arm', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],

  preview: {
    select: { title: 'name', role: 'role', ward: 'ward', media: 'photo', active: 'active', arm: 'arm' },
    /* Sanity types the selection object itself. Annotating media as
       unknown here makes the return value incompatible with its
       PreviewValue, so the fields are read off a loose record. */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(sel: Record<string, any>) {
      const { title, role, ward, media, active, arm } = sel
      const armLabel = ARMS.find((a) => a.value === arm)?.title ?? ''
      const bits = [role, ward].filter(Boolean).join(' - ')
      return {
        title: (active === false ? '(hidden) ' : '') + (title ?? 'Unnamed'),
        subtitle: bits || armLabel,
        media,
      }
    },
  },
})

