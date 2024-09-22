

type Aplicacion = {

    Nombre: string,
    url: string,
    pathImg: string,
    Detalles: string,
    Caracteristicas: string[]
}


export const aplicaciones: Aplicacion[] = [
    {
        Nombre: 'Facturacion', 
        url: 'https://adon.mx/site/login.aspx',
        pathImg: '/Img/ACCESO_CLIENTES/FACTURACION.png',
        Detalles: '',
        Caracteristicas: ['Factura 4.0','Nomina','Complementos de pago','Notas de credito']
    },
    {
        Nombre: 'Nominas', 
        url: 'http://nomina.adon.mx/(S(t14insvxru5ffmyukesx5o45))/Default.aspx',
        pathImg: '/Img/ACCESO_CLIENTES/NOMIWEB.png',
        Detalles: '',
        Caracteristicas: ['Timbrado de nomina']
    },
    {
        Nombre: 'C. Electronica', 
        url: 'https://masfacturas.mx/',
        pathImg: '/Img/ACCESO_CLIENTES/FENIX.png',
        Detalles: '',
        Caracteristicas:["Recopilaccion", "Organizacion", "Tratamiento","Almacenamiento digital"]
    },
    {
        Nombre: 'Auto facturacion', 
        url: 'https://solucionfactible.com/crm/login.jsp',
        pathImg: '/Img/ACCESO_CLIENTES/SFERP.png',
        Detalles: '',
        Caracteristicas:[]
    },
    {
        Nombre: 'C. Gubernamental', 
        url: 'http://158.69.158.79/appserver/explorar',
        pathImg: '/Img/ACCESO_CLIENTES/CALIPSO.png',
        Detalles: '',
        Caracteristicas:[]
    },
    {
        Nombre: '8ENRED', 
        url: 'https://apps.adon.mx/',
        pathImg: '/Img/ACCESO_CLIENTES/8ENRED.png',
        Detalles: '',
        Caracteristicas:['RAV','Gestion de facturas', 'Consulta', 'Validacion de RFC','Nomiweb']
    },
    {
        Nombre: 'Retenciones', 
        url: 'https://apps.adon.mx/timbra/signin.php',
        pathImg: '/Img/ACCESO_CLIENTES/RETENCIONES.png',
        Detalles: '',
        Caracteristicas:["Ingresos", "Egresos","Traslado","Complemento"]
    },
    {
        Nombre: 'NOM 035', 
        url: 'http://www.x035net.com.mx/',
        pathImg: '/Img/ACCESO_CLIENTES/X35.png',
        Detalles: '',
        Caracteristicas:["Norma 035", "Analisis", "Riesgo psicosocial","Entoro","Centro de trabajo"]
    },
    {
        Nombre: 'Carta porte', 
        url: 'https://masfacturas.mx/',
        pathImg: '/Img/ACCESO_CLIENTES/FENIX.png',
        Detalles: '',
        Caracteristicas:["Facturacion","Complemento", "Transportista", "Mercancias"]
    },

]