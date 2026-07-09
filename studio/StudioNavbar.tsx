import { type NavbarProps } from 'sanity'

export default function StudioNavbar(props: NavbarProps) {
  return (
    <div style={{
      background: '#111111',
      borderBottom: '1px solid rgba(245,166,35,0.25)',
    }}>
      {/* Color stripe, matched to the site header stripe */}
      <div style={{ display: 'flex', height: '3px' }}>
        <div style={{ flex: 1, background: '#BE1E2D' }} />
        <div style={{ flex: 1, background: '#14377D' }} />
        <div style={{ flex: 1, background: '#F5A623' }} />
        <div style={{ flex: 1, background: '#1E7A3D' }} />
      </div>
      {props.renderDefault(props)}
    </div>
  )
}
