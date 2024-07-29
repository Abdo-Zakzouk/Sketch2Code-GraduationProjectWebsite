import React from "react";
import { Link } from "react-router-dom";
import "./userProfile.css";

export default function Card(props) {

    return (

        <div className="parent">

            <div
                className="userImg"
                style={{
                backgroundImage: `url(${props.img})`,
                width: "300px",
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                }}
            ></div>
        <div className="words">
            <Link to="/myproject" className="title-link">
            {/* Link wraps around the title */}
            <h2 className="title">{props.title}</h2>
            </Link>
            <h4 className="desc">{props.desc}</h4>
        </div>
        </div>
    );
}
