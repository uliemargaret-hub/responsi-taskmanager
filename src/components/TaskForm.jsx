import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function TaskForm({ show, handleClose, saveTask, taskToEdit }) {
  const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do', deadline: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({ name: '', priority: 'Medium', status: 'To Do', deadline: '' });
    }
  }, [taskToEdit, show]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim()) return;
    saveTask(task);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0 px-4 pt-4">
        <Modal.Title className="fw-bold fs-5 text-dark">
          {taskToEdit ? 'Edit Tugas Proyek' : 'Buat Tugas Baru'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-semibold text-secondary">Nama Tugas</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
              placeholder="Contoh: Desain Antarmuka UI/UX"
              className="rounded-3 py-2 border-light-subtle bg-light bg-opacity-50"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-semibold text-secondary">Prioritas</Form.Label>
            <Form.Select name="priority" value={task.priority} onChange={handleChange} className="rounded-3 py-2 border-light-subtle bg-light bg-opacity-50">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-semibold text-secondary">Status Pengerjaan</Form.Label>
            <Form.Select name="status" value={task.status} onChange={handleChange} className="rounded-3 py-2 border-light-subtle bg-light bg-opacity-50">
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="small fw-semibold text-secondary">Tenggat Waktu (Deadline)</Form.Label>
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
            style={{ backgroundColor: '#7e22ce' }}
          >
            Simpan Tugas
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}