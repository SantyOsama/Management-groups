import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

export default function GroupForm({ addGroup }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      id: Date.now(),
      name,
      description,
      createdAt: new Date().toISOString(),
    };
    addGroup(newGroup);
    setName("");
    setDescription("");
  };

  return (
    <>
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
          <Row className="justify-content-md-end ">
            <Button type="submit" className="button" variant="primary">
              Create Group
            </Button>{" "}
          </Row>
        </Form>
      </Container>
    </>
  );
}
