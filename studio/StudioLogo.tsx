export default function StudioLogo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '0 4px',
    }}>
      <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: '#F5A623',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: '12px',
        color: '#111111',
        flexShrink: 0,
        fontFamily: 'system-ui, sans-serif',
      }}>
        IL
      </div>
      <div>
        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.2,
          fontFamily: 'system-ui, sans-serif',
        }}>
          Ibeju-Lekki LGA
        </div>
        <div style={{
          fontSize: '9px',
          color: 'rgba(255,255,255,0.55)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          lineHeight: 1.2,
          fontFamily: 'system-ui, sans-serif',
        }}>
          Content Studio
        </div>
      </div>
    </div>
  )
}
