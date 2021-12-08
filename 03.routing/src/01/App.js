import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const[route, setRoute] = useState('');

    useEffect(() =>{
        //didmount 통신시작하는 장소
        const handleHashChange= () => setRoute(window.location.hash.substr(1));   // # 없앨려고 사용 
        window.addEventListener('hashchange', handleHashChange )
        
        return () => {
        //unmount  통신해제하는장소
            window.removeEventListener('hashchange', handleHashChange)
        }
    },[])
    return (() => {
        switch(route){
            case '/':    // / 인 경우에 메인으로 가라
                return <Main /> ;
           case '/guestbook':   
                return <Guestbook /> ;
            case '/gallery':    
                return <Gallery /> ;
            default:
                return null;
        }
        return <div>{`${route}에 맞는 컴포넌트를 리턴합니다.`}</div>
    })();  
        
        
        
}