import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [tasks, setTasks] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleShowAdd = () => {
    setTaskToEdit(null);
    setShowModal(true);
  };

  const handleShowEdit = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const saveTask = (task) => {
    if (task.id) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      const newTask = { ...task, id: Date.now() };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    if (window.confirm('Hapus proyek tugas ini dari daftar?')) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  // Menghitung statistik berdasarkan status individu anggota tim
  const totalProjects = tasks.length;
  let totalAssignees = 0;
  let todoCount = 0;
  let progressCount = 0;
  let doneCount = 0;

  tasks.forEach(t => {
    if (t.assignees) {
      totalAssignees += t.assignees.length;
      t.assignees.forEach(a => {
        if (a.status === 'To Do') todoCount++;
        if (a.status === 'In Progress') progressCount++;
        if (a.status === 'Done') doneCount++;
      });
    }
  });

  return (
    <div className="d-flex" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Sidebar Hijau Soft */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Area Konten Utama */}
      <div className="flex-grow-1 p-4 p-md-5" style={{ minWidth: 0 }}>
        <Header />

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h3 className="fw-bold text-dark mb-1">Team overview</h3>
                <p className="text-muted small mb-0">Pantau progres dan kelola pekerjaan tim dalam satu tempat.</p>
              </div>
              <button 
                className="btn text-white fw-semibold px-4 py-2 rounded-3 shadow-sm border-0 d-flex align-items-center gap-2"
                style={{ backgroundColor: '#5c8374' }}
                onClick={handleShowAdd}
              >
                <i className="fa-solid fa-plus"></i> Tambah tugas
              </button>
            </div>

            {/* Kartu Statistik Atas */}
            <div className="row mb-5 g-3">
              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4" style={{ borderLeftColor: '#5c8374 !important' }}>
                  <span className="text-muted small fw-medium">Total Proyek</span>
                  <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{totalProjects}</h3>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>{totalAssignees} Anggota terlibat</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-warning border-4">
                  <span className="text-muted small fw-medium">To do (Individu)</span>
                  <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{todoCount}</h3>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>Menunggu dikerjakan</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-primary border-4">
                  <span className="text-muted small fw-medium">In progress (Individu)</span>
                  <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{progressCount}</h3>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>Sedang dikerjakan</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-success border-4">
                  <span className="text-muted small fw-medium">Completed (Individu)</span>
                  <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{doneCount}</h3>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>Tugas telah selesai</small>
                </div>
              </div>
            </div>

            <h5 className="fw-bold text-dark mb-3">Daftar Tugas Terbaru</h5>
            <TaskList tasks={tasks} editTask={handleShowEdit} deleteTask={deleteTask} />
          </div>
        )}

        {/* TAB 2: ALL TASKS */}
        {activeTab === 'tasks' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h3 className="fw-bold text-dark mb-1">All Tasks Management</h3>
                <p className="text-muted small mb-0">Kelola seluruh daftar tugas lengkap dengan data kolaborator dan rinciannya.</p>
              </div>
              <button 
                className="btn text-white fw-semibold px-4 py-2 rounded-3 shadow-sm border-0 d-flex align-items-center gap-2"
                style={{ backgroundColor: '#5c8374' }}
                onClick={handleShowAdd}
              >
                <i className="fa-solid fa-plus"></i> Tambah tugas
              </button>
            </div>
            <TaskList tasks={tasks} editTask={handleShowEdit} deleteTask={deleteTask} />
          </div>
        )}

        {/* TAB 3: TEAM MEMBERS */}
        {activeTab === 'team' && (
          <div>
            <h3 className="fw-bold text-dark mb-1">Team members</h3>
            <p className="text-muted small mb-4">Daftar anggota kolaborasi di dalam workspace Anda.</p>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white">
                  <div className="text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '60px', height: '60px', backgroundColor: '#5c8374', fontSize: '1.2rem' }}>
                    AU
                  </div>
                  <h6 className="fw-bold text-dark mb-1">Aulia Margaretha</h6>
                  <p className="text-muted small mb-2">Workspace Admin</p>
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill small">Active Now</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Form Tambah/Edit */}
        <TaskForm show={showModal} handleClose={handleClose} saveTask={saveTask} taskToEdit={taskToEdit} />
      </div>
    </div>
  );
}