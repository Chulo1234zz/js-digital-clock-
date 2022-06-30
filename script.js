'use strict';
setInterval(()=>{

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let hid = document.querySelector('.hid');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h>=12 ? "PM" : "AM";
    // convert 24 hour clock to 12 hour clock
    if(h>12){
    h-=12;
    }
    // add zero  before single digit number 
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;
    
       

    
    hours.innerHTML = h ;
    seconds.innerHTML =s  ;
    minutes.innerHTML = m  ;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * (h/12));
    // 12 hr clock
    mm.style.strokeDashoffset = 440 - (440 *( m/60));
    // 60 minutes
    ss.style.strokeDashoffset = 440 - (440 * (s/60));
    // 60 seconds
    /* if(h<2 && h>0){
        hid.style.display='none'
    }
    else{
    hid.style.display = 'inline-block'
    };
    if(m<2 && m>0){
        hid.style.display='none'
    }
    else{
    hid.style.display = 'inline-block'
    };
    if(s<=2 && s>0){
        hid.style.display='none'
    }
    else{
    hid.style.display = 'inline-block'
    }; */

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
 
})
