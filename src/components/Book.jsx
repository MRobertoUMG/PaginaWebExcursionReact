import { useState } from 'react';
import './Book.css';

export default function Book() {
    const [name, setName] = useState('');
    const [people, setPeople] = useState('');
    const [errors, setErrors] = useState({});
    const [confirmation, setConfirmation] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const nextErrors = {};
        const trimmedName = name.trim();
        const peopleCount = Number(people);

        if (!trimmedName) {
            nextErrors.name = 'El nombre completo es obligatorio.';
        }

        if (!people || !Number.isInteger(peopleCount) || peopleCount <= 0) {
            nextErrors.people = 'Ingresa un número de personas mayor que cero.';
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length === 0) {
            setConfirmation(
                `¡Reserva confirmada, ${trimmedName}! Hemos reservado ${peopleCount} ${peopleCount === 1 ? 'persona' : 'personas'} para la excursión.`
            );
        } else {
            setConfirmation('');
        }
    }

    return (
        <section className="excursion-book" id="reservacion" aria-labelledby="book-title">
            <h2 id="book-title">Reservación</h2>
            <p className="book-intro">
                Completa el siguiente formulario para reservar tu lugar en la excursión.
            </p>
            <form className="book-form" aria-label="Formulario de reservación" onSubmit={handleSubmit} noValidate>
                <label htmlFor="booking-name">Nombre completo:</label>
                <input
                    type="text"
                    id="booking-name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'booking-name-error' : undefined}
                />
                {errors.name && <p className="booking-error" id="booking-name-error" role="alert">{errors.name}</p>}

                <label htmlFor="booking-people">Número de personas:</label>
                <input
                    type="number"
                    id="booking-people"
                    name="people"
                    min="1"
                    step="1"
                    value={people}
                    onChange={(event) => setPeople(event.target.value)}
                    aria-invalid={Boolean(errors.people)}
                    aria-describedby={errors.people ? 'booking-people-error' : undefined}
                />
                {errors.people && <p className="booking-error" id="booking-people-error" role="alert">{errors.people}</p>}

                <button type="submit">Confirmar reservación</button>
            </form>
            {confirmation && <p className="booking-confirmation" role="status">{confirmation}</p>}
        </section>
    )
}