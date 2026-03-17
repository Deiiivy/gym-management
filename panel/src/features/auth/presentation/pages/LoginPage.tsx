import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(form);
      navigate('/dashboard');
    } catch {}
  };

  return (
    <AuthLayout
      title="Iniciar sesión"
      subtitle="Accede a tu cuenta del gimnasio"
    >
      <form onSubmit={onSubmit}>
        <div style={{ display: 'grid', gap: 16 }}>
          <input
            placeholder="Correo"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            style={inputStyle}
          />

          {error && (
            <div style={{ color: '#d92d20', fontSize: 14 }}>{error}</div>
          )}

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Ingresando...' : 'Entrar'}
          </button>

          <Link to="/register" style={{ textAlign: 'center' }}>
            Crear cuenta
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

const inputStyle: React.CSSProperties = {
  height: 48,
  borderRadius: 12,
  border: '1px solid #d0d5dd',
  padding: '0 14px',
  fontSize: 16,
};

const buttonStyle: React.CSSProperties = {
  height: 48,
  borderRadius: 12,
  border: 'none',
  background: '#111827',
  color: '#fff',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
};