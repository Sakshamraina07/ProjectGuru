'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'Basic';
  const price = searchParams.get('price') || '2999';
  const priceNum = parseInt(price, 10);

  const [tab, setTab] = useState('razorpay');
  const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', city: '' });
  const [utr, setUtr] = useState('');
  const [copied, setCopied] = useState(false);

  const upiId = 'rainasaksham07@okaxis';
  const upiLink = `upi://pay?pa=${upiId}&pn=ProjectGuru&am=${priceNum}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}`;

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const isFormValid = form.name && form.email && form.phone;

  const handleRazorpay = () => {
    if (!isFormValid) return alert('Please fill Name, Email and Phone.');
    const options = {
      key: 'rzp_live_XXXXXXXXXXXXXXX',
      amount: priceNum * 100,
      currency: 'INR',
      name: 'ProjectGuru',
      description: `${plan} Plan`,
      handler: (response) => {
        const params = new URLSearchParams({
          plan, price, txn: response.razorpay_payment_id, name: form.name, email: form.email
        });
        window.location.href = `/success?${params.toString()}`;
      },
      prefill: { name: form.name, email: form.email, contact: form.phone },
      theme: { color: '#6366f1' },
      modal: {
        ondismiss: () => {
          window.location.href = `/failure?plan=${plan}&price=${price}`;
        }
      }
    };
    if (typeof window !== 'undefined' && window.Razorpay) {
      new window.Razorpay(options).open();
    } else {
      alert('Razorpay SDK not loaded. Please try again.');
    }
  };

  const handleUpiConfirm = () => {
    if (!utr || utr.length < 10) return alert('Please enter a valid UTR number (at least 10 digits).');
    if (!isFormValid) return alert('Please fill Name, Email and Phone.');
    const params = new URLSearchParams({
      plan, price, txn: utr, name: form.name, email: form.email, method: 'upi'
    });
    window.location.href = `/success?${params.toString()}`;
  };

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
        {/* Header */}
        <div style={{ padding: '20px 32px', borderBottom: '1px solid #222' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 700 }}>
            ProjectGuru<span style={{ color: '#6366f1' }}>.</span>
          </a>
        </div>

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, alignItems: 'start' }}>
          {/* Left: Billing Form */}
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Checkout</h1>
            <p style={{ color: '#888', marginBottom: 32 }}>Complete your purchase for the <strong style={{ color: '#a5b4fc' }}>{plan}</strong> plan.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['name', 'email', 'phone', 'college', 'city'].map((field) => (
                <div key={field}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: 6, textTransform: 'capitalize' }}>{field} {['name','email','phone'].includes(field) && '*'}</label>
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    value={form[field]}
                    onChange={handleInput}
                    placeholder={`Enter your ${field}`}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #333', background: '#111', color: '#fff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              ))}
            </div>

            {/* Payment Tabs */}
            <div style={{ marginTop: 36 }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 16 }}>Payment Method</h2>
              <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                <button onClick={() => setTab('razorpay')} style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: tab === 'razorpay' ? '2px solid #6366f1' : '1px solid #333', background: tab === 'razorpay' ? '#1a1a2e' : '#111', color: '#fff', cursor: 'pointer', fontWeight: 600 }}>Razorpay</button>
                <button onClick={() => setTab('upi')} style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: tab === 'upi' ? '2px solid #6366f1' : '1px solid #333', background: tab === 'upi' ? '#1a1a2e' : '#111', color: '#fff', cursor: 'pointer', fontWeight: 600 }}>UPI Direct</button>
              </div>

              {tab === 'razorpay' && (
                <button onClick={handleRazorpay} style={{ width: '100%', padding: '14px 0', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
                  Pay ₹{priceNum.toLocaleString('en-IN')} with Razorpay
                </button>
              )}

              {tab === 'upi' && (
                <div style={{ textAlign: 'center' }}>
                  <img src={qrUrl} alt="UPI QR Code" style={{ width: 220, height: 220, borderRadius: 12, border: '4px solid #222', marginBottom: 16 }} />
                  <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: 8 }}>Scan with any UPI app or pay to:</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
                    <code style={{ background: '#1a1a2e', padding: '8px 16px', borderRadius: 8, color: '#a5b4fc', fontSize: '0.95rem' }}>{upiId}</code>
                    <button onClick={copyUpi} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #333', background: '#111', color: '#fff', cursor: 'pointer', fontSize: '0.8rem' }}>{copied ? '✓ Copied' : 'Copy'}</button>
                  </div>
                  <input
                    placeholder="Enter 12-digit UTR number"
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #333', background: '#111', color: '#fff', fontSize: '0.95rem', marginBottom: 12, boxSizing: 'border-box', textAlign: 'center' }}
                  />
                  <button onClick={handleUpiConfirm} style={{ width: '100%', padding: '14px 0', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
                    Confirm UPI Payment
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div style={{ background: '#111', borderRadius: 16, border: '1px solid #222', padding: 28, position: 'sticky', top: 24 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20, borderBottom: '1px solid #222', paddingBottom: 16 }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ color: '#aaa' }}>Plan</span>
              <span style={{ fontWeight: 600 }}>{plan}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ color: '#aaa' }}>Type</span>
              <span>One-time</span>
            </div>
            <div style={{ borderTop: '1px solid #222', marginTop: 16, paddingTop: 16, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Total</span>
              <span style={{ fontWeight: 800, fontSize: '1.3rem', color: '#a5b4fc' }}>₹{priceNum.toLocaleString('en-IN')}</span>
            </div>
            <p style={{ color: '#666', fontSize: '0.75rem', marginTop: 16, lineHeight: 1.5 }}>EMI available • 100% refund if not satisfied in 3 days • Secure payment via Razorpay</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
