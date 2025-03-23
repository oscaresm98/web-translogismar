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
      email: "correo@correo.com",
      name: "Nereida Sanchez",
      password: bcrypt.hashSync("Nereida123", 10),
    },
  services: [
    {
      name: "Transporte Terrestre",
      location: "En todo el país",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712360279/translogismar/seed/iyelfhrm52w4wpa3sl2j.jpg",
      description: "Ofrecemos un transporte confiable y seguro de carga pesada en todo el país. Ya sea para envíos locales o nacionales, nuestro equipo de expertos se encargará de entregar su carga de manera eficiente y en perfectas condiciones.",
      phrase: "El Mejor Servicio del Mercado",
      slug: "transporte_terrestre",
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
      description: "Facilitamos sus mudanzas con nuestro servicio profesional de mudanza. Ya sea para hogares o negocios, nuestro equipo se encarga de embalar, transportar y desembalar sus pertenencias con cuidado y eficiencia, garantizando una transición sin problemas.",
      phrase: "Con Más de 10 Años de Experiencia",
      slug: "mudanza_residencial_y_comercial",
      authorId: 1
    },
    {
      name: "Candado Satelital",
      location: "En todo el país",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712361346/translogismar/seed/hfhvz8hwdubxmd2xbgjo.jpg",
      description: "Introducimos una capa adicional de seguridad a su carga con nuestro servicio de seguimiento mediante candado satelital. Con esta tecnología avanzada, puede monitorear la ubicación y el estado de su carga en tiempo real. Aumente la visibilidad y la tranquilidad, asegurando que sus envíos estén siempre bajo control y protegidos durante todo el trayecto. Confíe en Translogismar SA para un transporte más seguro y confiable.",
      phrase: "La Solución Sobre Ruedas",
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
    ImageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712359819/translogismar/seed/jq3jfbdnnip8wvfuguqh.jpg", 
    descHistory: `Fusce sed nhhhh odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus. Aenean nulla tellus, aliquet in laoreet eu, varius at quam.
    Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus.
    Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus. Aenean nulla tellus, aliquet in laoreet eu, varius at quam.`,
    descMision: "Nuestra misión es ofrecer soluciones de transporte terrestre de carga pesada que superen las expectativas de nuestros clientes. Nos comprometemos a proporcionar servicios seguros, eficientes y personalizados, impulsados por la innovación y la excelencia operativa. Con cada entrega, buscamos fortalecer alianzas duraderas, contribuir al desarrollo sostenible y consolidarnos como líderes en la industria.",
    descVision: "Nuestra visión es ser reconocidos como el referente en el transporte terrestre de carga pesada, destacando por nuestra integridad, eficiencia y compromiso con la excelencia. Aspiramos a expandir nuestra presencia de manera sostenible, aprovechando tecnologías emergentes y prácticas ambientalmente responsables. Buscamos ser la elección preferida de clientes que valoran la calidad, la confianza y la innovación en el transporte de sus cargas.",
    address: "Guayaquil - Prosperina km. 6.5 vía Daule",
    phone: "04260462",
    cellphone: "0999999918"
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
      name: "Holcim",
      description: "Empresa de contruccion",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712359610/translogismar/seed/ld4tbewaklrldizitvqp.png"
    },
    {
      name: "Arcor",
      description: "Empresa de bebidas",
      imageURL: "https://res.cloudinary.com/dadruqmzw/image/upload/v1712359725/translogismar/seed/rzlbykdhgjb6lhuo9g8v.png"
    }
  ]
}