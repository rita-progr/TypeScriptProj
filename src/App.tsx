import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app' , {selected:true} , [theme])}>
            <button onClick = {toggleTheme}>TOGGLE</button>
        <Link to={'/'}>
            Главная
        </Link>
            <Link to={'/about'}>
                О нас
            </Link>
            <Suspense>
                <Routes>
                    <Route path = {'/'} element={<MainAsync/>} />
                    <Route path = {'/about'} element={<AboutAsync/>} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default App;