import React from "react";
import { ResultsCard, InnerCardGrid } from "./ui-styled-components/Card";

import { GiPlantRoots } from "react-icons/gi";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

import { IoIosSnow } from "react-icons/io";

import { RiPlantLine } from "react-icons/ri";
import Light from "./utils/Light";
import Water from "./utils/Water";


export default function Card(props) {
    const data = props.speciesData;
    const limit = props.limit;


    const items = data.slice(0, limit).map((item) => {
        // const items = data.map((item) => {
        return (
            <ResultsCard key={item.id} whileHover={{ type: 'spring', scale: 1.06, opacity: 0.75, transition: { duration: .1, bounce: 1, mass: 0.1, damping: 300, stiffness: 300, velocity: 5 } }}  >
                <img loading="lazy" src={item.image_url} alt="" />
                <h4>{item.common_name}</h4>
                <div id="divider"></div>
                <h5>{item.latin_name}</h5>
                <InnerCardGrid>
                    <div>
                        <GiPlantRoots />
                        <p>{item.type}</p>
                    </div>
                    <div>
                        <AiOutlineVerticalAlignTop />
                        <p>{item.max_height}m</p>
                    </div>
                    <div>
                        <Light level={item.light_requirements} />
                    </div>
                    <div>
                        <IoIosSnow />
                        <p>{item.hardiness}</p>
                    </div>
                    <div>
                        <div>
                            <Water level={item.water_requirements} />
                        </div>
                    </div>
                    <div>
                        <RiPlantLine />
                        <p>{item.difficulty}</p>
                    </div>
                </InnerCardGrid>
            </ResultsCard>
        );
    });

    return <>{items}</>;
}
