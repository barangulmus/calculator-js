function numbers(button) {
    var buttonValue = button.innerText;
    var textbox = document.getElementById("yazi");
    if (buttonValue === "=") {
        let abcd = eval(textbox.value);
        textbox.value = abcd;
    }
    else if (button.id === "deleteEvery") {
        textbox.value = "";
        console.log("every delted");
    }
    else if (button.id === "deleteOne") {
        uzunluk = textbox.value.length;
        var textkutu = document.getElementById("yazi").value;
        document.getElementById("yazi").value = textkutu.substring(0, uzunluk - 1);
        textbox.value = textbox.value.substring(0, uzunluk - 1);
    }
    else {
        textbox.value += buttonValue;
    }
}