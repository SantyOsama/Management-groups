import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function GroupList({
  groups,
  setEditingGroup,
  deleteGroup,
  show,
}) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.id} className="group-container">
          <h3> {group.name}</h3>
          <p>{group.description}</p>
          <p className="date">
            Created At: {new Date(group.createdAt).toLocaleString()}
          </p>
          <Row>
            <Col>
              <Button
                onClick={() => {
                  setEditingGroup(group);
                  show();
                }}
              >
                Edit
              </Button>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => deleteGroup(group.id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
}
