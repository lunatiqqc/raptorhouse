import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Index({ border_color }) {

    const slider = useRef()
    return (
        <div id="home">
            <section
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <section style={{ flexBasis: "calc(1.8/3 * 100%)" }}>
                    <div  id="slider" style={{ display: "inherit" }}>
                        <span onClick={() => {console.log(parseInt(slider.current.style.left)); slider.current.style.left = parseInt(slider.current.style.left) + 100 +'%' }}
                            id="arrow_left"
                            style={{ display: "flex" }}
                        >
                            <img
                                style={{ width: "20%", height: "20%" }}
                                src="arrow_back.svg"
                                alt="arrow icon"
                            />
                        </span>
                        <div ref={slider} id="sliderimg" style={{left: "0%"}}>
                            <figure className="white_border">
                                <img src="Slide01.jpg" alt="ankylosaurus bøf" />
                            </figure>
                            <figure className="white_border">
                                <img src="Slide02.jpg" alt="ankylosaurus bøf2" />
                            </figure>
                            <figure className="white_border">
                                <img src="Slide03.jpg" alt="ankylosaurus bøf3" />
                            </figure>
                        </div>
                        <span onClick={() => {console.log(parseInt(slider.current.style.left)); slider.current.style.left = parseInt(slider.current.style.left) - 100 +'%' }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            id="arrow_right"
                        >
                            <img
                                style={{
                                    width: "20%",
                                    height: "20%",
                                    transform: "rotate(180deg)",
                                }}
                                src="arrow_back.svg"
                                alt="arrow icon"
                            />
                        </span>
                    </div>
                </section>
                <section style={{ flexGrow: "1" }}>
                    <article
                        className="white_border small_padding_children flex-col"
                        style={{
                            backgroundColor: border_color,
                            flexGrow: "1",
                            height: "100%",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <section style={{}}>
                            <h1>Åbningstider</h1>
                            <table style={{ fontSize: "0.6rem" }}>
                                <tbody>
                                    <tr>
                                        <th>mandag - torsdag</th>
                                        <td>11:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <th>fredag - lørdag</th>
                                        <td>12:00 - 24:00</td>
                                    </tr>
                                    <tr>
                                        <th>søndag</th>
                                        <td>lukket</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section
                            className="white_border"
                            style={{ borderLeft: "0", borderRight: "0" }}
                        >
                            <Link to="/menu">
                                <h1>Menukort</h1>
                            </Link>
                        </section>
                        <section>
                            <Link to="/map">
                                <h1>Her finder du os</h1>
                            </Link>
                        </section>
                    </article>
                </section>
            </section>
            <section
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem 0",
                    flexWrap: "wrap",
                }}
                className="white_border_children child_width_23"
            >
                <figure>
                    <img src="Raptor_steak.jpg" alt="Raptor steak" />
                </figure>
                <figure>
                    <img src="Trex-steak.jpg" alt="Trex steak" />
                </figure>
                <figure>
                    <img src="Salatbar.jpg" alt="salatbar" />
                </figure>
                <figure>
                    <img src="Nachos.jpg" alt="Nachos" />
                </figure>
            </section>
            <section>
                <p
                    className="white_border small_padding"
                    style={{ backgroundColor: border_color }}
                >
                    Raptor House er vandt sidste år titlen som årets dinosaurer
                    bøf hus. Vores menuer bygger op ud fra stolte traditioner og
                    det bedste kød, nøje udvalgt fra verdens førende klon
                    parker. Målet med Raptor House er at give alle råd til
                    klonet kød af høj kvalitet. Vi sælger kun kød fra anden
                    generations dyr da dette er det bedste og fri for
                    affaldsstoffer
                </p>
            </section>
        </div>
    );
}
