import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/route";
import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/SideBar/ui/SideBarComp";
import {Suspense, useEffect} from "react";
import {PageLoader} from "widgets/PageLoader";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";


const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch]);

    return (
        <div className={classNames('app' , {selected:true} , [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar />
                <div className="content-page">
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}
export default App;