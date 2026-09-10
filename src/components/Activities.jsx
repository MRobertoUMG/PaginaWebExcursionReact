import { useState } from 'react';
import './Activities.css';

const activities = [
    'Senderismo por el bosque',
    'Visita a la cascada',
    'Paseo en bicicleta',
    'Observacion de aves',
    'Almuerzo al aire libre',
];

export default function Activities() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredActivities = activities.filter((activity) =>
        activity.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="excursion-activities" id="actividades" aria-labelledby="activities-title">
            <h2 id="activities-title">Actividades</h2>
            <p className="activities-intro">
                Explora todo lo que puedes disfrutar durante la excursión.
            </p>
            <label className="activities-search-label" htmlFor="activity-search">
                Search activities
            </label>
            <input
                id="activity-search"
                className="activities-search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by activity name"
                aria-label="Search activities"
            />
            {filteredActivities.length > 0 ? (
                <ul className="activities-list">
                    {filteredActivities.map((activity) => (
                        <li className="activity-item" key={activity}>{activity}</li>
                    ))}
                </ul>
            ) : (
                <p className="activities-empty">No activities match your search.</p>
            )}
        </section>
    );
}