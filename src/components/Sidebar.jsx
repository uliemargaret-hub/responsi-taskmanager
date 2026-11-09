import React from 'react';

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="d-flex flex-column p-4 bg-white border-end" style={{ width: '280px', minHeight: '100vh' }}>
      {/* Logo Workspace */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className="text-white rounded-3 p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#5c8374', width: '38px', height: '38px' }}>
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <div>
          <h6 className="fw-bold mb-0 text-dark">taskflow</h6>
          <small className="text-muted" style={{ fontSize: '0.75rem' }}>TEAM WORKSPACE</small>
        </div>
      </div>

      <span className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>Workspace</span>
      
      {/* Menu Navigasi */}
      <ul className="nav flex-column gap-1 mb-auto">
        <li className="nav-item">
          <button 
            onClick={() => setActiveTab('overview')} 
            className="nav-link w-100 text-start rounded-3 px-3 py-2 fw-medium d-flex align-items-center gap-3 border-0"
            style={{ 
              backgroundColor: activeTab === 'overview' ? '#e8f1ec' : 'transparent', 
              color: activeTab === 'overview' ? '#3b584d' : '#64748b' 
            }}
          >
            <i className="fa-solid fa-house"></i> Overview
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActiveTab('tasks')} 
            className="nav-link w-100 text-start rounded-3 px-3 py-2 fw-medium d-flex align-items-center gap-3 border-0"
            style={{ 
              backgroundColor: activeTab === 'tasks' ? '#e8f1ec' : 'transparent', 
              color: activeTab === 'tasks' ? '#3b584d' : '#64748b' 
            }}
          >
            <i className="fa-solid fa-list-check"></i> All Tasks
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActiveTab('team')} 
            className="nav-link w-100 text-start rounded-3 px-3 py-2 fw-medium d-flex align-items-center gap-3 border-0"
            style={{ 
              backgroundColor: activeTab === 'team' ? '#e8f1ec' : 'transparent', 
              color: activeTab === 'team' ? '#3b584d' : '#64748b' 
            }}
          >
            <i className="fa-solid fa-users"></i> Team Members
          </button>
        </li>
      </ul>

      {/* Widget Motivasi */}
      <div className="p-3 rounded-4 mb-4 border-0 shadow-sm" style={{ backgroundColor: '#f4f7f6' }}>
        <div className="mb-2" style={{ color: '#5c8374' }}><i className="fa-solid fa-seedling"></i></div>
        <p className="small fw-bold text-dark mb-1">Small steps, big progress.</p>
        <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>Keep your team moving forward, one task at a time.</p>
      </div>

      {/* Profil Pengguna */}
      <div className="d-flex align-items-center justify-content-between pt-3 border-top">
        <div className="d-flex align-items-center gap-2">
          <div className="text-white rounded-circle d-flex align-items-center justify-content-center fw-bold small shadow-sm" style={{ width: '32px', height: '32px', backgroundColor: '#5c8374' }}>
            AU
          </div>
          <div>
            <span className="fw-bold text-dark d-block small">Aulia</span>
            <span className="text-muted" style={{ fontSize: '0.7rem' }}>Workspace admin</span>
          </div>
        </div>
        <i className="fa-solid fa-ellipsis text-muted small"></i>
      </div>
    </div>
  );
}