import {createRoot} from "react-dom/client";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider/index";
const container = document.getElementById("root");
const root = createRoot(container);
import './shared/config/i18n/i18n';
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)