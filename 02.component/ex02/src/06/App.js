import React, { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'; 

// additional.. 곡필요하지 않음
import {library}  from '@fortawesome/fontawesome-svg-core';
import {far}  from '@fortawesome/free-regular-svg-icons';
import {fab}  from '@fortawesome/free-brands-svg-icons';

export default function() {
    library.add(faBell,far,fab)
    return (
        <div>
            {/* examples*/} 
            {/* 그냥 이렇게 쓰면 될듯  */}
            <FontAwesomeIcon icon ={faBell} />
            <FontAwesomeIcon icon ={faCheckCircle} />
            <FontAwesomeIcon icon ={faTimesCircle} />

            {/* solid*/}
            <FontAwesomeIcon icon ={["fas","bell"]} />
            <FontAwesomeIcon icon ={["bell"]} />      {/* 솔리드는 기본이라서 지정 안해줘도 된다. */}
            

            {/* regular*/}
            <FontAwesomeIcon icon ={["far","bell"]} />
        

            {/* brands */} 
            <FontAwesomeIcon icon ={["fab","github"]} />
            <FontAwesomeIcon icon ={["fab","apple"]} />
            <FontAwesomeIcon icon ={["fab","google"]} />



        </div>
    )
}