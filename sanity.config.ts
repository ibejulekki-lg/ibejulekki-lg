import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import {
  BellIcon,
  DocumentTextIcon,
  CogIcon,
  UserIcon,
  UsersIcon,
  EnvelopeIcon,
  HomeIcon,
  WarningOutlineIcon,
  StarIcon,
  TagIcon,
  RocketIcon,
  MasterDetailIcon,
  EyeClosedIcon,
} from '@sanity/icons'

import { schemaTypes }     from './schemas'
import { theme }           from './studio/theme'
import StudioLogo          from './studio/StudioLogo'
import StudioNavbar        from './studio/StudioNavbar'
import StudioDashboard     from './studio/StudioDashboard'

/* Category list kept in step with schemas/news.ts so the studio can offer a
   folder per category. Update both together if a category is added. */
const NEWS_CATEGORIES: { title: string; value: string }[] = [
  { title: 'Governance',     value: 'governance' },
  { title: 'Infrastructure', value: 'infrastructure' },
  { title: 'Health',         value: 'health' },
  { title: 'Education',      value: 'education' },
  { title: 'Environment',    value: 'environment' },
  { title: 'Economy',        value: 'economy' },
  { title: 'Careers',        value: 'careers' },
  { title: 'Security',       value: 'security' },
  { title: 'Community',      value: 'community' },
  { title: 'Events',         value: 'events' },
]

const NEWS_DESC = [{ field: 'publishedAt', direction: 'desc' as const }]

/* The four blocks the Executive Council page renders, in page order. */
const EXEC_SECTIONS: { title: string; value: string }[] = [
  { title: 'Executive Members',   value: 'executive-members' },
  { title: 'Supervisors',         value: 'supervisors' },
  { title: 'Special Advisers',    value: 'special-advisers' },
  { title: 'Non-Cabinet Members', value: 'non-cabinet' },
]

const LEADER_ORDER = [{ field: 'order', direction: 'asc' as const }]

