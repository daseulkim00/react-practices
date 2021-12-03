import React from 'react';
import ListItem from './ListItem';



export default function() {
    return (
        <ul className="Guestbook__List">

        <ListItem title="지나가다" contents={"별루입니다. \n 비번:1234 -,.-"}></ListItem>
        <ListItem title="나죽어" contents={"살려줘어어 "}></ListItem>
        <ListItem title="나중에확인해보지" contents={"별루입니다. \n 비번:1234 -,.-"}></ListItem>

    </ul>
    )
}