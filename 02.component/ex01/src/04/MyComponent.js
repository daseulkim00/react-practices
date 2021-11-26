import React, {Fragment} from "react";
import {PropTypes} from 'prop-types';   // 설치해서 사용해 줘야함 

export default function MyComponent({props01 , props02, props03, props04, props05, props06 }){
    return(
        <Fragment>
            <h2>Propoty Validation</h2>

            <span>props01: { props01 ? props01 : '--- Not Set ---' }</span>
            <br></br>

            <span>props02: { props02 ? props02 : '--- Not Set ---' }</span>
            <br></br>

            <span>props03: { props03 ? `${props03}`: '--- Not Set ---' }</span>
            <br></br>

            {/* object */}
            <span>props04: { props04 ? props04.no : '--- Not Set ---' }</span>  
            <br></br>

            {/* 배열 */}
            <span>props05: { props05 ? props05.map((e,i) => <b key={i}>{e} </b>) : '--- Not Set ---' }</span>
            <br></br>


            {/* 함수 */}
            <span>props06: { props06 ? props06() : '--- Not Set ---' }</span>
            <br></br>

        </Fragment>
    )
}

MyComponent.prototype ={

    // Built -In PropTypes primitive(원시타입)
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired
}


// 디폴트 값 세팅
// default value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: false,
    props04: {},
    props05: [],
    props06: () => {}  //dummy 함수

}