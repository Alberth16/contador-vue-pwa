if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("./sw.js")
    .then((reg)=> console.log(("Ejecutando")))
    .catch((err)=> console.log((err)));
}