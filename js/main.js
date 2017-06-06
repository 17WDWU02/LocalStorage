console.log(localStorage);

if(localStorage.getItem("Username") === null){
	//Show login
	$("#loginStatus").text("Login");
} else{
	//Show logout
	$("#loginStatus").text("Logout");
	$("#LoginForm").remove();
}

$(document).ready(function(){

	$("#username").text(localStorage.Username);

	$("#submit").click(function(){
		event.preventDefault();
		var Name = $("#name").val();


		//localStorage.setItem(key, value)
		localStorage.setItem('Username', Name);
		localStorage.setItem('Test', "test");




		$("#username").text(localStorage.Username);
		location.reload();
		console.log(localStorage);
	});

	$("#loginStatus").click(function(){
		if(localStorage.getItem("Username") !== null){
			localStorage.removeItem('Username');
			location.reload();
		}
	});





















});