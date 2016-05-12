function buttonClick() {
	window.alert("Thank you for your response, now redirecting to homepage...");
	setTimeout(200, redirect());
}
function redirect() {
	location.href="./gallery.html";
}

document.getElementById("btn").addEventListener('click', buttonClick) ;
