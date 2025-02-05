import "./index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import {Suspense} from "react";

const App = () => {
    return (
        <div>
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