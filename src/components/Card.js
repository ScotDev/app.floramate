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

const variants = {
    hover: { scale: 0.97, opacity: 0.7, transition: { duration: 0.2 } }
    // whileHover={{ scale: 0.97, opacity: 0.7, transition: { duration: 0.2 } }},
    // whileHover={{ scale: 0.97, opacity: 0.7, transition: { duration: 0.2 } }}
}

export default function Card(props) {
    const data = props.speciesData
    const limit = props.limit

    const items = data.slice(0, limit).map((item) => {
        return (
            <ResultsCard key={item.id} whileHover="hover" whileTap="hover" whileFocus="hover" variants={variants} >
                <img loading="lazy" src={item.img_url} alt="" />
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
                        <p>{item.ult_height}m</p>
                    </div>
                    <div>

                        {item.sun.map((i) => {
                            if (i === 1) {
                                return <>{<IoSunnySharp />}</>;
                            } else {
                                return <>{<IoSunnyOutline />}</>;
                            }
                        })}
                    </div>
                    <div>
                        <IoIosSnow />
                        <p>{item.hardiness}</p>
                    </div>
                    <div>

                        {item.water.map((i) => {
                            if (i === 1) {
                                return <>{<IoWaterSharp />}</>;
                            } else {
                                return <>{<IoWaterOutline />}</>;
                            }
                        })}
                    </div>
                    <div>

                        <RiPlantLine />
                        <p>{item.ease}</p>
                    </div>
                </InnerCardGrid>
            </ResultsCard>
        );
    });

    return <>{items}</>;
}
