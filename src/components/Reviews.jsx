import { useState } from 'react';
import './Reviews.css';

const visitorNames = [
    'María López',
    'Carlos Méndez',
    'Sofía Ramírez',
    'Jorge Castillo',
    'Ana Pérez',
];

const testimonials = [
    'La excursión estuvo muy bien organizada y los paisajes fueron increíbles.',
    'Disfrutamos cada momento. El equipo fue amable y muy atento durante todo el recorrido.',
    'Una experiencia inolvidable para compartir con la familia y conectar con la naturaleza.',
    'La actividad superó mis expectativas. Definitivamente volvería a participar.',
    'Todo fue puntual, seguro y divertido. Recomiendo esta excursión por completo.',
];

export default function Reviews() {
    const [currentReview, setCurrentReview] = useState(0);

    function showNextReview() {
        setCurrentReview((reviewIndex) => (reviewIndex + 1) % visitorNames.length);
    }

    return (
        <section className="excursion-reviews" id="reseñas" aria-labelledby="reviews-title">
            <h2 id="reviews-title">Opiniones de nuestros visitantes</h2>
            <blockquote className="review-card">
                <p className="review-testimonial">“{testimonials[currentReview]}”</p>
                <footer className="review-author">{visitorNames[currentReview]}</footer>
            </blockquote>
            <button className="review-button" type="button" onClick={showNextReview}>
                Ver otra opinión
            </button>
        </section>
    )
}