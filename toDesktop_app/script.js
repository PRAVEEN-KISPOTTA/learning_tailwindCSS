isHidden = document.querySelector("#subNavBar");
function handleMenu(){
    console.log("dropDown menu");
    (isHidden.classList.contains("hidden")) ? isHidden.classList.remove("hidden") : isHidden.classList.add("hidden");
}