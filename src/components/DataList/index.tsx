import { useState } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "../../interfaces/IUser";
import { sortByUser, deleteUser } from "../../redux/actions/user";

import EditForm from "../EditForm";

const DataList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<string | number>("")
    const dispatch = useDispatch()
    const users = useSelector((state: any) => state.users.users)

    const onUserDelete = (id: string | number) => {
        dispatch(deleteUser(id))
    };

    const onEditClick = (id: string | number) => {
        setIsOpen(true)
        setSelectedId(id)
    };

    return (
        <div>
            <EditForm
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                id={selectedId}
            ></EditForm>

            <Table sortable structured celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan="2" >SN</Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2" onClick={() => dispatch(sortByUser())}>Name <Icon name="sort" /></Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2">Email</Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2">Phone Number</Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2">Date Of Birth</Table.HeaderCell>
                        <Table.HeaderCell colSpan="4" textAlign="center">Address</Table.HeaderCell>
                        <Table.HeaderCell colSpan="2" rowSpan="2" textAlign="center">Operations</Table.HeaderCell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>District</Table.HeaderCell>
                        <Table.HeaderCell>Province</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                    </Table.Row>

                </Table.Header>
                <Table.Body>
                    {users.map((user: IUser, index: number) => (
                        <Table.Row key={user.id}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.phone_number}</Table.Cell>
                            <Table.Cell>{user.date_of_birth}</Table.Cell>
                            <Table.Cell>{user.address.city}</Table.Cell>
                            <Table.Cell>{user.address.district}</Table.Cell>
                            <Table.Cell>{user.address.province}</Table.Cell>
                            <Table.Cell>{user.address.country}</Table.Cell>
                            <Table.Cell>
                                <Button
                                    content="Edit"
                                    onClick={() => onEditClick(user.id)}
                                ></Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button
                                    content="Delete"
                                    onClick={() => onUserDelete(user.id)}
                                ></Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default DataList;