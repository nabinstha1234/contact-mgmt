import { lazy } from "react";

const routes ={
    home:{
        path: "/",
        component: lazy(()=> import('../pages/Home'))
    },
    profile:{
        path: "/profile",
        component: lazy(()=> import('../pages/Profile'))
    }
}

export default routes;