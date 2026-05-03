'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'Basic';
  const price = searchParams.get('price') || '2999';
  const txn = searchParams.get('txn') || 'N/A';
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const method = searchParams.get('method') || 'razorpay';
  const priceNum = parseInt(price, 10);
  const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'var(--font-inter, Inter, sans-serif)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 520, width: '100%', padding: 32, textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '2.2rem' }}>✓</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>Payment Successful!</h1>
        <p style={{ color: '#888', marginBottom: 32 }}>Thank you, <strong style={{ color: '#a5b4fc' }}>{name || 'Student'}</strong>. Your {plan} plan is now active.</p>

        <div style={{ background: '#111', borderRadius: 16, border: '1px solid #222', padding: 28, textAlign: 'left', marginBottom: 28 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16, borderBottom: '1px solid #222', paddingBottom: 12 }}>Payment Receipt</h3>
          {[
            ['Plan', plan],
            ['Amount', `₹${priceNum.toLocaleString('en-IN')}`],
            ['Transaction ID', txn],
            ['Method', method === 'upi' ? 'UPI Direct' : 'Razorpay'],
            ['Date', date],
            ['Email', email || 'N/A'],
          ].map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.9rem' }}>
              <span style={{ color: '#888' }}>{label}</span>
              <span style={{ fontWeight: 500, maxWidth: 220, textAlign: 'right', wordBreak: 'break-all' }}>{value}</span>
            </div>
          ))}
        </div>

        <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: 20 }}>A confirmation has been sent to your email. Our team will contact you within 24 hours to assign your mentor.</p>

        <a href="/" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 10, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
