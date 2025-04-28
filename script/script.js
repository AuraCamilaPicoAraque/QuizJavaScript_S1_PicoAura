function trae_api() {
    /* Esto trae las fucnion de la api para que se muestre */
    const api = new XMLHttpRequest();
    // trae la libreria de la api con algo en especifico
    const url = "https://api.weatherapi.com/v1/current.json?key=a6b13538017e464c99d114520252804&q=Floridablanca&lang=es";
    api.open("GET", url);
    api.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let guardar_data = JSON.parse(this.responseText);
            const text_1 = document.getElementById("seccion1__text__1");
            const text_2 = document.getElementById("seccion1__text__2");

            text_1.innerHTML = `${["location"]["name"]}`

        };

    });
api.send();
}

trae_api();