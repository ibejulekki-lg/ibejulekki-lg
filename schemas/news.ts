import { defineField, defineType } from 'sanity'

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
    defineField({ name:'summary', title:'Summary', type:'text', rows:3, description:'Max 200 chars — shown on cards', validation:(R)=>R.required().max(200) }),
    defineField({
      name:'body', title:'Full Article Body', type:'array',
      of:[ { type:'block' }, { type:'image', options:{ hotspot:true }, fields:[
        defineField({ name:'alt', type:'string', title:'Alt Text' }),
        defineField({ name:'caption', type:'string', title:'Caption' }),
      ]}],
    }),
    defineField({ name:'author', title:'Author', type:'string', initialValue:'Ibeju-Lekki LGA Communications' }),
    defineField({ name:'tags', title:'Tags', type:'array', of:[{ type:'string' }], options:{ layout:'tags' } }),
  ],
  orderings:[{ title:'Published Date (Newest)', name:'publishedAtDesc', by:[{ field:'publishedAt', direction:'desc' }] }],
  preview:{ select:{ title:'title', subtitle:'category', media:'coverImage' } },
})
