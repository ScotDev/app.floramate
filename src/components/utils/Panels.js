import React, { useState } from "react";

import { PanelsContainer, PanelItem } from '../ui-styled-components/Panels';

const variants = {
    firstItemInitial: {
        flexGrow: 3.5
    },
    closed: {
        flexGrow: 0.5,
        transition: {
            delay: 1,
            duration: 1,
            type: "tween",
            ease: "linear"
        }
    },
    hover: {
        flexGrow: 3.5,
        transition: {
            delay: 0,
            duration: 1,
            type: "tween",
            ease: "linear"
        }
    }
}

export default function ExpandingCard(props) {
    const data = props.data;

    const [isActive, setisActive] = useState(true)

    return <PanelsContainer>
        <PanelItem initial="firstItemInitial" animate={isActive ? "hover" : "closed"} whileHover="hover" variants={variants}
            style={{ backgroundImage: `url(${data.panel_img_1})` }}>
            <h3>Test</h3>
        </PanelItem>

        <PanelItem initial="closed" whileHover="hover" variants={variants} style={{ backgroundImage: `url(${data.panel_img_2})` }}

            onMouseEnter={() => { setisActive(false) }}
            onMouseLeave={() => { setisActive(true) }}
        >
        </PanelItem>

        <PanelItem initial="closed" whileHover="hover" variants={variants} style={{ backgroundImage: `url(${data.panel_img_3})` }}
            onMouseEnter={() => { setisActive(false) }}
            onMouseLeave={() => { setisActive(true) }}
        >

        </PanelItem>

        <PanelItem initial="closed" whileHover="hover" variants={variants} style={{ backgroundImage: `url(${data.panel_img_4})` }}
            onMouseEnter={() => { setisActive(false) }}
            onMouseLeave={() => { setisActive(true) }}
        >

        </PanelItem>

        <PanelItem initial="closed" whileHover="hover" variants={variants} style={{ backgroundImage: `url(${data.panel_img_5})` }}
            onMouseEnter={() => { setisActive(false) }}
            onMouseLeave={() => { setisActive(true) }}

        >

        </PanelItem>

    </PanelsContainer>;
}
