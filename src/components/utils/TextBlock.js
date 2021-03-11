import React from "react";
import { TextBlockItem } from '../ui-styled-components/Text';

export default function TextBlock(props) {

    const data = props.data;
    // const content = props.data.map((item) => {
    //     let id = 0;
    //     return (
    //         <TextBlockItem key={id + 1}>
    //             <h3>Title</h3>
    //             <p>{item.text}</p>
    //         </TextBlockItem>
    //     );
    // });
    return (
        <>
            <TextBlockItem>
                <h3>Description</h3>
                <p>{data.description}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Ecology</h3>
                <p>{data.ecology}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Distribution</h3>
                <p>{data.distribution}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Cultivation</h3>
                <p>{data.cultivation}</p>
            </TextBlockItem>
            <TextBlockItem>
                <h3>Propagation</h3>
                <p>{data.propagation}</p>
            </TextBlockItem>

            <TextBlockItem>
                <h3>Similar species</h3>
                <ul>
                    <li>
                        <a href="#">Downy birch (Betula pubescens)</a>
                    </li>
                    <li>
                        <a href="#">Aspen (Populus tremula)</a>
                    </li>
                </ul>
            </TextBlockItem>
        </>
    );
}
