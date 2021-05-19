import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "../config/routes";
import UnAuthenticatedRoute from "../components/UnauthenticatedRoute";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <UnAuthenticatedRoute
                    path={routes.home.path}
                    component={routes.home.component}
                    exact
                />
                <UnAuthenticatedRoute
                    path={routes.profile.path}
                    component={routes.profile.component}
                    exact
                />
            </Switch>
        </Router>
    );
};

export default Routes;