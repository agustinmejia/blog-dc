interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tu Restaurante Online',
    description: `Aplicación web para la administración de restaurantes desarrollada en Laravel y Reactjs.`,
    imgSrc: '/static/images/projects/turestauranteonline.png',
    href: 'https://turestaurante.online/',
  },
  {
    title: 'FarmaStore',
    description: `Sistema web para la administración de farmacia y sus sucursales desarrollada en Laravel usando el paquete TCG/Voyager.`,
    imgSrc: '/static/images/projects/farmastore.png',
    href: 'https://farmastore.desarrollocreativo.dev/demo',
  },
]

export default projectsData
