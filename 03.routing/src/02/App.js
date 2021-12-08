import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() =>{
        //didmount 통신시작하는 장소
        const handlePopState= () => setRoute(e.state);   // # 없앨려고 사용 
        window.addEventListener('popstate', handlePopState )
        
        return () => {
        //unmount  통신해제하는장소
            window.removeEventListener('popstate', handlePopState)
        }
    },[]);


    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = e.target.href.substr(e.target.href.lastIndexOf('/'));
        window.history.pushState({page: url}, e.target.text, url);
        setRoute({page: url});


    }

  
    return (
        <div>
              {
                  (() => {
                    switch(route.page){
                        case '/':    // / 인 경우에 메인으로 가라
                            return <Main /> ;
                       case '/guestbook':   
                            return <Guestbook /> ;
                        case '/gallery':    
                            return <Gallery /> ;
                        default:
                            return null;
                    }
                })()

              }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>

        </div>
    )
}