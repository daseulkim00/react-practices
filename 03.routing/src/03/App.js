import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    return (
    /*/
        // /#/ 사용
        <HashRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/guestbook' element={<Guestbook />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </HashRouter>
    /*/
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/guestbook' element={<Guestbook />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </BrowserRouter>

    //*/
    );
}