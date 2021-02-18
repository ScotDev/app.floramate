import React from "react";

export default function Pill(props) {
    const data = props.data;

    // console.log(data);

    const items = data.map((item) => {
        return (
            <div key={item.id} className="pill">
                <p className={`${item.color}`}>{item.text}</p>
            </div>
        );
    });
    return <div className="pill-container">{items}</div>;
}
