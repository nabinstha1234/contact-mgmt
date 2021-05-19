import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IProps extends RouteProps { }

const UnAuthenticatedRoute = (props: IProps) => {
    return (
        <Suspense fallback={(<>Loading...</>)}>
            <Route {...props} />
        </Suspense>
    )
};

export default UnAuthenticatedRoute;