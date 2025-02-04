console.log('Hello burgtr!');
function burgerClick()
{
	console.log('Click')
	document.querySelector('.nav__list').classList.toggle('nav__list-active');
	document.querySelector('.burger').classList.toggle('burger-active');
}