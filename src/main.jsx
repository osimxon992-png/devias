import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./mui/charts/theme";
import "./index.css";
import ecommerce from "./mui/line/ecommerce"
import cryptoFirst from "./mui/line/cryptoFirst";
import cryptoSecond from "./mui/line/cryptoSecond";
import cryptoThird from "./mui/pie/cryptoThird";
import Ecommerce_pie from "./mui/pie/Ecommerce_pie"



const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} ecommerce={ecommerce} cryptoFirst={cryptoFirst} cryptoSecond={cryptoSecond} cryptoThird={cryptoThird} Ecommerce_pie={Ecommerce_pie}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
