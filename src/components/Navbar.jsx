import './Navbar.css'

const navigationItems = [
    { label: 'Descripción del Lugar', href: '#descripcion' },
    { label: 'Galería de Imágenes', href: '#galeria' },
    { label: 'Cotizar Excursión', href: '#cotizar' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Reservacion', href: '#reservacion' },
    { label: 'Reseñas', href: '#reseñas' },
]

export default function Navbar() {
    return (
        <header className="excursion-header">
            <div className="container-fluid px-3 px-lg-4">
                <a className="navbar-brand excursion-title" href="#inicio">
                    Excursión Aventura en Semuc Champey
                </a>

                <div className="excursion-divider" />

                <nav className="navbar navbar-expand-lg p-0" aria-label="Navegación principal">
                    <button
                        className="navbar-toggler excursion-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#excursion-navigation"
                        aria-controls="excursion-navigation"
                        aria-expanded="false"
                        aria-label="Abrir menú de navegación"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="excursion-navigation">
                        <ul className="navbar-nav w-100 justify-content-between align-items-lg-center">
                            {navigationItems.map((item) => (
                                <li className="nav-item" key={item.href}>
                                    <a className="nav-link excursion-link" href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}