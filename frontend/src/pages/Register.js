import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ full_name: '', email: '', password: '', phone_number: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    setError(''); setSuccess('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost/SmartQueue/backend/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setSuccess('Account created! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
    }
    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create account 🎓</h2>
        <p style={styles.sub}>Register to start ordering food</p>

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <label style={styles.label}>Full Name</label>
        <input style={styles.input} name="full_name" placeholder="John Doe" onChange={handleChange} />

        <label style={styles.label}>Email</label>
        <input style={styles.input} name="email" type="email" placeholder="your@email.com" onChange={handleChange} />

        <label style={styles.label}>Password</label>
        <input style={styles.input} name="password" type="password" placeholder="••••••••" onChange={handleChange} />

        <label style={styles.label}>Phone Number</label>
        <input style={styles.input} name="phone_number" placeholder="07XXXXXXXX" onChange={handleChange} />

        <button style={styles.btn} onClick={handleRegister} disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>

        <p style={styles.switchText}>
          Already have an account?{' '}
          <span style={styles.link} onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  card: { background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #eee', width: '100%', maxWidth: '400px' },
  title: { fontSize: '20px', fontWeight: '600', marginBottom: '4px' },
  sub: { fontSize: '13px', color: '#888', marginBottom: '1.5rem' },
  error: { background: '#FCEBEB', color: '#A32D2D', padding: '10px', borderRadius: '8px', fontSize: '13px', marginBottom: '1rem' },
  success: { background: '#EAF3DE', color: '#3B6D11', padding: '10px', borderRadius: '8px', fontSize: '13px', marginBottom: '1rem' },
  label: { fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px' },
  input: { width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', marginBottom: '1rem', outline: 'none' },
  btn: { width: '100%', padding: '11px', background: '#185FA5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', marginTop: '4px' },
  switchText: { fontSize: '13px', color: '#888', textAlign: 'center', marginTop: '1rem' },
  link: { color: '#185FA5', cursor: 'pointer', fontWeight: '500' },
};

export default Register;