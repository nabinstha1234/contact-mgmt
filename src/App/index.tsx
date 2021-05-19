import { createBrowserHistory } from "history";

import Routes from "./Routes";

import './App.css'

export const history = createBrowserHistory();

const App = () => {
    return (
        <>
            <Routes />
        </>
    )
}

export default App;
