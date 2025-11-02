import React , {useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const changeTime = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(changeTime);
        }

    }, []);

    function timeDisplay() {
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = (hour > 12) ? "PM" : "AM";
        
        hour = (hour == 12) ? 12 : (hour % 12);
        
        return `${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)} ${ampm}`
    }

    function addZero(number) {
        const num = (number < 10) ? `0${number}` : number ;
        return num;
    }

    return (
        <div className="entire-body">
            <div className="clock-container">
                <span className="clock">{timeDisplay()}</span>
            </div>
        </div>
    )
}

export default DigitalClock