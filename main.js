function greeting() {

    alert("BIENVENID@S AL CONVERTIDOR DE UNIDADES");
    alert("ELIJA LA CONVERSION");

    const mainMenu = document.getElementById("main_menu");
    const tempMenu = document.getElementById("unit_sel_temp");

    mainMenu.style.display = "block";
}


function selTemp() {
    
    const mainMenu = document.getElementById("main_menu");
    const tempMenu = document.getElementById("unit_sel_temp");

    mainMenu.style.display = "none";
    tempMenu.style.display = "block";

}


function temp(option) {

    let val;
    let res = 0;

    switch(option) {
        case 1:
            val = Number(prompt("Ingrese valor"));
            console.log("CELSIUS: " + val);
            console.log("FAHRENHEIT: " + celtofah(val));
            console.log("KELVIN: " + celtokel(val));
            break;
        
        case 2:
            val = Number(prompt("Ingrese valor"));
            console.log("FAHRENHEIT: " + val);
            console.log("CELSIUS: " + fahtocel(val));
            console.log("KELVIN: " + fahtokel(val));
            break;

        case 3:
            val = Number(prompt("Ingrese valor"));
            console.log("KELVIN: " + val);
            console.log("CELSIUS: " + keltocel(val));
            console.log("FAHRENHEIT: " + keltofah(val));
            break;
    }
   
    function celtokel(value) {
        return value + 273.15;
    }
    function celtofah(value) {
        return (9 * value) / 5 + 32;
    }
    function keltocel(value) {
        return value - 273.15;
    }
    function keltofah(value) {
        return (9 * (value - 273.15)) / 5 + 32;
    }
    function fahtocel(value) {
        return (5 * (value - 32)) / 9;
    }
    function fahtokel(value) {
        return (5 * (value - 32)) / 9 + 273.15;
    }

    document.getElementById("unit_sel_temp").style.display = "nones";
    document.getElementById("main_menu").style.display = "block";

}
