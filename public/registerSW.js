if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./registerSW.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}
