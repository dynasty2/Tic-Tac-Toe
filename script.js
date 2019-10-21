let redOrBlue = 0
const box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("box")
		// const boxcolor = document.querySelectorAll(".box");
		if ( redOrBlue % 2 === 1) {
			this.style.background = "red"
			redOrBlue = redOrBlue +=1;
		} else if ( redOrBlue % 2 === 0) {
				this.style.background = "blue"	
				redOrBlue = redOrBlue +=1;
		} else {
			console.log("tubular")
		}
	})
}

// let redOrBlue = 0
// redOrBlue = redOrBlue +=1;