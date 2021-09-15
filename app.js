
const newTime = ()=>{
    const time = new Date();

    let seconds = time.getSeconds();
    document.getElementById("second").style.transform = `rotate(${seconds*6}deg)`;
    
    let minutes = time.getMinutes();
    document.getElementById('minute').style.transform = `rotate(${minutes*6+seconds*0.1}deg)`;
    
    let hours = 0;
    if(time.getHours() > 12){
        hours = time.getHours() % 12;
    }
    else {
        hours = time.getHours();
    }
    document.getElementById('hour').style.transform = `rotate(${hours*30+minutes*0.5}deg)`;
}

setInterval(()=>{
    newTime();
}, 1000)
