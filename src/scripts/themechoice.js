// ---------------------------------- Theme Choice ----------------------------------
let body = document.querySelector(':root');

// ---------------------------------- Theme 1 ----------------------------------
function theme1() {
    body.style.setProperty("--txt-color", "#ffffff");
    body.style.setProperty("--main-color", "#3a4764");
    body.style.setProperty("--background-color", "#232c43");
    body.style.setProperty("--screen-color", "#182034");
    body.style.setProperty("--del-color", "#637097");
    body.style.setProperty("--del-box-shadow", "#404e72");
    body.style.setProperty("--del-hover-color", " #a2b2e1");
    body.style.setProperty("--red-color", "#d03f2f");
    body.style.setProperty("--red-box-shadow", "#93261a");
    body.style.setProperty("--red-hover-color", "#f96b5b ");
    body.style.setProperty("--btn-color", "#434A59");
    body.style.setProperty("--btn-background", "#eae3dc");
    body.style.setProperty("--btn-color-hover", "#FFFFFE");
    body.style.setProperty("--btn-box-shadow", "#b4a597");
    body.style.setProperty("--del-reset-equal-color", " #fff");
    body.style.setProperty("--equal-color", "#ffffff  ")
}
// ---------------------------------- Theme 2 ----------------------------------
function theme2() {
    body.style.setProperty("--txt-color", "#000  ");
    body.style.setProperty("--main-color", "#e6e6e6  ");
    body.style.setProperty("--background-color", "#D2CDCD  ");
    body.style.setProperty("--screen-color", "#ededed  ");
    body.style.setProperty("--del-color", "#378187  ");
    body.style.setProperty("--del-box-shadow", "#1B6066  ");
    body.style.setProperty("--del-hover-color", "#62B5BC  ");
    body.style.setProperty("--red-color", "#C85402  ");
    body.style.setProperty("--red-box-shadow", "#873901  ");
    body.style.setProperty("--red-hover-color", "#FF8A38 ");
    body.style.setProperty("--btn-color", "#36362C ");
    body.style.setProperty("--btn-background", "#eae3dc  ");
    body.style.setProperty("--btn-color-hover", "#FFFFFE");
    body.style.setProperty("--btn-box-shadow", "#b4a597");
    body.style.setProperty("--del-reset-equal-color", "#ffffff  ");
    body.style.setProperty("--equal-color", "#ffffff  ")
}

// ---------------------------------- Theme 3 ----------------------------------

function theme3() {
    body.style.setProperty("--txt-color", "#ffe53d");
    body.style.setProperty("--main-color", "#160628");
    body.style.setProperty("--background-color", "#1d0934");
    body.style.setProperty("--screen-color", "#1E0936");
    body.style.setProperty("--del-color", "#58077d");
    body.style.setProperty("--del-box-shadow", "#bc15f4");
    body.style.setProperty("--del-hover-color", "#8631AF");
    body.style.setProperty("--red-color", "#00e0d1");
    body.style.setProperty("--red-box-shadow", "#6cf9f2");
    body.style.setProperty("--red-hover-color", "#93FFF8 ");
    body.style.setProperty("--btn-color", "#ffe53d");
    body.style.setProperty("--btn-background", "#341c4f");
    body.style.setProperty("--btn-color-hover", "#6C34AC");
    body.style.setProperty("--btn-box-shadow", " #881C9E");
    body.style.setProperty("--del-reset-equal-color", " #fff");
    body.style.setProperty("--equal-color", "#1A2327 ")
}

document.getElementById("theme-1").addEventListener("click", theme1);


document.getElementById("theme-2").addEventListener("click", theme2);


document.getElementById("theme-3").addEventListener("click", theme3);


