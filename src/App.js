import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Kontakt from "./components/Kontakt";
import Map from "./components/Map";
import Menu from "./components/Menu";
import Profil from "./components/Profil";
import Header from "./components/templates/Header";

function App() {
    console.log(process.env.PUBLIC_URL);
    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    const [tablet, setTablet] = useState(window.innerWidth > 768);
    const [desktop, setDesktop] = useState(window.innerWidth >= 1286);

    const handleWindowResize = () => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        }
        if (window.innerWidth > 768) {
            setTablet(true);
        }
        if (window.innerWidth > 1284) {
            setDesktop(true);
        }
    };

    window.addEventListener("resize", handleWindowResize);

    const bg_color = "#BF945D";
    const bg_color_light = "#DABD8B";
    const border_color = "#7E2617";
    const lightgrey = "#2D2D2D";
    const almostWhite = "#F2F2F2";
    return (
        <Router basePath={process.env.PUBLIC_URL}>
            <div>
                <Header
                    bg_color={bg_color}
                    border_color={border_color}
                    lightgrey={lightgrey}
                    almostWhite={almostWhite}
                />

                <div
                    style={{
                        backgroundColor: "black",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <main
                        style={{
                            backgroundColor: bg_color_light,
                            width: "70%",
                            color: "white",
                        }}
                        className="small_padding"
                    >
                        <Route exact path="/">
                            <Home border_color={border_color} />{" "}
                        </Route>
                        <Route exact path="/menu">
                            <Menu border_color={border_color} />{" "}
                        </Route>
                        <Route exact path="/profil">
                            <Profil border_color={border_color} />{" "}
                        </Route>
                        <Route exact path="/kontakt">
                            <Kontakt border_color={border_color} />{" "}
                        </Route>
                        <Route exact path="/map">
                            <Map border_color={border_color} />{" "}
                        </Route>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
