import { Modal, Button } from "semantic-ui-react";
import { AddUserForm } from "../../components";

const AddUser = () => {
    return (
        <Modal trigger={<Button>Add New User</Button>}>
            <Modal.Header>Add New User</Modal.Header>
            <Modal.Content>
                <AddUserForm />
            </Modal.Content>
        </Modal>

    )
}

export default AddUser
