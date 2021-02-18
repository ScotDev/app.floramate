import React from "react";

export default function TextBlock(props) {
    const textData = props.textData.textData;

    const content = textData.map((item) => {
        return (
            <div key={item.id} className="text-block">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        );
    });
    return (
        <>
            {content}
            <div className="text-block">
                <h3>Similar species</h3>
                <ul>
                    <li>
                        <a href="#">Downy birch (Betula pubescens)</a>
                    </li>
                    <li>
                        <a href="#">Aspen (Populus tremula)</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
