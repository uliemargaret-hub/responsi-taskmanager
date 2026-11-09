import React from 'react';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="d-flex justify-content-between align-items-center pb-4 mb-4 border-bottom">
      <div>
        <span className="text-muted small">Workspace / Overview</span>
        <h4 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
          Good day, Aulia <span style={{ color: '#5c8374' }}>✦</span>
        </h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="bg-white px-3 py-2 rounded-3 shadow-sm border small text-secondary d-flex align-items-center gap-2">
          <i className="fa-regular fa-calendar text-muted"></i> {currentDate}
        </div>
        <div className="text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '38px', height: '38px', backgroundColor: '#5c8374', fontSize: '0.85rem' }}>
          AU
        </div>
      </div>
    </div>
  );
}