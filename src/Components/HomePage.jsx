import { useState } from "react";
import GroupForm from "./GroupForm";
import { Container, Modal } from "react-bootstrap";
import GroupList from "./GroupList";
import GroupEditForm from "./GroupEditForm";

export default function HomePage() {
  const [groups, setGroups] = useState([]);
  const [editingGroup, setEditingGroup] = useState(null);
  // const [idCounter, setIdCounter] = useState(0);
  const addGroup = (group) => {
    setGroups([...groups, group]);
    // setIdCounter(idCounter + 1);
  };
  console.log(groups);
  const updateGroup = (editedGroup) => {
    setGroups(
      groups.map((group) => (group.id === editedGroup.id ? editedGroup : group))
    );
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="mt-4">
        <h1 className="header">Management Groups</h1>
        <GroupForm addGroup={addGroup} />
        <GroupList
          groups={groups}
          setEditingGroup={setEditingGroup}
          deleteGroup={deleteGroup}
          show={handleShow}
        />
        {editingGroup && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-head" closeButton>
              <Modal.Title>Edit Group</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <GroupEditForm
                editingGroup={editingGroup}
                updateGroup={updateGroup}
                setEditingGroup={setEditingGroup}
              />
            </Modal.Body>
          </Modal>
        )}
      </Container>
    </>
  );
}
