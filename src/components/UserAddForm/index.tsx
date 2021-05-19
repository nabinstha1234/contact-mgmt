import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { IUser } from "../../interfaces/IUser";
import { addUser, editUser } from "../../redux/actions/user";

import { provienceOptions } from "../../utils/constants/province";

interface IProps {
    isEditing?: boolean;
    currentUser?: IUser;
}

const UserAddForm = (props: IProps) => {
    const { isEditing, currentUser } = props;
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm(isEditing ? { defaultValues: currentUser } : undefined)

    const onFormSubmit = (user: IUser) => {
        if (isEditing) {
            dispatch(editUser(user))
        } else {
            user.id = Math.floor(Math.random() * 1000000000);
            dispatch(addUser(user))
        }
    }

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Field>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Full Name" {...register("name", { required: true, maxLength: 100 })} />
                {errors.name && errors.name.type === "required" && <span style={{ color: "#B03060" }}>This is required</span>}
            </Form.Field>
            <Form.Field>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.name && errors.name.type === "required" && <span style={{ color: "#B03060" }}>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}=
            </Form.Field>
            <Form.Field>
                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" placeholder="Phone Number" {...register("phone_number", { required: true, minLength: 7, maxLength: 15 })} />
                {errors.name && errors.name.type === "required" && <span style={{ color: "#B03060" }}>This is required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Must be minimum 7</span>}
            </Form.Field>
            <Form.Field>
                <label htmlFor="city">Date Of Birth</label>
                <input type="date" placeholder="Date" {...register("date_of_birth")} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="district">City</label>
                <input type="text" placeholder="District" {...register("address.city")} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="district">District</label>
                <input type="text" placeholder="District" {...register("address.district")} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="district">Province</label>
                <select {...register("address.province", { required: true })}>
                    {provienceOptions.map((province) => <option value={province.value}>{province.text}</option>)}
                </select>
            </Form.Field>
            <Form.Field>
                <label htmlFor="country">Country</label>
                <select {...register("address.country", { required: true })} defaultValue="Nepal">
                    <option value="Nepal">Nepal</option>
                </select>
            </Form.Field>
            <Button type="submit" content="Submit" />
        </Form>
    )
}

export default UserAddForm
