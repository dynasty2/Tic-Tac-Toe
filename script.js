const box = document.querySelectorAll(".box")
for (let i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("box")
		// const boxcolor = document.querySelectorAll(".box");
		box[i].style.background = "red";
	})
}
