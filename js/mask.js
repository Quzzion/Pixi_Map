const buttonContainer = document.querySelector(".popup-button");
const maskContainer = document.querySelector(".mask");
console.log("本条语句已执行");
buttonContainer.addEventListener("click",function(){
	maskContainer.style.display = "none";
});
console.log("mask语句已执行结束");