import * as bcrypt from 'bcrypt'

interface SeedService {
  name: string,
  location: string,
  imageURL: string,
  description: string,
  authorId: number,
  slug: string
  phrase?: string
}

interface SeedNews {
  title: string,
  content: string,
  slug: string,
  imageURL: string,
  authorId: number
}

enum Rol {
  USER,
  ADMIN
}

interface SeedEnterprise {
  ImageURL: string 
  descHistory: string
  descMision: string
  descVision: string
  address: string
  phone: string
  cellphone: string
}
interface SeedSocialMedia {
  name: string 
  link: string 
}

interface SeedClient {
  name: string
  imageURL: string
  description: string 
}

interface SeedUser {
  id: number
  email: string;
  name: string;
  password: string;
}

interface SeedData {
  users: SeedUser;
  services: SeedService[];
  news: SeedNews[];
  enterprise: SeedEnterprise;
  socialMedia: SeedSocialMedia[];
  clients: SeedClient[]
}

export const initialData: SeedData = {
  users: {
      email: "admin@grupomstransporte.com",
      name: "Administrador",
      password: bcrypt.hashSync("Nereida123", 10),
      id: 1
    },
  services: [
    {
      name: "Transporte terreste de carga liviana",
      location: "En todo el país",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712361346/translogismar/seed/hfhvz8hwdubxmd2xbgjo.jpg",
      description: "El mejor servicio de transporte liviano, encargado de garantizar la eficiencia, puntualidad y responsabilidad de las rutas y cargas que transportamos con un limite de peso de 3.5 toneladas segun los reglamentos a nivel nacional.",
      phrase: "Mejor solucion en transporte de carga liviana",
      slug: "transporte_terreste_de_carga_liviana",
      authorId: 1
    },
    {
      name: "Estiba de Carga",
      location: "En todo el país",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712360339/translogismar/seed/femyuovq2dt2pyfcp8sq.jpg",
      description: "Nuestro equipo de expertos en estiba se encarga de cargar y descargar su carga de manera segura y eficiente. Utilizamos técnicas y equipos especializados para garantizar que su carga esté asegurada y lista para el transporte terrestre sin problemas. Confíe en nosotros para una manipulación cuidadosa de su mercancía.",
      phrase: "Personal Altamente Calificado",
      slug: "estiba_de_carga",
      authorId: 1
    },
    {
      name: "Mudanza Residencial y Comercial",
      location: "Solo Guayaquil",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712360772/translogismar/seed/civn5uygl3x8nfzd5drb.jpg",
      description: "Facilitamos sus mudanzas con nuestro servicio profesional de mudanza. Ya sea para hogares o negocios, nuestro equipo se encarga de embalar, transportar y bajar sus pertenencias con cuidado y eficiencia, garantizando una transición sin problemas.",
      phrase: "Con Más de 10 Años de Experiencia",
      slug: "mudanza_residencial_y_comercial",
      authorId: 1
    },
    {
      name: "Transporte Terrestre de carga pesada",
      location: "En todo el país",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712360279/translogismar/seed/iyelfhrm52w4wpa3sl2j.jpg",
      description: "Ofrecemos un transporte confiable y seguro de carga pesada en todo el país. Ya sea para envíos locales o nacionales, nuestro equipo de expertos se encargará de entregar su carga de manera eficiente y en perfectas condiciones.",
      phrase: "El mejor servicio de transporte ",
      slug: "candato_satelital",
      authorId: 1
    }
  ],
  news: [
    {
      "title": "Nueva Ruta de Transporte en la Ciudad",
      "slug": "nueva_ruta_de_transporte_en_la_ciudad",
      "content": "La ciudad ha inaugurado una nueva ruta de transporte que promete revolucionar la movilidad urbana. Con una planificación cuidadosa y un diseño moderno, esta ruta conecta los principales puntos de interés y reduce significativamente el tiempo de desplazamiento.\n\nLa iniciativa fue posible gracias a la colaboración entre el sector público y privado, garantizando un servicio seguro, eficiente y accesible para todos los ciudadanos. Se han instalado estaciones equipadas con tecnología de última generación y sistemas de seguridad avanzados.\n\nExpertos destacan que esta medida no solo mejora la calidad de vida, sino que también impulsa el desarrollo económico al facilitar el acceso a oportunidades laborales y comerciales en diversas zonas de la ciudad.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1742696487/translogismar/seed/e1w0vq3opbeowlsrotc5.jpg",
      authorId: 1
    },
    {
      "title": "Innovación en Logística: Tecnología que Revoluciona el Sector",
      "slug": "innovación_en_logistica_tecnología_que_revoluciona_el_sector",
      "content": "El sector logístico ha dado un gran salto hacia la digitalización, integrando tecnologías de vanguardia para optimizar el transporte de mercancías. La implementación de sistemas inteligentes permite gestionar rutas de forma precisa y reducir los tiempos de entrega.\n\nEmpresas líderes están adoptando soluciones basadas en inteligencia artificial y análisis de datos, lo que ha resultado en procesos más eficientes y sostenibles. Esta transformación tecnológica beneficia tanto a las compañías como a los consumidores, al mejorar la rapidez y confiabilidad de los servicios.\n\nAnalistas del sector aseguran que la integración de estas herramientas es clave para enfrentar los retos de un mercado cada vez más competitivo y globalizado, y que marcará una nueva era en el transporte y la logística.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1742696638/translogismar/seed/pj82pmr5al8bxsk0xpv7.jpg",
      authorId: 1
      
    },
    {
      "title": "Mejoras en la Infraestructura de Transporte",
      "slug": "mejoras_en_la_infraestructura_de_transporte",
      "content": "El gobierno ha anunciado un ambicioso plan de inversión para renovar la infraestructura de transporte en todo el país. Este proyecto contempla la modernización de carreteras, puentes y rutas ferroviarias, con el fin de mejorar la conectividad y reducir los tiempos de viaje.\n\nLa estrategia se basa en el uso de materiales innovadores y técnicas de construcción sostenibles, lo que garantizará la durabilidad de las obras y una menor huella ambiental. Además, se implementarán sistemas de monitoreo continuo para asegurar la seguridad y el mantenimiento preventivo de las infraestructuras.\n\nDiversos sectores, tanto empresariales como comunitarios, han manifestado su respaldo a estas iniciativas, reconociendo que un sistema de transporte robusto es fundamental para el desarrollo económico y la integración regional.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1742696665/translogismar/seed/hmcvynt8b5lueshidyma.jpg",
      authorId: 1
    }
  ],
  enterprise: {
    ImageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1747877410/translogismar/nosotros/be6isopytvtqg9rjrpmf.jpg", 
    descHistory: `En el competitivo mundo del transporte y la logística, es esencial contar con un aliado que garantice el mejor servicio y eficiencia en cada entrega. Permítanme presentarles al grupo logístico MS, una alianza estratégica conformada por Translogismar S.A. y Transcarlight S.A., dos empresas con una reputación intachable, estas compañías ofrecen servicios personalizados que se adaptan a las necesidades específicas de cada cliente, asegurando que cada carga o paquete llegue a su destino de manera puntual y en perfectas condiciones. 
    
    Transcarlight S.A. se especializa en rutas de reparticion, entregas urgentes con una flota de vehiculos de carga liviana. Por otro lado, Translogismar S.A. destaca en la gestión y logistica del transporte de mercaderia pesada, ofreciendo soluciones integrales que optimizan cada paso del proceso logístico. Juntas, estas empresas forman un equipo imbatible conformado con vehiculos y choferes altamente capacitados que garantiza la satisfacción del cliente y la reducción de costos operativos, elegir nuestro grupo logístico es optar por la tranquilidad de saber que sus productos están en las mejores manos.`,
    descMision: "Nuestra mision es proporcionar soluciones integrales y eficientes de movilidad que superen las expectativas de sus clientes. El grupo se dedica a garantizar la entrega segura y puntual de mercancías, promoviendo un entorno de colaboración y confianza con sus socios y empleados. Además, busca mejorar continuamente sus procesos para satisfacer las necesidades cambiantes del mercado, Con cada entrega buscamos fortalecer alianzas duraderas, contribuir al desarrollo sostenible y consolidarnos como líderes en la industria.",
    descVision: "Nuestra vision es ser el líder reconocido en la industria, proporcionando soluciones de transporte innovadoras, eficientes y sostenibles. Este grupo garantiza la entrega puntual y segura de mercancías, con un enfoque en la mejora continua. Además, se compromete a fomentar un entorno de trabajo inclusivo y colaborativo, en el que cada miembro del equipo se sienta valorado y motivado para contribuir al éxito colectivo, buscamos ser la elección preferida de clientes que valoran la calidad, la confianza y la innovación en el transporte de sus cargas.",
    address: "Guayaquil - Prosperina km. 6.5 vía Daule",
    phone: "04260462",
    cellphone: "0958989766"
  },
  socialMedia: [
    {
      name: 'facebook',
      link: "https://www.facebook.com"
    },
    {
      name: 'instagram',
      link: "https://www.instagram.com"
    },
    {
      name: 'xtwitter',
      link: "https://www.twitter.com"
    },
    {
      name: 'email',
      link: "info@translogismar.com"
    }
  ],
  clients: [
    {
      name: "COMEXPORT",
      description: "Depósito Aduanero Público con más de 25 años",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1747669690/translogismar/clients/riy2wfyxjlzrag3qyn5z.jpg"
    },
    {
      name: "LAARCOURIER",
      description: "Empresas de envíos en ecuador. Entregan los paquetes de su emprendimiento con seguridad en todo el Ecuador.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1747671400/translogismar/clients/wjprepx5tvblw3rhm6qz.jpg"
    },
    {
      name: "PINTURAS UNIDAS",
      description: "Empresa de venta de las mejores pinturas para todo tipo de superficie.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1747671825/translogismar/clients/os14rglche0ofsyir8sp.png"
    },
    {
      name: "BIG VISION",
      description: "Empresa especializada en la impresión en gran formato donde incorporan técnicas de impresión UV y solvente con maquinarias de última generación.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1747673123/translogismar/clients/kh98ycozmjl78gmvaqfq.png"
    },
    {
      name: "NORVEMPRO",
      description: "Empresa dedicada a la operacion de venta a comerciantes al por Mayor de Medicamentos y Productos Relacionados.",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1747877857/translogismar/clients/vue6bzoagc3ljsqzqp6u.png"
    }
  ]
}