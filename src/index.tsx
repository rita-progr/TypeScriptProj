import {createRoot} from "react-dom/client";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider/index";
const container = document.getElementById("root");
const root = createRoot(container);
import './shared/config/i18n/i18n';
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import {StoreProvider} from "app/providers/StoreProveder";
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)