function handleMenu(){
    console.log("dropDown menu");
    document.querySelector("#subNavBar").classList.remove("hidden")
}

function closeMenu(){
    document.querySelector("#subNavBar").classList.add("hidden")
}