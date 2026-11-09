import React from 'react';

export default function Navbar() {
  return (
    <header className="px-4 py-3 bg-white border-bottom shadow-sm d-flex justify-content-between align-items-center">
      <div>
        <span className="text-secondary small fw-medium d-block" style={{ fontSize: '0.8rem' }}>Welcome back,</span>
        <h4 className="fw-bold text-dark mb-0 fs-5">Aulia Margaretha R. Sidauruk</h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <span className="badge px-3 py-2 rounded-pill fw-medium" style={{ backgroundColor: '#f3e8ff', color: '#6b21a8' }}>
          <i className="fa-solid fa-user-graduate me-1"></i> NIM: 2511501048
        </span>
        <div className="bg-light p-2 rounded-circle text-secondary shadow-sm" style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
    </header>
  );
}