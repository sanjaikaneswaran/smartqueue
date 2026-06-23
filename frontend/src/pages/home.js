import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [canteens, setCanteens] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/SmartQueue/smartqueue/backend/api/get_canteens.php')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') setCanteens(data.data);
        setLoading(false);
      })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  const getStatusStyle = (status) => {
    if (status === 'Low') return { background: '#EAF3DE', color: '#3B6D11' };
    if (status === 'Medium') return { background: '#FAEEDA', color: '#854F0B' };
    if (status === 'High') return { background: '#FCEBEB', color: '#A32D2D' };
  };

  const getStatusLabel = (status) => {
    if (status === 'Low') return '🟢 Open';
    if (status === 'Medium') return '🟡 Busy';
    if (status === 'High') return '🔴 High Demand';
  };

  const getIcon = (name) => {
    if (name.includes('Samaja')) return '🍛';
    if (name.includes('Gallery')) return '☕';
    if (name.includes('G')) return '🍕';
    return '🍽️';
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.nav}>
        <span style={styles.logo}>🏪 Smart Canteen</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={styles.btnOutline} onClick={() => navigate('/login')}>Login</button>
          <button style={styles.btnFill} onClick={() => navigate('/register')}>Register</button>
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Order food from your canteen</h1>
        <p style={styles.heroSub}>Skip the queue — browse menus, order online, and pay digitally</p>
      </div>

      {/* Canteens */}
      <div style={styles.section}>
        <p style={styles.sectionLabel}>Choose a canteen</p>
        {loading ? (
          <p style={{ color: '#888' }}>Loading canteens...</p>
        ) : (
          <div style={styles.grid}>
            {canteens.map(canteen => (
              <div key={canteen.canteen_id} style={styles.card}>
                <div style={styles.cardImg}>{getIcon(canteen.canteen_name)}</div>
                <div style={styles.cardBody}>
                  <p style={styles.cardName}>{canteen.canteen_name}</p>
                  <div style={styles.cardFooter}>
                    <span style={{ ...styles.badge, ...getStatusStyle(canteen.crowd_status) }}>
                      {getStatusLabel(canteen.crowd_status)}
                    </span>
                    <button
                      style={styles.orderBtn}
                      onClick={() => navigate(`/menu/${canteen.canteen_id}`)}
                    >
                      Order now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav: { background: '#fff', borderBottom: '1px solid #eee', padding: '0 2rem', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { fontWeight: '500', fontSize: '16px' },
  btnOutline: { fontSize: '13px', padding: '6px 16px', border: '1px solid #ddd', borderRadius: '8px', background: 'transparent', cursor: 'pointer' },
  btnFill: { fontSize: '13px', padding: '6px 16px', border: 'none', borderRadius: '8px', background: '#185FA5', color: '#fff', cursor: 'pointer' },
  hero: { background: '#fff', padding: '2rem', borderBottom: '1px solid #eee' },
  heroTitle: { fontSize: '22px', fontWeight: '500', marginBottom: '6px' },
  heroSub: { fontSize: '14px', color: '#666' },
  section: { padding: '2rem' },
  sectionLabel: { fontSize: '13px', color: '#888', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' },
  card: { background: '#fff', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' },
  cardImg: { height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', background: '#f9f9f9', borderBottom: '1px solid #eee' },
  cardBody: { padding: '1rem' },
  cardName: { fontWeight: '500', fontSize: '15px', marginBottom: '12px' },
  cardFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  badge: { fontSize: '11px', padding: '3px 10px', borderRadius: '99px', fontWeight: '500' },
  orderBtn: { fontSize: '12px', color: '#185FA5', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' },
};

export default Home;