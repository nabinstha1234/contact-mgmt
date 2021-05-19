import { Link } from "react-router-dom";

import { UsersList } from "../../components";
import AddUser from "./AddUser";
import "./styles.css";

const Home = () => {
    return (
        <div className="container-wrapper">
            <AddUser />
            <Link to="/profile">Go to Profile</Link>
            <UsersList />
        </div>
    )
}

export default Home;
