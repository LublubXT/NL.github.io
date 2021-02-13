
var hover_sound;
var click_sound;

hover_sound = new Audio("click1.mp3");
click_sound = new Audio("click.mp3");

// $("button").hover(function(event) {
//     hover_sound.play();
// });

$("button").click(function(event) {
    click_sound.play();
});

$("button").click(function(event) {

    var key = this.innerHTML;
    var dis = document.getElementById('displ');

    switch (key) {
        case "1":
            console.log("1");
            dis.value += '1';
            break;
        case "2":
            console.log("2");
            dis.value += '2';
            break;
        case "3":
            console.log("3");
            dis.value += '3';
            break;
        case "4":
            console.log("4");
            dis.value += '4';
            break;
        case "5":
            console.log("5");
            dis.value += '5';
            break;
        case "6":
            console.log("6");
            dis.value += '6';
            break;
        case "7":
            console.log("7");
            dis.value += '7';
            break;
        case "8":
            console.log("8");
            dis.value += '8';
            break;
        case "9":
            console.log("9");
            dis.value += '9';
            break;
        case "C":
            console.log("9");
            dis.value = '';
            break;
        case "00":
            console.log("00");
            dis.value += '00';
            break;
        case "0":
            console.log("0");
            dis.value += '0';
            break;
        case "=":
            console.log("=");
            dis.value = eval(dis.value);
            break;
        case "+":
            console.log("+");
            dis.value += '+';
            break;
        case "-":
            console.log("-");
            dis.value += '-';
            break;
        case "/":
            console.log("/");
            dis.value += '/';
            break;
        case "*":
            console.log("*");
            dis.value += '*';
            break;
        case ".":
            console.log(".");
            dis.value += '.';
            break;
        case "+/-":
            console.log("+/-");
            dis.value += '-';
            break;
    }
});
