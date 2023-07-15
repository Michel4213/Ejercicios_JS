window.onload = function () {
    let btn = document.querySelector("#datos");

    const changeColor = () => {
        btn.style.color = "red";
    }

    btn.onclick = function () {
        changeColor();
    }

}