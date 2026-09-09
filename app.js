console.log("DACO Technologies");

/*==========================================
    HEADER
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*==========================================
    MEGA MENU
==========================================*/

const services = {

    web: {

        title: "Desarrollo Web",

        text: "Diseñamos y desarrollamos páginas web modernas, rápidas y adaptadas a las necesidades de tu empresa. Creamos experiencias profesionales que generan confianza y ayudan a convertir visitantes en clientes.",

        link: "desarrollo-web.html",

        mockup: "WEB",

        color: "linear-gradient(135deg,#2563eb,#60a5fa)",

        features: [

            "Landing Pages",

            "Sitios Corporativos",

            "Tiendas Virtuales",

            "Aplicaciones Web"

        ]

    },

    erp: {

        title: "Sistemas Empresariales",

        text: "Desarrollamos software a medida para administrar ventas, inventario, clientes, empleados y todos los procesos internos de tu empresa desde un solo lugar.",

        link: "sistemas.html",

        mockup: "ERP",

        color: "linear-gradient(135deg,#ef4444,#f87171)",

        features: [

            "Sistema POS",

            "Inventario",

            "Facturación",

            "Dashboard"

        ]

    },

    automation: {

        title: "Automatización",

        text: "Automatizamos tareas repetitivas para aumentar la productividad de tu negocio y reducir errores en los procesos diarios.",

        link: "automatizacion.html",

        mockup: "AUTO",

        color: "linear-gradient(135deg,#10b981,#34d399)",

        features: [

            "Procesos",

            "Correos",

            "Workflows",

            "Formularios"

        ]

    },

    integration: {

        title: "Integraciones",

        text: "Conectamos tus sistemas con plataformas externas mediante APIs para que toda la información fluya automáticamente.",

        link: "integraciones.html",

        mockup: "API",

        color: "linear-gradient(135deg,#7c3aed,#8b5cf6)",

        features: [

            "APIs",

            "WhatsApp",

            "Pagos",

            "CRM"

        ]

    },

    data: {

        title: "Datos e Inteligencia",

        text: "Creamos dashboards interactivos para que puedas tomar decisiones basadas en datos reales de tu empresa.",

        link: "datos.html",

        mockup: "DATA",

        color: "linear-gradient(135deg,#f59e0b,#fbbf24)",

        features: [

            "Dashboards",

            "Reportes",

            "KPIs",

            "Estadísticas"

        ]

    },

    support: {

        title: "Soporte Técnico",

        text: "Te acompañamos después de la entrega del proyecto con mantenimiento, mejoras y soporte cuando lo necesites.",

        link: "soporte.html",

        mockup: "HELP",

        color: "linear-gradient(135deg,#334155,#64748b)",

        features: [

            "Mantenimiento",

            "Actualizaciones",

            "Seguridad",

            "Asistencia"

        ]

    }

};



const buttons = document.querySelectorAll(".service-btn");

const title = document.getElementById("serviceTitle");

const text = document.getElementById("serviceText");

const link = document.getElementById("serviceLink");

const preview = document.getElementById("previewMockup");

const features = document.getElementById("previewFeatures");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        buttons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const service = services[button.dataset.service];

        title.textContent = service.title;

        text.textContent = service.text;

        link.href = service.link;

        preview.textContent = service.mockup;

        preview.style.background = service.color;

        features.innerHTML="";

        service.features.forEach(item=>{

            features.innerHTML += `<li>✔ ${item}</li>`;

        });

    });

});
