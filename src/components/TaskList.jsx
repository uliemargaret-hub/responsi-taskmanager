import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

export default function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <Card className="border-0 shadow-sm rounded-4 p-5 text-center bg-white">
          <div className="mb-3 text-success opacity-50">
            <i className="fa-regular fa-folder-open fa-3x"></i>
          </div>
          <h5 className="fw-bold text-dark mb-1">Belum ada tugas dalam proyek</h5>
          <p className="text-secondary small mb-0">Klik tombol "+ Tambah tugas" di atas untuk mulai membuat catatan kerja tim.</p>
        </Card>
      ) : (
        <div className="d-flex flex-column gap-3">
          {tasks.map((task, index) => (
            <Card key={task.id} className="border-0 shadow-sm rounded-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                <div>
                  <span className="text-muted small">Proyek #{index + 1}</span>
                  <h5 className="fw-bold text-dark mb-0">{task.name}</h5>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted small"><i className="fa-regular fa-calendar me-1"></i> {task.deadline}</span>
                  <div>
                    <Button variant="light" size="sm" className="me-1 border-0 rounded-2" style={{ color: '#5c8374', backgroundColor: '#e8f1ec' }} onClick={() => editTask(task)} title="Edit">
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </Button>
                    <Button variant="light" size="sm" className="text-danger bg-danger-subtle border-0 rounded-2" onClick={() => deleteTask(task.id)} title="Hapus">
                      <i className="fa-solid fa-trash"></i> Hapus
                    </Button>
                  </div>
                </div>
              </div>

              {/* Daftar Anggota dengan Garis Pemisah, Prioritas & Status Sendiri-sendiri */}
              <div className="d-flex flex-column gap-2">
                {task.assignees && task.assignees.map((member, idx) => {
                  let badgePriority = 'bg-warning-subtle text-warning-emphasis';
                  if (member.priority === 'High') badgePriority = 'bg-danger-subtle text-danger';
                  else if (member.priority === 'Low') badgePriority = 'bg-success-subtle text-success';

                  let badgeStatus = 'bg-secondary-subtle text-secondary';
                  if (member.status === 'In Progress') badgeStatus = 'bg-primary-subtle text-primary';
                  else if (member.status === 'Done') badgeStatus = 'bg-success-subtle text-success';

                  return (
                    <div key={member.id || idx} className="p-2.5 rounded-3 bg-light border-0 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#fcfcfc' }}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center small shadow-sm" style={{ backgroundColor: '#5c8374', width: '32px', height: '32px' }}>
                          {member.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <span className="fw-bold text-dark small d-block">{member.name}</span>
                          <span className="text-muted" style={{ fontSize: '0.75rem' }}>{member.jobdesk}</span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <div className="text-center">
                          <span className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Prioritas</span>
                          <span className={`badge ${badgePriority} px-2 py-0.5 rounded-pill`} style={{ fontSize: '0.7rem' }}>{member.priority}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Status</span>
                          <span className={`badge ${badgeStatus} px-2 py-0.5 rounded-pill`} style={{ fontSize: '0.7rem' }}>{member.status}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}