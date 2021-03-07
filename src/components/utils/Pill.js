import React from "react";
import { PillsContainer, PillItem } from "../ui-styled-components/Pill";

export default function Pill({ status, native }) {

    // Process data with underscores (maybe regex, or simple if)

    return (
        <PillsContainer>
            {status &&
                <PillItem native>
                    {status}
                </PillItem>}

            <PillItem bgColor={"#000"}>
                {native}
            </PillItem>
        </PillsContainer>
    )
}
