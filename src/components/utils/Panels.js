import React, { useState, useEffect } from "react";

export default function ExpandingCard(props) {
    const cardData = props.cardData.cardData;

    const [panels, setPanels] = useState(null);

    const removeActiveClass = () => {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
    };

    useEffect(() => {
        if (document) {
            setPanels(document.querySelectorAll(".panel"));
        }
    }, []);

    useEffect(() => {
        if (panels) {
            // Expands first card on page load
            panels[0].classList.add("active");

            panels.forEach((panel) => {
                panel.addEventListener("mouseenter", (e) => {
                    removeActiveClass();
                    panel.classList.add("active");
                });

                panel.addEventListener("mouseleave", (e) => {
                    removeActiveClass();
                    panels[0].classList.add("active");
                });
            });
        }
    }, [panels]);

    const cards = cardData.map((item) => {
        return (
            <div
                key={item.id}
                className={`panel`}
                style={{ backgroundImage: `url(${item.img_url})` }}
            >
                <h3>{item.text}</h3>
            </div>
        );
    });

    return <div className="panels-container">{cards}</div>;
}
