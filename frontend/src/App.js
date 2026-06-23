import React, { useEffect, useState } from 'react';

function App() {
  const [canteens, setCanteens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/SmartQueue/smartqueue/backend/api/get_canteens.php')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setCanteens(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
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
      <nav style={{
        background: '#fff',
        borderBottom: '1px solid #eee',
        padding: '0 2rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontWeight: '500', fontSize: '16px' }}>
          🏪 Smart Canteen
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={btnStyle}>Login</button>
          <button style={{ ...btnStyle, background: '#185FA5', color: '#fff' }}>
            Register
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderBottom: '1px solid #eee'
      }}>
        <h1 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '6px' }}>
          Order food from your canteen
        </h1>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Skip the queue — browse menus, order online, and pay digitally
        </p>
      </div>

      {/* Canteen Cards */}
      <div style={{ padding: '2rem' }}>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Choose a canteen
        </p>

        {loading ? (
          <p style={{ color: '#888' }}>Loading canteens...</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {canteens.map(canteen => (
              <div key={canteen.canteen_id} style={cardStyle}>
                <div style={{
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  background: '#f9f9f9',
                  borderBottom: '1px solid #eee'
                }}>
                  {getIcon(canteen.canteen_name)}
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontWeight: '500', fontSize: '15px', marginBottom: '4px' }}>
                    {canteen.canteen_name}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '12px'
                  }}>
                    <span style={{
                      ...getStatusStyle(canteen.crowd_status),
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '99px',
                      fontWeight: '500'
                    }}>
                      {getStatusLabel(canteen.crowd_status)}
                    </span>
                    <button style={{
                      fontSize: '12px',
                      color: '#185FA5',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}>
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

const btnStyle = {
  fontSize: '13px',
  padding: '6px 16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  background: 'transparent',
  cursor: 'pointer'
};

const cardStyle = {
  background: '#fff',
  border: '1px solid #eee',
  borderRadius: '12px',
  overflow: 'hidden',
  cursor: 'pointer'
};

export default App;