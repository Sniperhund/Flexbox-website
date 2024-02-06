const burgerButton = document.getElementById("burger-btn");

burgerButton.addEventListener("click", () => {
    console.log("click");

    const nav = document.getElementById("menuList");
    nav.classList.toggle("show");
});
