import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function TaskForm({ show, handleClose, saveTask, taskToEdit }) {
  const [task, setTask] = useState({
    name: '',
    deadline: '',
    assignees: [] // Berisi daftar anggota, jobdesk, prioritas, dan status individu
  });

  const [tempName, setTempName] = useState('');
  const [tempJobdesk, setTempJobdesk] = useState('');
  const [tempPriority, setTempPriority] = useState('Medium');
  const [tempStatus, setTempStatus] = useState('To Do');

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({ name: '', deadline: '', assignees: [] });
    }
    setTempName('');
    setTempJobdesk('');
    setTempPriority('Medium');
    setTempStatus('To Do');
  }, [taskToEdit, show]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Menambah anggota beserta prioritas & status individunya ke tugas ini
  const handleAddAssignee = () => {
    if (!tempName.trim() || !tempJobdesk.trim()) return;
    setTask({
      ...task,
      assignees: [
        ...task.assignees,
        { id: Date.now(), name: tempName, jobdesk: tempJobdesk, priority: tempPriority, status: tempStatus }
      ]
    });
    setTempName('');
    setTempJobdesk('');
    setTempPriority('Medium');
    setTempStatus('To Do');
  };

  const handleRemoveAssignee = (id) => {
    setTask({
      ...task,
      assignees: task.assignees.filter(a => a.id !== id)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || task.assignees.length === 0) {
      alert('Mohon masukkan nama proyek/tugas dan minimal 1 penanggung jawab beserta rinciannya!');
      return;
    }
    saveTask(task);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="border-0 pb-0 px-4 pt-4">
        <Modal.Title className="fw-bold fs-5 text-dark">
          {taskToEdit ? 'Edit Proyek & Anggota Tim' : 'Tambah Proyek & Anggota Tim'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-semibold text-secondary">Nama Proyek / Kategori Tugas Utama</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
              placeholder="Contoh: Pengembangan Fitur Dashboard"
              className="rounded-3 py-2 border-light-subtle bg-light bg-opacity-50"
              required
            />
          </Form.Group>

          {/* BAGIAN TAMBAH ANGGOTA DENGAN PRIORITAS & STATUS SENDIRI-SENDIRI */}
          <div className="p-3 mb-3 rounded-4 bg-light border">
            <label className="small fw-bold text-dark mb-2 d-block"><i className="fa-solid fa-users me-1 text-success"></i> Tambah Anggota, Jobdesk, Prioritas & Status</label>
            
            <div className="row g-2 mb-2">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control-sm rounded-3"
                  placeholder="Nama (cth: Budi)"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control-sm rounded-3"
                  placeholder="Jobdesk (cth: UI Design)"
                  value={tempJobdesk}
                  onChange={(e) => setTempJobdesk(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                <select className="form-select form-select-sm rounded-3" value={tempPriority} onChange={(e) => setTempPriority(e.target.value)}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-select form-select-sm rounded-3" value={tempStatus} onChange={(e) => setTempStatus(e.target.value)}>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="col-md-2">
                <button 
                  type="button" 
                  className="btn btn-sm w-100 text-white fw-semibold rounded-3" 
                  style={{ backgroundColor: '#5c8374' }}
                  onClick={handleAddAssignee}
                >
                  + Add
                </button>
              </div>
            </div>

            {/* List Anggota yang Ditambahkan */}
            {task.assignees.length > 0 ? (
              <div className="d-flex flex-column gap-2 mt-3">
                {task.assignees.map((item) => (
                  <div key={item.id} className="bg-white border p-2 rounded-3 d-flex justify-content-between align-items-center shadow-sm">
                    <div>
                      <span className="fw-bold text-success-emphasis">{item.name}</span> <small className="text-muted">({item.jobdesk})</small>
                      <div className="d-flex gap-2 mt-1">
                        <span className="badge bg-light text-dark border" style={{ fontSize: '0.65rem' }}>Prioritas: {item.priority}</span>
                        <span className="badge bg-light text-dark border" style={{ fontSize: '0.65rem' }}>Status: {item.status}</span>
                      </div>
                    </div>
                    <button type="button" className="btn btn-sm text-danger border-0" onClick={() => handleRemoveAssignee(item.id)}><i className="fa-solid fa-xmark"></i></button>
                  </div>
                ))}
              </div>
            ) : (
              <small className="text-danger italic" style={{ fontSize: '0.75rem' }}>*Belum ada anggota ditambahkan.</small>
            )}
          </div>

          <Form.Group className="mb-4">
            <Form.Label className="small fw-semibold text-secondary">Deadline Proyek Keseluruhan</Form.Label>
            <Form.Control
              type="date"
              name="deadline"
              value={task.deadline}
              onChange={handleChange}
              className="rounded-3 py-2 border-light-subtle bg-light bg-opacity-50"
              required
            />
          </Form.Group>

          <Button 
            type="submit" 
            className="w-100 py-2 rounded-3 border-0 text-white fw-semibold shadow-sm"
            style={{ backgroundColor: '#5c8374' }}
          >
            Simpan Perubahan
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}