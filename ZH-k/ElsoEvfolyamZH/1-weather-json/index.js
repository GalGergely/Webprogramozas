const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

button.addEventListener('click', function () {
    //task1
    const obj = JSON.parse(textarea.value);
    for (let i = 0; i < obj.daily.length; i++) {
        if ((obj.daily[i].wind_deg >135 && obj.daily[i].wind_deg<225)&&(obj.daily[i].weather[0].main=="Clouds")) {
            task1.innerHTML=obj.daily[i].dt
        }
    }
    //task2
    maxmin=200
    for (let i = 0; i < obj.daily.length; i++) {
        if (obj.daily[i].temp.max<maxmin) {
            maxmin=obj.daily[i].temp.max
        }
    }
    task2.innerHTML=maxmin;
    //12,3
    //task3
    isitgood=true;
    for (let i = 0; i < obj.daily.length; i++) {
        if (obj.daily[i].pressure<1010) {
            isitgood=false
        }
    }
    task3.innerHTML=isitgood;
    //task4
    osszeg=0;
    for (let i = 0; i < obj.daily.length; i++) {
        osszeg=osszeg+obj.daily[i].feels_like.day
    }
    task4.innerHTML=osszeg/obj.daily.length;
    //task5
    counter=0;
    for (let i = 0; i < obj.hourly.length; i++) {
        if(obj.hourly[i].wind_speed>3) {
                counter++;
        }
    }
    task5.innerHTML=counter;
} )
