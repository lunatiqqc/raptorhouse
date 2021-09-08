import React from "react";

export default function Menu({ border_color }) {
    return (
        <div
            style={{ display: "flex", flexWrap: "wrap", backgroundColor: '#f2f2f2' }}
            className="flexBasis-50_children small_padding_children3 small_margin"
        >
            <h1 style={{ flexBasis: "100%", color: border_color }}>Menu</h1>
            <figure style={{ backgroundColor: border_color }}>
                <img
                    style={{ height: "auto" }}
                    src="Hvidlgsbrod.jpg"
                    alt="Hvidløgsbrod"
                />
                <figcaption>Forretter</figcaption>
            </figure>
            <figure style={{ backgroundColor: border_color }}>
                <img style={{ height: "auto" }} src="Burger.jpg" alt="burger" />
                <figcaption>Frokost</figcaption>
            </figure>
            <figure style={{ backgroundColor: border_color }}>
                <img
                    style={{ height: "auto" }}
                    src="Raptor_steak.jpg"
                    alt="Raptor steak"
                />
                <figcaption>Hovedretter</figcaption>
            </figure>
            <figure style={{ backgroundColor: border_color }}>
                <img
                    style={{ height: "auto" }}
                    src="Cheesecake.jpg"
                    alt="Cheesecake"
                />
                <figcaption>Dessert</figcaption>
            </figure>
        </div>
    );
}
