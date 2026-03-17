import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { useAuth } from '../hooks/useAuth';

export function RegisterPage() {
  const navigate = useNavigate();
  const { register, loading, error } = useAuth();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'CLIENT',
    phone: '',
    gymId: '',
    gymName: '',
    gymSlug: '',
  });

  const needsGymId = form.role === 'TRAINER' || form.role === 'CLIENT';
  const needsGymCreate = form.role === 'GYM_OWNER';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        role: form.role,
        phone: form.phone || undefined,
        gymId: needsGymId ? form.gymId || undefined : undefined,
        gymName: needsGymCreate ? form.gymName || undefined : undefined,
        gymSlug: needsGymCreate ? form.gymSlug || undefined : undefined,
      });

      navigate('/dashboard');
    } catch {}
  };

  return (
    <AuthLayout
      title="Crear cuenta"
      subtitle="Regístrate como cliente, entrenador o dueño"
    >
      <form onSubmit={onSubmit}>
        <div style={{ display: 'grid', gap: 16 }}>
          <select
            value={form.role}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, role: e.target.value }))
            }
            style={inputStyle}
          >
            <option value="CLIENT">Cliente</option>
            <option value="TRAINER">Entrenador</option>
            <option value="GYM_OWNER">Dueño de gimnasio</option>
          </select>

          <input
            placeholder="Nombre"
            value={form.firstName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, firstName: e.target.value }))
            }
            style={inputStyle}
          />

          <input
            placeholder="Apellido"
            value={form.lastName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lastName: e.target.value }))
            }
            style={inputStyle}
          />

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

          <input
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: e.target.value }))
            }
            style={inputStyle}
          />

          {needsGymId && (
            <input
              placeholder="Gym ID"
              value={form.gymId}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, gymId: e.target.value }))
              }
              style={inputStyle}
            />
          )}

          {needsGymCreate && (
            <>
              <input
                placeholder="Nombre del gimnasio"
                value={form.gymName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, gymName: e.target.value }))
                }
                style={inputStyle}
              />
              <input
                placeholder="Slug del gimnasio"
                value={form.gymSlug}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, gymSlug: e.target.value }))
                }
                style={inputStyle}
              />
            </>
          )}

          {error && (
            <div style={{ color: '#d92d20', fontSize: 14 }}>{error}</div>
          )}

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Registrando...' : 'Registrarme'}
          </button>

          <Link to="/" style={{ textAlign: 'center' }}>
            Ya tengo cuenta
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