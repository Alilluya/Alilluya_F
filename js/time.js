function currentTime (){
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	second = plusZero(second);
	minute = plusZero(minute);
	hour = plusZero(hour);
	//console.log(hour, minute, second);
	document.getElementById('time').innerText = hour + ':' + minute + ':' + second;
	setTimeout(currentTime, 1000);
}
function plusZero(number)
{
	if (number<10){
number = '0'+number;
return number;}
else{
	return number;
}
}

currentTime();