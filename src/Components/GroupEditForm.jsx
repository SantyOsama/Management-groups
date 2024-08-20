import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function GroupEditForm({
  editingGroup,
  updateGroup,
  setEditingGroup,
}) {
  const [name, setName] = useState(editingGroup.name);
  const [description, setDescription] = useState(editingGroup.description);

  useEffect(() => {
    setName(editingGroup.name);
    setDescription(editingGroup.description);
  }, [editingGroup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGroup = {
      ...editingGroup,
      name,
      description,
    };
    updateGroup(updatedGroup);
    setEditingGroup(null);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Row className="justify-content-md-center mb-4">
          <Form.Control
            type="text"
            placeholder="Group Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row className="justify-content-md-center mb-4">
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Row>
        <Row>
          <Col>
            <Button type="submit">Update Group</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => setEditingGroup(null)}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
