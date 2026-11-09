import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

export default function TaskTable({ tasks, editTask, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <Card className="border-0 shadow-sm rounded-4 p-5 text-center bg-white">
          <div className="mb-3" style={{ color: '#7e22ce' }}>
            <i className="fa-regular fa-folder-open fa-3x opacity-50"></i>
          </div>
          <h5 className="fw-bold text-dark mb-1">Belum ada tugas terdaftar</h5>
          <p className="text-secondary small mb-0">Klik tombol "+ Create New" di atas untuk menambahkan tugas baru ke dalam sistem.</p>
        </Card>
      ) : (
        <div className="d-flex flex-column gap-3">
          {tasks.map((task, index) => {
            let badgePriorityClass = 'bg-warning bg-opacity-10 text-warning-emphasis';
            if (task.priority === 'High') badgePriorityClass = 'bg-danger bg-opacity-10 text-danger';
            else if (task.priority === 'Low') badgePriorityClass = 'bg-success bg-opacity-10 text-success';

            let badgeStatusClass = 'bg-secondary bg-opacity-10 text-secondary';
            if (task.status === 'In Progress') badgeStatusClass = 'bg-primary bg-opacity-10 text-primary';
            else if (task.status === 'Done') badgeStatusClass = 'bg-success bg-opacity-10 text-success';

            return (
              <Card key={task.id} className="border-0 shadow-sm rounded-4 p-3 bg-white">
                <Row className="align-items-center">
                  <Col md={4} className="d-flex align-items-center gap-3">
                    <div className="p-3 rounded-3" style={{ backgroundColor: '#f3e8ff', color: '#7e22ce' }}>
                      <i className="fa-solid fa-file-lines fs-5"></i>
                    </div>
                    <div>
                      <span className="text-muted small">No. {index + 1}</span>
                      <h6 className="fw-bold text-dark mb-0">{task.name}</h6>
                    </div>
                  </Col>
                  <Col md={2} className="text-center">
                    <span className="text-muted small d-block">Prioritas</span>
                    <span className={`badge ${badgePriorityClass} px-3 py-1.5 rounded-pill fw-medium`}>{task.priority}</span>
                  </Col>
                  <Col md={2} className="text-center">
                    <span className="text-muted small d-block">Status</span>
                    <span className={`badge ${badgeStatusClass} px-3 py-1.5 rounded-pill fw-medium`}>{task.status}</span>
                  </Col>
                  <Col md={2} className="text-center">
                    <span className="text-muted small d-block">Deadline</span>
                    <span className="text-secondary small fw-medium">{task.deadline}</span>
                  </Col>
                  <Col md={2} className="text-end">
                    <Button variant="light" size="sm" className="me-1 border-0 rounded-2" style={{ backgroundColor: '#f3e8ff', color: '#7e22ce' }} onClick={() => editTask(task)} title="Edit">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="light" size="sm" className="text-danger bg-danger bg-opacity-10 border-0 rounded-2" onClick={() => deleteTask(task.id)} title="Hapus">
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}