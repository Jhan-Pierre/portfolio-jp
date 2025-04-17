import type { Project } from "@/types"

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Aplicaciones Web" },
  { id: "desktop", label: "Aplicaciones de Escritorio" },
  { id: "mobile", label: "Aplicaciones Móviles" },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Ecommerce - Proyecto Colaborativo",
    category: "web",
    images: [
      "/placeholder.svg?height=300&width=600",
      "/placeholder.svg?height=300&width=600&text=Pantalla+Principal",
      "/placeholder.svg?height=300&width=600&text=Dashboard",
    ],
    description:
        "HubTodoAppSistema web con un panel de administración intuitivo y una plataforma de ventas en línea, que permite gestionar productos, pedidos y realizar pagos de manera segura a través de PayPal.",
    technologies: ["C#", ".NET Framework", "Bootstrap", "SQL Server", "Git Hub"],
    demoUrl: "#",
    codeUrl: "https://github.com/Jhan-Pierre/ProyectoSistemaWeb",
    period: "Dec 2024 - Feb 2025",
    role: "Desarrollador Full Stack",
    features: [
      "Interfaz de usuario intuitiva y responsive",
      "Arquitectura escalable y mantenible",
      "Implementación de buenas prácticas de desarrollo",
      "Optimización de rendimiento y seguridad",
    ],
  },
  {
    id: 2,
    title: "TodoApp - Proyecto Colaborativo",
    category: "mobile",
    images: [
      "/proyects/todoapp/menu.png",
      "/proyects/todoapp/list.png",
      "/proyects/todoapp/calendar.png",
    ],
    description:
        "Aplicación móvil para gestionar tareas con recordatorios y notificaciones automáticas, con sincronización en la nube para el acceso con múltiples dispositivos.",
    technologies: ["Kotlin", "Jeckpack Compose", "Firebase", "MaterialUI", "Git Hub"],
    demoUrl: "https://todoapp.luislh.dev/",
    codeUrl: "https://github.com/Jhan-Pierre/Todo-App",
    period: "Agosto 2024 - Octubre 2024",
    role: "Desarrollador Backend",
    features: [
      "Gestión de Tareas",
      "Sincronización en la Nube",
      "Personalización y Filtrado",
      "Rendimiento y Optimización",
    ],
  },
  {
    id: 3,
    title: "Historial Plus - Proyecto Colaborativo",
    category: "web",
    images: ["/placeholder.svg?height=300&width=600"],
    description:
        "Sistema web para la gestión de historiales médicos, permitiendo a los pacientes acceder a sus registros clínicos, incluyendo imágenes y documentos médicos subidos por los doctores.",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "MySql", "Clodflare R2" ,"Git Hub"],
    demoUrl: "#",
    codeUrl: "https://github.com/Jhan-Pierre/notes-app",
    period: "2022 - 2023",
    role: "Desarrollador Mobile",
    features: [
      "Sincronización entre dispositivos",
      "Notificaciones personalizables",
      "Modo oscuro y temas personalizables",
      "Funcionamiento offline con sincronización posterior",
    ],
  },
]

