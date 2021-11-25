import React, {Fragment} from 'react';

import Clock from './Clock';


export default function() {    
    return (
        <Fragment>
             <p>Dynamic HTML Rendering</p>   {/* ex07-절대 이렇게 하면 안된다 */}
             
           
             <Clock />
        </Fragment>
    );
}