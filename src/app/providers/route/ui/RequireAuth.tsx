import {JSX, useMemo} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData, RolesType, userRolesSelector} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface RequireAuthProps{
    children: JSX.Element,
    roles?: RolesType[],
}

export function RequireAuth({children, roles}:RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(userRolesSelector);

    const hasRequiredRoles= useMemo(()=>{
        if(!roles) return true;
        return roles?.some(requiredRole => {
            return userRoles?.includes(requiredRole);
        })
    },[roles, userRoles])

    if(!hasRequiredRoles) {
        return <Navigate to={RoutePath.main} state = {{from:location}} replace/>
    }

    if(!auth){
        return <Navigate to={RoutePath.main} state = {{from:location}} replace/>
    }

    return children;
}