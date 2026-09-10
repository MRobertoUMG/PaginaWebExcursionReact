import { useState } from 'react'
import './Cotizador.css'

const packages = [
  { id: 'basico', name: 'Tour básico', price: 350 },
  { id: 'aventura', name: 'Tour aventura', price: 550 },
  { id: 'premium', name: 'Tour premium', price: 800 },
]

const additionalServices = [
  { id: 'transporte', name: 'Transporte incluido', price: 100 },
  { id: 'alimentacion', name: 'Alimentación completa', price: 150 },
  { id: 'guia', name: 'Guía especializado', price: 75 },
]

const formatCurrency = (amount) =>
  new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(amount)

export default function Cotizador() {
  const [attendees, setAttendees] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState(packages[0].id)
  const [selectedServices, setSelectedServices] = useState([])

  const currentPackage = packages.find((travelPackage) => travelPackage.id === selectedPackage)
  const servicesTotal = additionalServices
    .filter((service) => selectedServices.includes(service.id))
    .reduce((total, service) => total + service.price, 0)
  const pricePerAttendee = currentPackage.price + servicesTotal
  const total = attendees * pricePerAttendee

  const toggleService = (serviceId) => {
    setSelectedServices((currentServices) =>
      currentServices.includes(serviceId)
        ? currentServices.filter((id) => id !== serviceId)
        : [...currentServices, serviceId],
    )
  }

  return (
    <section id="cotizar" className="excursion-cotizador" aria-labelledby="cotizador-title">
      <h2 id="cotizador-title">Cotizador de presupuesto</h2>
      <p className="cotizador-intro">
        Configura tu excursión a Semuc Champey y consulta un precio estimado en tiempo real.
      </p>

      <div className="cotizador-layout">
        <form className="cotizador-form">
          <label htmlFor="attendees">Número de asistentes</label>
          <input
            id="attendees"
            type="number"
            min="1"
            max="50"
            value={attendees}
            onChange={(event) => setAttendees(Math.max(1, Number(event.target.value) || 1))}
          />

          <label htmlFor="package">Tipo de paquete o tour</label>
          <select id="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)}>
            {packages.map((travelPackage) => (
              <option value={travelPackage.id} key={travelPackage.id}>
                {travelPackage.name} - {formatCurrency(travelPackage.price)} por persona
              </option>
            ))}
          </select>

          <fieldset>
            <legend>Servicios adicionales</legend>
            {additionalServices.map((service) => (
              <label className="service-option" htmlFor={service.id} key={service.id}>
                <input
                  id={service.id}
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => toggleService(service.id)}
                />
                <span>{service.name}</span>
                <strong>+{formatCurrency(service.price)}</strong>
              </label>
            ))}
          </fieldset>
        </form>

        <aside className="cotizador-summary" aria-live="polite">
          <span className="summary-label">Total estimado</span>
          <strong className="summary-total">{formatCurrency(total)}</strong>
          <span className="summary-detail">
            {attendees} {attendees === 1 ? 'asistente' : 'asistentes'} · {formatCurrency(pricePerAttendee)} por persona
          </span>
        </aside>
      </div>
    </section>
  )
}