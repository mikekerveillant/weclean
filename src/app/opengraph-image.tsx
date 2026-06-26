import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/weclean-symbol-white.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#061b2f',
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        {/* Accent bar top */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #0075ee 0%, #3ac6f5 100%)',
          display: 'flex',
        }} />

        {/* Decorative circle — top right */}
        <div style={{
          position: 'absolute',
          top: '-120px', right: '-120px',
          width: '480px', height: '480px',
          borderRadius: '50%',
          background: 'rgba(0, 117, 238, 0.08)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          top: '-40px', right: '-40px',
          width: '280px', height: '280px',
          borderRadius: '50%',
          background: 'rgba(58, 198, 245, 0.06)',
          display: 'flex',
        }} />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={52} height={52} alt="" style={{ display: 'flex' }} />
          <span style={{
            fontSize: '36px',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-1px',
            display: 'flex',
          }}>
            weclean
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
            <span style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              display: 'flex',
            }}>
              Big on Quality.
            </span>
            <span style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#3ac6f5',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              display: 'flex',
            }}>
              WeClean for Less.
            </span>
          </div>

          <div style={{
            fontSize: '26px',
            color: '#a3edff',
            fontWeight: 400,
            lineHeight: 1.5,
            display: 'flex',
          }}>
            Premium laundry, sneaker cleaning &amp; pickup · 13 branches across the Philippines
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '40px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <span style={{ fontSize: '22px', color: '#3ac6f5', fontWeight: 600, display: 'flex' }}>
            weclean.com.ph
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Makati', 'Manila', 'Pasay', 'Pasig', 'QC', 'El Nido', 'Siargao'].map((city) => (
              <div
                key={city}
                style={{
                  fontSize: '14px',
                  color: 'rgba(163, 237, 255, 0.7)',
                  background: 'rgba(0, 117, 238, 0.15)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  display: 'flex',
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
