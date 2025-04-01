import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/route";
import {Navbar} from "widgets/Navbar";

import {Suspense, useEffect} from "react";
import {PageLoader} from "widgets/PageLoader";
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "entities/User";
import {SideBar} from "widgets/SideBar";


const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch]);

    return (
        <div className={classNames('app' , {selected:true} , [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar />
                <div className="content-page">
                    <SideBar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}
export default App;