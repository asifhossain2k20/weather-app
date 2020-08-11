var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue');
var name=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0c129c39e6af5a541dafcf7dc066356c')
.then(response=>response.json())
.then(data=>{
    var nameValue=data['name'];
    var tempValue=data['main']['temp'];
    var descValue=data['weather'][0]['description'];
    name.innerHTML=nameValue;
    temp.innerHTML=tempValue-273+"cel";
    desc.innerHTML=descValue;

})


.catch(err=>alert("wrong City Name!"));
})