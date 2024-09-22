
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("navBar");
    const links = nav.querySelectorAll('a')
    const buttons = nav.querySelectorAll('button')
    const subs = document.getElementById('sublistas')
    const linkSubs = subs.querySelectorAll('a')

    const subs2 = document.getElementById('sublistas2')
    const linkSubs2 = subs2.querySelectorAll('a')

    const menu = document.getElementById('icoMenu')

    // Cuando se recarga la pagina
    window.addEventListener('load', () => {
        if (window.scrollY > 50) {

            // si el scroll se mantiene a mayor de 50px una ves que se recarga, se mantiene con las mismas variables de diseno en el navbar

            nav.classList.add("bg-white", "shadow-lg");
            nav.classList.remove("md:bg-transparent" );

            // Links de la barra de navegacion
            links.forEach(link => {
                link.classList.add('text-dark');
                link.classList.remove('md:text-white')
            })

            // Botones de la barra de navegacion
            buttons.forEach(button => {
                button.classList.add('text-dark')
                button.classList.remove('md:text-white')
            })
        }
    });

    // Cuando no hay un evento de scroll
    window.addEventListener("scroll", function () {

        // si el scroll es mayor a 50px
        if (window.scrollY > 50) {

            // Remplezamos las variables de disenos pot las siguientes
            nav.classList.add("bg-white", "shadow-lg");
            nav.classList.remove("md:bg-transparent");

            menu.classList.add('text-dark')
            menu.classList.remove('text-white')

            // Botones en la barra de navegacion
            buttons.forEach(button => {
                button.classList.add('text-dark')
                button.classList.remove('md:text-white')
            })

            // Links en la barra de navegacion  
            links.forEach(link => {
                link.classList.add('text-dark','after:bg-black');
                link.classList.remove('md:text-white','after:bg-white')
            })



        } else {

            //Si el scroll es menos a 50px, asignamos las variables de diseno por defecto
            nav.classList.remove("bg-white","md:bg-transparent" , "shadow-lg");
            nav.classList.add("bg-white","md:bg-transparent");

            links.forEach(link => {
                link.classList.add('md:text-white','after:bg-white');
                link.classList.remove('text-dark','after:bg-black')
            })

            buttons.forEach(button => {
                button.classList.add('text-dark','md:text-white')
                button.classList.remove('text-dark')
            })

            linkSubs.forEach(link => {
                link.classList.add('text-dark')
                link.classList.remove('text-white')
            })

            linkSubs2.forEach(link => {
                link.classList.add('text-dark')
                link.classList.remove('text-white')
            })
            
            menu.classList.add('text-white')
            menu.classList.remove('text-dark')
        }
    });
});

