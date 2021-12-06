import React, {useState, useEffect, Fragment} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    const[ticks, setTicks] = useState(0);

    // 새로운값만들면 문제없다
    useEffect(() => {
        setInterval(function () {
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks+1);
        }, 1000);
    }, []);    //[] 있으면 digmount되었을때만 호출되는데 [] 없으면 콜백이 계속된다.(랜더링할때마다 계속 호출된다.)아니면 아래처럼 timeout으로 변경하면된다.
    
    
    // 새로운값만들면 문제있다
    // useEffect(() => {
    //    setTimeout(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks+1);
    //     }, 1000);
    // }, [currentClockTime]);      // 한번호출하고 끝 타이머가 없어진다.


    return (
            <Fragment>
                <span>{ticks}</span>
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={currentClockTime.hours}
                    minutes={currentClockTime.minutes}
                    seconds={currentClockTime.seconds} />;
            </Fragment>
    )
}