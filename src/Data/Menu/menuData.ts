

type Acceso = {
    img: string,
    ruta: string,
    text: string
}


export const accesos: Acceso[] = [
    {
        img: "/public/Img/MENU_ICONS/home.png",
        ruta: "",
        text: "Inicio"
    },
    {
        img: "/public/Img/MENU_ICONS/facturacion.png",
        ruta: "/Servicios/CElectronica",
        text: "Contabilidad electronica"
    },
    {
        img: "/public/Img/MENU_ICONS/Gobierno.png",
        ruta: "/Servicios/CGubernamental",
        text: "Contabilidad gubernamental"
    },
    {
        img: "/public/Img/MENU_ICONS/automatizacion.png",
        ruta: "/Servicios/Autofacturacion",
        text:"Autofacturacion"
    },
    {
        img: "/public/Img/MENU_ICONS/agenda.png",
        ruta: "/Servicios/Addendas",
        text: "Addendas"
    },
    {
        img: "/public/Img/MENU_ICONS/facturacion.png",
        ruta: "/Portales/FactElectronica",
        text: "Facturacion electronica"
    },
    {
        img: "/public/Img/MENU_ICONS/token.png",
        ruta: "/Portales/Nomina",
        text: "Nomina"
    },
    {
        img: "/public/Img/MENU_ICONS/almacenamiento.png",
        ruta: "/Portales/RAV",
        text: "RAV"
    },
    {
        img: "/public/Img/MENU_ICONS/contacto.png",
        ruta: "",
        text: "Contacto"
    },
    {
        img: "/public/Img/MENU_ICONS/key.png",
        ruta: "/AccesoClientes",
        text: "Acceso a clientes"
    }
]
