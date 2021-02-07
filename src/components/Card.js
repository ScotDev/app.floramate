import React from "react";
import { ResultsCard, InnerCardGrid } from "./ui-styled-components/Card";

import { GiPlantRoots } from "react-icons/gi";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { IoIosSnow } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { IoWaterSharp } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";

export default function Card(props) {
    const data = props.speciesData
    // console.log("Card: ", data)

    const items = data.map((item) => {
        return (
            <ResultsCard key={item.id}>
                <img src={item.img_url} alt="" />
                <h4>{item.common_name}</h4>
                <hr />
                <h5>{item.latin_name}</h5>
                <InnerCardGrid>
                    <div>
                        <i>
                            <GiPlantRoots />
                        </i>
                        <p>{item.type}</p>
                    </div>
                    <div>
                        <i>
                            <AiOutlineVerticalAlignTop />
                        </i>
                        <p>{item.ult_height}m</p>
                    </div>
                    <div>
                        <i>
                            {item.sun.map((i) => {
                                if (i === 1) {
                                    return <>{<IoSunnySharp />}</>;
                                } else {
                                    return <>{<IoSunnyOutline />}</>;
                                }
                            })}
                        </i>
                    </div>
                    <div>
                        <i>
                            <IoIosSnow />
                        </i>
                        <p>{item.hardiness}</p>
                    </div>
                    <div>
                        <i>
                            {item.water.map((i) => {
                                if (i === 1) {
                                    return <>{<IoWaterSharp />}</>;
                                } else {
                                    return <>{<IoWaterOutline />}</>;
                                }
                            })}
                        </i>
                    </div>
                    <div>
                        <i>
                            <RiPlantLine />
                        </i>
                        <p>{item.ease}</p>
                    </div>
                </InnerCardGrid>
            </ResultsCard>
        );
    });

    return <>{items}</>;
}
