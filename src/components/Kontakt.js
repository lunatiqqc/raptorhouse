import React from "react";
import { Link } from "react-router-dom";

export default function Kontakt({ border_color }) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#f2f2f2",
            }}
            className=" small_padding_children3 small_margin"
        >
            <h1 style={{ flexBasis: "100%", color: border_color }}>Kontakt</h1>

            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flexWrap: 'wrap'
                }}
            >
                <section className= "white_border" style={{backgroundColor : border_color, borderTop: 0, borderBottom: 0, flexGrow: '1'}}>
                    <article>
                        <section className="small_padding">
                            Raptor House <br />
                            Mejlgade 643 <br />
                            DK-8000 Århus C <br />
                            Tlf: 73 54 83 45 <br />
                            kontakt@raptorhouse.dk <br />
                        </section>
                        <section className="white_border small_padding" style={{borderLeft: '0', borderRight: '0'}}>
                            <Link to="/map">
                                <h1 >Vis på kort</h1>
                            </Link>
                        </section>

                        <section className="small_padding">
                            {" "}
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
                    </article>
                </section>
                <section className="small_padding" style={{backgroundColor : border_color, flexGrow: '1', display: 'flex', flexDirection: 'column'}}>
                    <h1>send os en e-mail</h1>
                    <form
                        action=""
                        style={{ display: "flex", flexDirection: "column", flexGrow: '1', justifyContent: 'space-evenly' }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <label htmlFor="navn">Navn</label>
                            <input style={{flexBasis: '80%'}} id="navn" type="text" />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <label htmlFor="mail">E-Mail</label>
                            <input style={{flexBasis: '80%'}} id="mail" type="text" />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <label htmlFor="emne">Emne</label>
                            <input style={{flexBasis: '80%'}} id="emne" type="text" />
                        </div>

                        <textarea name="" id="" cols="30" rows="10"></textarea>

                        <button style={{color: border_color, fontWeight: 'bold', width: '20%'}}>send</button>
                    </form>
                </section>
            </div>
        </div>
    );
}
