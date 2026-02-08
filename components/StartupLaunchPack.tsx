import Link from 'next/link'

export default function StartupLaunchPack() {
  const packages = [
    {
      name: 'Starter Pack',
      price: '$2,999',
      description: 'Perfect for early-stage startups',
      features: [
        'Landing Page',
        'Logo Design',
        'Basic SEO',
        'Social Media Setup',
        '1 Month Support'
      ]
    },
    {
      name: 'Growth Pack',
      price: '$7,999',
      description: 'For startups ready to scale',
      features: [
        'Full Website (5 pages)',
        'Brand Identity Package',
        'Advanced SEO',
        'Marketing Strategy',
        'Analytics Setup',
        '3 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Pack',
      price: '$15,999',
      description: 'Complete solution for ambitious startups',
      features: [
        'Custom Web Application',
        'Mobile App (iOS/Android)',
        'Complete Branding',
        'Marketing Campaign',
        'CRM Integration',
        'Team Training',
        '6 Months Support'
      ]
    }
  ]

  return (
    <main className="container">
      <Link href="/" className="btn" style={{ marginBottom: '2rem' }}>← Back to Home</Link>
      
      <h1 className="section-title">Startup Launch Pack</h1>
      <p className="section-subtitle">
        Everything you need to launch your startup successfully
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ 
              position: 'relative',
              border: pkg.popular ? '2px solid #2563eb' : 'none'
            }}
          >
            {pkg.popular && (
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '20px',
                background: '#2563eb',
                color: 'white',
                padding: '0.25rem 1rem',
                borderRadius: '1rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                Most Popular
              </div>
            )}
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#111827' }}>
              {pkg.name}
            </h3>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.5rem' }}>
              {pkg.price}
            </div>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>{pkg.description}</p>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {pkg.features.map((feature, idx) => (
                <li key={idx} style={{ 
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="btn" style={{ width: '100%', textAlign: 'center', border: 'none', cursor: 'pointer' }}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
