const convertCelsius =() =>{
    var farenheit = parseFloat(document.querySelector("#farenheit").value);

    var celsiusResult = (farenheit-32)/1.8;
    var b = celsiusResult.toFixed(2);

    document.querySelector("#farenheit").value = farenheit;
    document.querySelector("#celsius").value = b;
}

const convertFarenheit =() =>{
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var farenheitResult = (1.8 * celsius)+32;
    var a = farenheitResult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#farenheit").value = a;
}
const reset = () =>{
    document.querySelector("#farenheit").value = " ";
    document.querySelector("#celsius").value = " ";
}