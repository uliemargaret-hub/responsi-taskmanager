import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskTable from './components/TaskTable';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [tasks, setTasks] = useState([]); // Kosong di awal sesuai instruksi
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

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
    if (window.confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const totalTasks = tasks.length;
  const progressTasks = tasks.filter((t) => t.status === 'In Progress').length;
  const doneTasks = tasks.filter((t) => t.status === 'Done').length;

  return (
    <div className="d-flex" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Sidebar di Kiri */}
      <div className="d-none d-md-block">
        <Sidebar />
      </div>

      {/* Area Konten di Kanan */}
      <div className="flex-grow-1" style={{ minWidth: 0 }}>
        <Navbar />
        
        <div className="p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold text-dark mb-1 fs-3">Task Management</h2>
              <p className="text-secondary small mb-0">Kelola daftar tugas tim Anda dengan mudah dan terstruktur.</p>
            </div>
            <button 
              className="btn shadow-sm border-0 text-white fw-semibold px-4 py-2 rounded-3 d-flex align-items-center gap-2" 
              style={{ backgroundColor: '#7e22ce' }}
              onClick={handleShowAdd}
            >
              <i className="fa-solid fa-plus"></i> + Create New
            </button>
          </div>

          {/* Kartu Statistik */}
          <div className="row mb-4 g-3">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4" style={{ borderLeftColor: '#7e22ce !important' }}>
                <span className="text-secondary small fw-medium">Total Tugas</span>
                <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{totalTasks}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-warning border-4">
                <span className="text-secondary small fw-medium">Dalam Pengerjaan (In Progress)</span>
                <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{progressTasks}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-success border-4">
                <span className="text-secondary small fw-medium">Selesai (Done)</span>
                <h3 className="fw-bold text-dark mt-1 mb-0 fs-2">{doneTasks}</h3>
              </div>
            </div>
          </div>

          {/* Daftar Tugas */}
          <div className="mb-3">
            <h5 className="fw-bold text-dark mb-3">Your Tasks</h5>
            <TaskTable tasks={tasks} editTask={handleShowEdit} deleteTask={deleteTask} />
          </div>

          {/* Modal Form */}
          <TaskForm show={showModal} handleClose={handleClose} saveTask={saveTask} taskToEdit={taskToEdit} />
        </div>
      </div>
    </div>
  );
}