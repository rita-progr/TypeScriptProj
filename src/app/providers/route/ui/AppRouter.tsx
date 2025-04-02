import {Route, Routes} from "react-router-dom";
import {AppRouteProps, RouteConfig} from "shared/config/routeConfig/routeConfig";
import {Suspense, useCallback} from "react";
import {PageLoader} from "widgets/PageLoader";
import {RequireAuth} from "app/providers/route/ui/RequireAuth";

export const AppRouter = () => {

    const renderWithWrapper = useCallback((route:AppRouteProps)=>{
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
        </Suspense>)

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth>: element}
            />
        )
    },[])

    return (
            <Routes >
                {Object.values(RouteConfig).map(renderWithWrapper)}
            </Routes>
    );
};

