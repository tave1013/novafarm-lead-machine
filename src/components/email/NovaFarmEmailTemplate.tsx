
import React from 'react';

interface NovaFarmEmailTemplateProps {
  recipientName?: string;
  subject: string;
  mainContent: string;
  ctaText?: string;
  ctaLink?: string;
  footerContent?: string;
}

export const NovaFarmEmailTemplate: React.FC<NovaFarmEmailTemplateProps> = ({
  recipientName = "Valued Customer",
  subject,
  mainContent,
  ctaText,
  ctaLink,
  footerContent
}) => {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: '1.6',
      color: '#333333',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#078147',
        padding: '40px 30px',
        textAlign: 'center' as const
      }}>
        <div style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '8px'
        }}>
          NovaFarm
        </div>
        <div style={{
          fontSize: '14px',
          color: '#ffffff',
          opacity: 0.9
        }}>
          Smart Pharmacy Management Solutions
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '40px 30px'
      }}>
        {/* Greeting */}
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#078147',
          marginBottom: '24px'
        }}>
          Ciao {recipientName},
        </div>

        {/* Subject Line */}
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginBottom: '24px',
          lineHeight: '1.3'
        }}>
          {subject}
        </h1>

        {/* Main Message */}
        <div 
          style={{
            fontSize: '16px',
            color: '#4a5568',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}
          dangerouslySetInnerHTML={{ __html: mainContent }}
        />

        {/* Call to Action Button */}
        {ctaText && ctaLink && (
          <div style={{
            textAlign: 'center' as const,
            marginBottom: '32px'
          }}>
            <a
              href={ctaLink}
              style={{
                display: 'inline-block',
                backgroundColor: '#078147',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              {ctaText}
            </a>
          </div>
        )}

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: '#e2e8f0',
          margin: '32px 0'
        }} />

        {/* Support Section */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '32px'
        }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#078147',
            marginBottom: '12px'
          }}>
            Hai bisogno di aiuto?
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '16px'
          }}>
            Il nostro team di supporto è sempre a tua disposizione per aiutarti con qualsiasi domanda.
          </div>
          <div style={{
            fontSize: '14px'
          }}>
            📧 <a href="mailto:support@novafarm.com" style={{ color: '#078147', textDecoration: 'none' }}>support@novafarm.com</a><br />
            📞 <span style={{ color: '#6b7280' }}>+39 02 1234 5678</span><br />
            💬 <a href="https://novafarm.com/support" style={{ color: '#078147', textDecoration: 'none' }}>Chat dal vivo</a>
          </div>
        </div>

        {/* Signature */}
        <div style={{
          fontSize: '16px',
          color: '#4a5568'
        }}>
          Cordiali saluti,<br />
          <strong style={{ color: '#078147' }}>Il Team NovaFarm</strong>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderTop: '1px solid #e2e8f0'
      }}>
        {/* Custom Footer Content */}
        {footerContent && (
          <div 
            style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '20px',
              textAlign: 'center' as const
            }}
            dangerouslySetInnerHTML={{ __html: footerContent }}
          />
        )}

        {/* Company Info */}
        <div style={{
          textAlign: 'center' as const,
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '16px'
        }}>
          <div style={{ marginBottom: '8px' }}>
            <strong>NovaFarm S.r.l.</strong>
          </div>
          <div>
            Via Milano 123, 20121 Milano, Italia
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          textAlign: 'center' as const,
          marginBottom: '20px'
        }}>
          <a href="https://novafarm.com" style={{
            color: '#078147',
            textDecoration: 'none',
            fontSize: '12px',
            margin: '0 8px'
          }}>
            Website
          </a>
          <span style={{ color: '#d1d5db', fontSize: '12px' }}>|</span>
          <a href="https://linkedin.com/company/novafarm" style={{
            color: '#078147',
            textDecoration: 'none',
            fontSize: '12px',
            margin: '0 8px'
          }}>
            LinkedIn
          </a>
          <span style={{ color: '#d1d5db', fontSize: '12px' }}>|</span>
          <a href="https://novafarm.com/privacy" style={{
            color: '#078147',
            textDecoration: 'none',
            fontSize: '12px',
            margin: '0 8px'
          }}>
            Privacy Policy
          </a>
        </div>

        {/* Unsubscribe */}
        <div style={{
          textAlign: 'center' as const,
          fontSize: '11px',
          color: '#9ca3af'
        }}>
          Non vuoi più ricevere queste email?{' '}
          <a href="#" style={{
            color: '#6b7280',
            textDecoration: 'underline'
          }}>
            Annulla iscrizione
          </a>
        </div>
      </div>
    </div>
  );
};

export default NovaFarmEmailTemplate;
