import type { ReactNode } from 'react';

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthLayout({ title, subtitle, children }: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#f4f7fb',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 460,
          background: '#fff',
          borderRadius: 20,
          padding: 24,
          boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 30 }}>{title}</h1>
        <p style={{ marginTop: 8, color: '#667085' }}>{subtitle}</p>
        <div style={{ marginTop: 24 }}>{children}</div>
      </div>
    </div>
  );
}