export default defineConfig({
  name:    'ibeju-lekki-lga',
  title:   'Ibeju-Lekki LGA',
  // Guarded so a missing environment variable degrades gracefully in the
  // studio UI instead of crashing the whole /studio route.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath:  '/studio',

  theme,

  studio: {
    components: {
      logo:    StudioLogo,
      navbar:  StudioNavbar,
    },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Ibeju-Lekki CMS')
          .items([
            S.listItem()
              .title('Dashboard')
              .icon(HomeIcon)
              .child(
                S.component(StudioDashboard)
                  .title('Welcome - Ibeju-Lekki Content Studio')
              ),

            S.divider(),

            S.listItem()
              .title('News & Events')
              .icon(DocumentTextIcon)
              .child(
                S.list()
                  .title('News & Events')
                  .items([
                    S.listItem()
                      .id('all-articles')
                      .title('All Articles')
                      .icon(DocumentTextIcon)
                      .child(
                        S.documentTypeList('news')
                          .title('All Articles')
                          .defaultOrdering(NEWS_DESC)
                      ),
                    S.listItem()
                      .id('needs-attention')
                      .title('Needs Attention')
                      .icon(WarningOutlineIcon)
                      .child(
                        S.documentList()
                          .id('news-needs-attention')
                          .title('Missing Cover Image, Alt Text or Summary')
                          .schemaType('news')
                          .filter('_type == "news" && (!defined(coverImage.asset) || !defined(coverImage.alt) || !defined(summary))')
                          .defaultOrdering(NEWS_DESC)
                      ),
                    S.listItem()
                      .id('featured-posts')
                      .title('Featured')
                      .icon(StarIcon)
                      .child(
                        S.documentList()
                          .id('news-featured')
                          .title('Featured Posts')
                          .schemaType('news')
                          .filter('_type == "news" && featured == true')
                          .defaultOrdering(NEWS_DESC)
                      ),
                    S.divider(),
                    S.listItem()
                      .id('by-category')
                      .title('By Category')
                      .icon(TagIcon)
                      .child(
                        S.list()
                          .title('By Category')
                          .items(
                            NEWS_CATEGORIES.map((c) =>
                              S.listItem()
                                .id(c.value)
                                .title(c.title)
                                .child(
                                  S.documentList()
                                    .id('news-cat-' + c.value)
                                    .title(c.title)
                                    .schemaType('news')
                                    .filter('_type == "news" && category == $cat')
                                    .params({ cat: c.value })
                                    .defaultOrdering(NEWS_DESC)
                                )
                            )
                          )
                      ),
                  ])
              ),

            S.divider(),

            S.listItem()
              .title('Leadership')
              .icon(MasterDetailIcon)
              .child(
                S.list()
                  .title('Leadership')
                  .items([
                    S.listItem()
                      .id('exec-council')
                      .title('Executive Council')
                      .icon(UsersIcon)
                      .child(
                        S.list()
                          .title('Executive Council')
                          .items(
                            EXEC_SECTIONS.map((sec) =>
                              S.listItem()
                                .id(sec.value)
                                .title(sec.title)
                                .child(
                                  S.documentList()
                                    .id('leader-' + sec.value)
                                    .title(sec.title)
                                    .schemaType('leader')
                                    .filter('_type == "leader" && arm == "executive" && section == $sec && active == true')
                                    .params({ sec: sec.value })
                                    .defaultOrdering(LEADER_ORDER)
                                    .initialValueTemplates([])
                                )
                            )
                          )
                      ),
                    S.listItem()
                      .id('legislative-council')
                      .title('Legislative Council')
                      .icon(UsersIcon)
                      .child(
                        S.documentList()
                          .id('leader-legislative')
                          .title('Councillors')
                          .schemaType('leader')
                          .filter('_type == "leader" && arm == "legislative" && active == true')
                          .defaultOrdering(LEADER_ORDER)
                      ),
                    S.listItem()
                      .id('technical-advisers')
                      .title('Technical Advisers')
                      .icon(UsersIcon)
                      .child(
                        S.documentList()
                          .id('leader-advisers')
                          .title('Technical Advisers')
                          .schemaType('leader')
                          .filter('_type == "leader" && arm == "advisers" && active == true')
                          .defaultOrdering(LEADER_ORDER)
                      ),
                    S.listItem()
                      .id('management-team')
                      .title('Management Team')
                      .icon(UsersIcon)
                      .child(
                        S.documentList()
                          .id('leader-management')
                          .title('Management Team')
                          .schemaType('leader')
                          .filter('_type == "leader" && arm == "management" && active == true')
                          .defaultOrdering(LEADER_ORDER)
                      ),
                    S.divider(),
                    S.listItem()
                      .id('leader-all')
                      .title('Everyone')
                      .icon(MasterDetailIcon)
                      .child(
                        S.documentTypeList('leader')
                          .title('Every Leadership Member')
                          .defaultOrdering([
                            { field: 'arm', direction: 'asc' },
                            { field: 'order', direction: 'asc' },
                          ])
                      ),
                    S.listItem()
                      .id('leader-hidden')
                      .title('No Longer in Office')
                      .icon(EyeClosedIcon)
                      .child(
                        S.documentList()
                          .id('leader-inactive')
                          .title('Hidden from the website')
                          .schemaType('leader')
                          .filter('_type == "leader" && active != true')
                          .defaultOrdering(LEADER_ORDER)
                      ),
                  ])
              ),

            S.listItem()
              .title('Programmes')
              .icon(RocketIcon)
              .child(
                S.documentTypeList('programme')
                  .title('Career & Skills Programmes')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

            S.listItem()
              .title('Quick Services')
              .icon(BellIcon)
              .child(
                S.documentTypeList('quickService')
                  .title('Government Services')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

            S.listItem()
              .title("Chairman's Message")
              .icon(UserIcon)
              .child(
                S.document()
                  .schemaType('chairmanMessage')
                  .documentId('chairmanMessage')
                  .title("Chairman's Message")
              ),

            S.divider(),

            S.listItem()
              .title('Audience')
              .icon(UsersIcon)
              .child(
                S.list()
                  .title('Audience')
                  .items([
                    S.listItem()
                      .title('Newsletter Subscribers')
                      .icon(EnvelopeIcon)
                      .child(
                        S.documentTypeList('subscriber')
                          .title('Newsletter Subscribers')
                          .defaultOrdering([{ field: 'subscribedAt', direction: 'desc' }])
                      ),
                    S.listItem()
                      .title('Contact Messages')
                      .icon(EnvelopeIcon)
                      .child(
                        S.documentTypeList('contactMessage')
                          .title('Contact Messages')
                          .defaultOrdering([{ field: 'receivedAt', direction: 'desc' }])
                      ),
                    S.listItem()
                      .title('Push Subscriptions')
                      .icon(BellIcon)
                      .child(
                        S.documentTypeList('pushSubscription')
                          .title('Push Subscriptions')
                          .defaultOrdering([{ field: 'subscribedAt', direction: 'desc' }])
                      ),
                  ])
              ),

            S.divider(),

            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
          ]),

      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([S.view.form()])
      },
    }),

    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
  ],

  schema: { types: schemaTypes },

  document: {
    productionUrl: async (prev, { document }) => {
      const slug = (document as any)?.slug?.current
      if (document._type === 'news' && slug) {
        return `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/news/${slug}`
      }
      return prev
    },
  },
})
