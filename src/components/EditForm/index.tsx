import { Modal } from "semantic-ui-react";
import { useSelector } from "react-redux";

import { IUser } from "../../interfaces/IUser";

import UserAddForm from "../UserAddForm";

interface IProps {
    isOpen: boolean;
    onClose: Function;
    id: string | number;
}

const EditForm = (props: IProps) => {
    const { isOpen, onClose, id } = props;
    const users = useSelector((state: any) => state.users.users)
    return (
        <Modal open={isOpen} onClose={() => onClose()}>
            <Modal.Header>Edit User</Modal.Header>
            <Modal.Content>
                <UserAddForm isEditing={true} currentUser={users.find((user: IUser) => user.id === id)} />
            </Modal.Content>
        </Modal>
    )
}

export default EditForm
