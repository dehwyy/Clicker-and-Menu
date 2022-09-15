const button = document.querySelector(".button")
let clickCount = 0
const counterNode = document.getElementById("counter")
const button2 = document.querySelector(".button2")
const ulMenu = document.querySelector(".menu-list")
const spans = document.querySelectorAll(".span-button")

button.addEventListener("mousedown", (e) => {
	clickCount += 1
	if (clickCount % 10 === 0) {
		button.style.background = "gold"
		counterNode.innerHTML = clickCount
	} else {
		button.style.background = "lightblue"
		counterNode.innerHTML = clickCount
	}
	
})

button.addEventListener("mouseup", (e) => {
	return new Promise((resolve) => {
	setTimeout(() => {
		button.style.background = ""
		resolve()
	}, 100)
})
})

document.addEventListener("click", (e) => {
	if (e.target.closest(".button2")) {
		ulMenu.classList.toggle("menu-hidden")
		spans[0].classList.toggle("menu-display")
		spans[1].classList.toggle("menu-display")

	}
	if (!e.target.closest(".menu")) {
		ulMenu.classList.add("menu-hidden")
		spans[0].classList.remove("menu-display")
		spans[1].classList.add("menu-display")
	}
})
