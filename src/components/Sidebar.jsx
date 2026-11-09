import React from 'react';

export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 text-white" style={{ backgroundColor: '#3b0764', minHeight: '100vh', width: '260px' }}>
      <div className="text-center my-3">
        <div className="bg-white bg-opacity-25 rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center text-white fw-bold shadow" style={{ width: '50px', height: '50px', fontSize: '1rem' }}>
          AM
        </div>
        <span className="small text-white-50 d-block">Task Dashboard</span>
      </div>
      <hr className="text-white-50" />
      <ul className="nav flex-column gap-2 mt-2">
        <li className="nav-item">
          <a href="#" className="nav-link active text-white rounded-3 px-3 py-2 fw-semibold d-flex align-items-center shadow-sm" style={{ backgroundColor: '#581c87' }}>
            <i className="fa-solid fa-columns me-3"></i> Task Board
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white-50 px-3 py-2 fw-medium d-flex align-items-center rounded-3" onClick={() => alert('Fitur Tim Kerja')} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-users me-3"></i> Tim Kerja
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white-50 px-3 py-2 fw-medium d-flex align-items-center rounded-3" onClick={() => alert('Fitur Laporan')} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-chart-pie me-3"></i> Laporan
          </a>
        </li>
      </ul>
    </div>
  );
}