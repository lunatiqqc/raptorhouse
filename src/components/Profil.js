import React from "react";

export default function Profil({ border_color }) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#f2f2f2",
            }}
            className=" small_padding_children3 small_margin"
        >
            <h1 style={{ flexBasis: "100%", color: border_color }}>Profil</h1>
            <div >
                <figure className="small_margin_self"
                    style={{
                        width: "20%",
                        float: "right",
                        backgroundColor: "#f2f2f2",
                        color: "black",
                        padding: "2%",

                    }}
                >
                    <img src="profil.jpg" alt="" />
                    <figcaption>Astrodon farm, Aalborg</figcaption>
                </figure>
                <p style={{ backgroundColor: border_color }} className="small_padding">
                    Efter hånden som de traditionelle landbrugsdyr, har måtte
                    udgå på grund af resistente sygdomme mm. Har det klonede
                    dinosaur kød efterhånden fundet sin plads på danskernes
                    middagsbord. <br />
                    <br />
                    Vores gourmet køkken har gennem en årrække skabt en menu som
                    giver vores kunder mulighed for at et godt måltid til
                    rimelige penge. <br />
                    <br />
                    Vores tætte samarbejde med landets største dinosaur farm har
                    gjort at vi har kunne fremavle vores unikke kød der kun kan
                    købes hos Raptor House. <br />
                    <br />
                    Raptor House er beliggende centralt midt i Århus midtby. Vi
                    tilbyder de bedste specialiteter Tilberedt af det finest
                    dinosaurkød. Restauranten er indrettet i traditionel stake
                    house stil med små kulørte kæder i hvælvingerne, sombreroer
                    på væggene og kaktusser i vindueskarmen <br />
                    <br />
                    Det er ikke muligt at bestille bord eller aflyse via
                    hjemmesiden eller e-mail. Ring i stedet for til restauranten
                    på tlf.: 73 54 83 45
                </p>
            </div>
        </div>
    );
}
