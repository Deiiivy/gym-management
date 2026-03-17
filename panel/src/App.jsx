import { authStore } from './features/auth/presentation/store/authStore';

export default function App() {
  const user = authStore.getUser();

  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}