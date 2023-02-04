import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
const Home = lazy(() => import("./views/Home"));
import Preload from "./views/Preload";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary:#FF6666;
    --text-color-primary:rgba(0, 0, 0, 0.80);
    --card-shadow-primary:4px 4px 20px rgba(0,0,0,0.20);
  }
`;
function App() {
  const storageTheme = localStorage.getItem("theme");
  const localTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [load, setLoad] = useState(true);
  const [theme, setTheme] = useState(
    storageTheme ? storageTheme : localTheme ? "dark" : "light"
  );
  function themeToggle() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }
  useEffect(() => {
    setLoad(false);
    localStorage.setItem("theme", theme);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyle />
        <Preload load={load} />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home themeToggle={themeToggle} theme={theme} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
