import { defineField, defineType, defineArrayMember } from 'sanity'

/* Shared link annotation used inside the body rich text. Validates that the
   URL is a real http(s) address (or a mailto:) so staff cannot save a broken
   link by mistake. */
const linkAnnotation = {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'href',
      type: 'url',
      title: 'URL',
      validation: (R) =>
        R.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
    }),
    defineField({
      name: 'blank',
      type: 'boolean',
      title: 'Open in new tab',
      initialValue: true,
    }),
  ],
}

export default defineType({
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    defineField({ name:'title', title:'Headline', type:'string', validation:(R)=>R.required().max(120) }),
    defineField({ name:'slug', title:'Slug', type:'slug', options:{ source:'title', maxLength:96 }, validation:(R)=>R.required() }),
    defineField({
      name:'category', title:'Category', type:'string',
      options:{ list:[
        { title:'Governance',     value:'governance' },
        { title:'Infrastructure', value:'infrastructure' },
        { title:'Health',         value:'health' },
        { title:'Education',      value:'education' },
        { title:'Environment',    value:'environment' },
        { title:'Economy',        value:'economy' },
        { title:'Careers',        value:'careers' },
        { title:'Security',       value:'security' },
        { title:'Community',      value:'community' },
        { title:'Events',         value:'events' },
      ]},
      validation:(R)=>R.required(),
    }),
    defineField({ name:'publishedAt', title:'Published Date', type:'datetime', validation:(R)=>R.required() }),
    defineField({ name:'featured', title:'Featured Post', type:'boolean', description:'Show as lead story on homepage', initialValue:false }),
    defineField({
      name:'coverImage', title:'Cover Image', type:'image', options:{ hotspot:true },
      fields:[ defineField({ name:'alt', title:'Alt Text', type:'string', validation:(R)=>R.required() }) ],
    }),
    defineField({ name:'summary', title:'Summary', type:'text', rows:3, description:'Max 200 chars - shown on cards', validation:(R)=>R.required().max(200) }),
    defineField({
      name:'body', title:'Full Article Body', type:'array',
      of:[
        defineArrayMember({
          type:'block',
          marks:{
            annotations:[ linkAnnotation ],
          },
        }),
        defineArrayMember({
          type:'image', options:{ hotspot:true },
          fields:[
            defineField({ name:'alt', type:'string', title:'Alt Text', description:'Describe the picture for screen readers and search engines.', validation:(R)=>R.required().warning('Add alt text so people using screen readers know what this picture shows.') }),
            defineField({ name:'caption', type:'string', title:'Caption' }),
          ],
        }),
        // Image gallery: several photos shown together as a grid.
        defineArrayMember({
          type:'object',
          name:'gallery',
          title:'Image Gallery',
          fields:[
            defineField({
              name:'images', title:'Images', type:'array',
              of:[{
                type:'image', options:{ hotspot:true },
                fields:[
                  { name:'alt', type:'string', title:'Alt Text', validation:(R:any)=>R.required().warning('Add alt text for this photo.') },
                  { name:'caption', type:'string', title:'Caption' },
                ],
              }],
              validation:(R)=>R.min(2).max(12),
              description:'Add 2 to 12 photos. They appear as a grid in the article.',
            }),
            defineField({ name:'caption', title:'Gallery Caption', type:'string' }),
          ],
          preview:{
            select:{ caption:'caption', images:'images' },
            prepare({ caption, images }:{ caption?:string; images?:any[] }){
              const n = Array.isArray(images) ? images.length : 0
              return { title: caption || 'Image gallery', subtitle: n + ' image' + (n === 1 ? '' : 's') }
            },
          },
        }),
        // Inline downloadable file (e.g. an application form or notice PDF).
        defineArrayMember({
          type:'file',
          name:'fileDownload',
          title:'File Download',
          fields:[
            defineField({ name:'label', type:'string', title:'Button Label', description:'e.g. Download application form', validation:(R)=>R.required() }),
          ],
        }),
      ],
    }),
    // Dedicated call-to-action, shown as a prominent button on the article.
    // Ideal for job posts: link straight to an application portal or form,
    // or upload a form file for people to download.
    defineField({
      name:'cta',
      title:'Call-to-Action Button (optional)',
      type:'object',
      description:'Adds a prominent button to the article, e.g. Apply Now or Download Form.',
      options:{ collapsible:true, collapsed:true },
      fields:[
        defineField({ name:'label', type:'string', title:'Button Label', description:'e.g. Apply Now, Download Form, Register Here' }),
        defineField({
          name:'href', type:'url', title:'Button Link (URL)',
          description:'Where the button goes. Leave empty if using an uploaded file below instead.',
          validation:(R)=>R.uri({ scheme:['http','https','mailto','tel'] }),
        }),
        defineField({ name:'file', type:'file', title:'Or upload a file', description:'If set and no URL is given, the button downloads this file.' }),
      ],
      validation:(R)=>R.custom((cta:any)=>{
        if (!cta) return true
        const hasLabel = !!cta.label
        const hasTarget = !!cta.href || !!(cta.file && cta.file.asset)
        if (hasTarget && !hasLabel) return 'Add a button label.'
        if (hasLabel && !hasTarget) return 'Add a link or upload a file for the button.'
        return true
      }),
    }),
    defineField({ name:'author', title:'Author', type:'string', initialValue:'Ibeju-Lekki LGA Communications' }),
    defineField({ name:'tags', title:'Tags', type:'array', of:[{ type:'string' }], options:{ layout:'tags' } }),
  ],
  orderings:[{ title:'Published Date (Newest)', name:'publishedAtDesc', by:[{ field:'publishedAt', direction:'desc' }] }],
  preview:{ select:{ title:'title', subtitle:'category', media:'coverImage' } },
})
