import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header({
    bg_color,
    border_color,
    lightgrey,
    almostWhite,
}) {

    useEffect(() => {
        elementRef.current.addEventListener("click", (e) => {
            console.log(ul.current);
            console.log(e.srcElement);
            ul.current.classList.toggle('toggleDisplay')
            
        })
    }, [])
    
    const elementRef = useRef();
    const ul = useRef();

   

    console.log(elementRef);
    return (
        <header>
            <nav>
                <div
                    style={{
                        backgroundColor: bg_color,
                        borderWidth: "6px 0",
                        borderColor: border_color,
                        borderStyle: "solid",
                    }}
                >
                    <Link to="/">
                        <h1
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "ranchers, cursive",
                                color: 'black'
                            }}
                        >
                            <span>
                                <figure>
                                    <img src="star_icon.png" alt="star icon" />
                                </figure>
                            </span>
                            RAPTOR
                            <figure style={{ flexBasis: "10%" }}>
                                <img src="logo.png" alt="raptor house logo" />
                            </figure>
                            HOUSE
                            <span>
                                <figure>
                                    <img src="star_icon.png" alt="star icon" />
                                </figure>
                            </span>
                        </h1>
                    </Link>
                </div>

                <span ref={elementRef} id="burger" style={{display: "none"}} className="material-icons-outlined">menu</span>

                <ul
                ref={ul}
                    style={{
                        backgroundColor: lightgrey,
                        paddingLeft: "15%",
                    }}
                    className="almost_white small_margin d_flex img_sizes img_white"
                >
                    <Link to="/">
                        <span>
                            <figure>
                                <img src="star_icon.png" alt="star icon" />
                            </figure>
                        </span>
                        <li>Home</li>
                    </Link>
                    <Link to="/menu">
                        <span>
                            <figure>
                                <img src="star_icon.png" alt="star icon" />
                            </figure>
                        </span>
                        <li>Menu</li>
                    </Link>
                    <Link to="/profil">
                        <span>
                            <figure>
                                <img src="star_icon.png" alt="star icon" />
                            </figure>
                        </span>
                        <li>Profil</li>
                    </Link>
                    <Link to="/kontakt">
                        <span>
                            <figure>
                                <img src="star_icon.png" alt="star icon" />
                            </figure>
                        </span>
                        <li>Kontakt</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
