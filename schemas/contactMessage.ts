import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactMessage',
  title: 'Contact Message',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'subject', title: 'Subject', type: 'string', readOnly: true }),
    defineField({ name: 'message', title: 'Message', type: 'text', rows: 8, readOnly: true }),
    defineField({ name: 'receivedAt', title: 'Received At', type: 'datetime', readOnly: true }),
    defineField({
      name: 'handled',
      title: 'Handled',
      type: 'boolean',
      initialValue: false,
      description: 'Tick once this message has been responded to.',
    }),
  ],
  orderings: [{ title: 'Newest First', name: 'receivedAtDesc', by: [{ field: 'receivedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'subject', handled: 'handled' },
    prepare({ title, subtitle, handled }: { title?: string; subtitle?: string; handled?: boolean }) {
      return {
        title: (handled ? 'Handled: ' : '') + (title ?? 'Contact message'),
        subtitle: subtitle ?? '',
      }
    },
  },
})
