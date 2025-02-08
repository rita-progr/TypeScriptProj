import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense>
            <Routes>
                {Object.values(RouteConfig).map(({path,element})=>(
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        </Suspense>
    );
};

