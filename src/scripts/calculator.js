let input = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "RESET":
                input.innerText = "";
                break;
            case "=":
                try {
                    input.innerText = eval(input.innerText);

                } catch {
                    input.innerText = "Error";
                }
                break;
            case "DEL":
                if (input.innerText) {
                    input.innerText = input.innerText.slice(0, -1);
                }
                break;
            default:
                input.innerText += e.target.innerText;
        }
    });
});



