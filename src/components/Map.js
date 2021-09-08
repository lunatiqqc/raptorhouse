import React from "react";

export default function Map({border_color}) {
    return (
        <div style={{background: 'white', padding: '2%'}}>
            <h1 style={{color: border_color}}>Her finder du os</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.098374866729!2d10.886227315927144!3d56.41436698073551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDI0JzUxLjciTiAxMMKwNTMnMTguMyJF!5e0!3m2!1sda!2sdk!4v1622627833608!5m2!1sda!2sdk"
                allowfullscreen=""
                loading="lazy"
                style={{width: '100%', height: '50vh', border: `10px solid ${border_color}`}}
            ></iframe>
        </div>
    );
}
