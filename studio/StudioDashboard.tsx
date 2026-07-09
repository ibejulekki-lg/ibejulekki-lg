'use client'

const QUICK_LINKS = [
  {
    label: '+ New Article',
    desc: 'Publish a news or event post',
    href: '/studio/intent/create/template=news;type=news/',
    color: '#111111',
    text: '#FFFFFF',
  },
  {
    label: 'Update Chairman Quote',
    desc: "Edit the chairman's message and stats",
    href: '/studio/intent/edit/id=chairmanMessage;type=chairmanMessage/',
    color: '#F5A623',
    text: '#111111',
  },
  {
    label: 'Manage Services',
    desc: 'Add or edit quick service links',
    href: '/studio/intent/create/template=quickService;type=quickService/',
    color: '#FFFFFF',
    text: '#111111',
  },
  {
    label: 'Site Settings',
    desc: 'Update contact details and socials',
    href: '/studio/intent/edit/id=siteSettings;type=siteSettings/',
    color: '#FFFFFF',
    text: '#111111',
  },
]

const TIPS = [
  'Always add alt text to images — it helps screen readers and Google.',
  'The Summary field is what appears on the homepage news card. Keep it under 200 characters.',
  'Tick "Featured Post" on the article you want to appear as the lead story on the homepage.',
  'Changes go live on the website within 60 seconds of publishing.',
  'You can save a draft without publishing — just click Save and come back later.',
]

export default function StudioDashboard() {
  const tip = TIPS[Math.floor(Date.now() / 86400000) % TIPS.length]
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF7F0',
      padding: '40px 32px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#F5A623',
            marginBottom: '8px',
          }}>
            Ibeju-Lekki LGA · Content Studio
          </div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#111111',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {greeting} 👋
          </h1>
          <p style={{
            fontSize: '14px',
            color: 'rgba(10,31,20,0.55)',
            marginTop: '6px',
          }}>
            What would you like to update today?
          </p>
        </div>

        {/* Quick actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '12px',
          marginBottom: '36px',
        }}>
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                background: link.color,
                border: link.color === '#FFFFFF' ? '1.5px solid rgba(15,61,46,0.15)' : 'none',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                transition: 'transform 0.15s, box-shadow 0.15s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'none'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: '13.5px',
                fontWeight: 700,
                color: link.text,
                marginBottom: '5px',
              }}>
                {link.label}
              </div>
              <div style={{
                fontSize: '11.5px',
                color: link.text,
                opacity: 0.6,
                lineHeight: 1.5,
              }}>
                {link.desc}
              </div>
            </a>
          ))}
        </div>

        {/* Content guide */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid rgba(15,61,46,0.1)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
        }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#F5A623',
            marginBottom: '16px',
          }}>
            How to publish a news article
          </div>
          {[
            ['1', 'Click "News & Events" in the left sidebar'],
            ['2', 'Click the pencil/edit icon or "+ New Article" above'],
            ['3', 'Fill in: Headline, Category, Date, Summary, and Body'],
            ['4', 'Upload a Cover Image (minimum 1200×800px)'],
            ['5', 'Tick "Featured Post" if this should lead the homepage'],
            ['6', 'Click Publish — it goes live within 60 seconds'],
          ].map(([num, step]) => (
            <div key={num} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '10px',
            }}>
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#111111',
                color: '#F5A623',
                fontSize: '10px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px',
              }}>
                {num}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(10,31,20,0.7)',
                lineHeight: 1.55,
              }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* Daily tip */}
        <div style={{
          background: 'rgba(200,155,60,0.08)',
          border: '1.5px solid rgba(200,155,60,0.25)',
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
          <div>
            <div style={{
              fontSize: '10.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#F5A623',
              marginBottom: '4px',
            }}>
              Tip of the day
            </div>
            <div style={{
              fontSize: '13px',
              color: 'rgba(10,31,20,0.65)',
              lineHeight: 1.6,
            }}>
              {tip}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
