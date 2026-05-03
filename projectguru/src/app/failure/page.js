'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FailureContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || '';
  const price = searchParams.get('price') || '';

  const retryUrl = plan && price ? `/checkout?plan=${plan}&price=${price}` : '/';

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'var(--font-inter, Inter, sans-serif)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 480, width: '100%', padding: 32, textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #ef4444, #dc2626)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '2.2rem' }}>✕</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>Payment Failed</h1>
        <p style={{ color: '#888', marginBottom: 32 }}>Something went wrong with your payment. No amount has been deducted from your account.</p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={retryUrl} style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 10, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            Try Again
          </a>
          <a href="/" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 10, border: '1px solid #333', background: '#111', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            Back to Home
          </a>
        </div>

        <p style={{ color: '#666', fontSize: '0.8rem', marginTop: 28 }}>If money was deducted, it will be refunded within 5-7 business days. Need help? Contact us on Telegram.</p>
      </div>
    </div>
  );
}

export default function FailurePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading...</div>}>
      <FailureContent />
    </Suspense>
  );
}
