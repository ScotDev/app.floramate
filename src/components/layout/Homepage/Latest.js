import React, { useState } from 'react';
import { CardGrid } from '../../ui-styled-components/Grid';
import { Card } from '../../ui-styled-components/Card';

import { LargeText, RegularText } from '../../ui-styled-components/Text';


export default function Latest(props) {
    const [data, setData] = useState(null)

    if (props.isLoading) {
        return <p>Loading...</p>
    }

    if (props.error) {
        console.log(props.error)
        return null
    }

    if (props.data) {
        setData(props.data)
    }



    if (data) {
        // items = data.map((item) => {
        //     return (<Card key={item.id}>
        //         <img alt="" src={item.img}></img>
        //         <LargeText>{item.name}</LargeText>
        //         <RegularText>{item.category}</RegularText>
        //         <RegularText>{item.description}</RegularText>
        //     </Card>)
        // })
        console.log("Data", data)
    }

    return (
        <>
            <CardGrid>
                {/* {data && items} */}
            </CardGrid>
        </>
    )
}
