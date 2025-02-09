import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/route";
import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/SideBar/SideBar";
import {Suspense} from "react";


const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app' , {selected:true} , [theme])}>
            <Suspense fallback={''}>
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