import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pushSubscription',
  title: 'Push Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'endpoint',
      title: 'Endpoint',
      type: 'url',
      readOnly: true,
      description: 'Delivery address issued by the browser push service.',
    }),
    defineField({
      name: 'keys',
      title: 'Encryption Keys',
      type: 'object',
      readOnly: true,
      fields: [
        { name: 'p256dh', title: 'p256dh', type: 'string' },
        { name: 'auth', title: 'auth', type: 'string' },
      ],
    }),
    defineField({
      name: 'userAgent',
      title: 'Browser',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: 'userAgent', subtitle: 'subscribedAt' },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ? title.slice(0, 60) : 'Browser subscription',
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
      }
    },
  },
})
