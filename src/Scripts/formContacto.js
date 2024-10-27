

document.getElementById("formContacto").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formulario = event.target.value;
    const request = new FormData(formulario);
    console.log(request)


    const response = await fetch("https://formsubmit.co/buzon@adon.mx", {
        method: "POST",
        body: request
    });

    console.log(response);
});

// const enviarFormualario = async(event) => {


// }