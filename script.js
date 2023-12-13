// write js code here if required
function updateTimer(){
	const currentDate = new Date();
	const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
	const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`

	document.getElementById('timer').innerHTML = `${formattedDate} ,${formattedTime}`;
}

updateTimer();