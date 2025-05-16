import React from 'react';
import { useTranslation } from 'react-i18next';
import './Clients.css';

// Importamos todas las imágenes directamente (se mantienen igual)
import assistcard from '../../assets/img-clients/assistcard.png';
import balanz from '../../assets/img-clients/balanz.png';
import bancor from '../../assets/img-clients/bancor.png';
import bcobacs from '../../assets/img-clients/bcobacs.png';
import bcobica from '../../assets/img-clients/bcobica.png';
import bcocoinag from '../../assets/img-clients/bcocoinag.png';
import bcocolumbia from '../../assets/img-clients/bcocolumbia.png';
import bcocomafi from '../../assets/img-clients/bcocomafi.png';
import bcocorp from '../../assets/img-clients/bcocorp.png';
import bcocorrientes from '../../assets/img-clients/bcocorrientes.png';
import bcodelsol from '../../assets/img-clients/bcodelsol.png';
import bcodino from '../../assets/img-clients/bcodino.png';
import bcoentrerios from '../../assets/img-clients/bcoentrerios.png';
import bcojulio from '../../assets/img-clients/bcojulio.png';
import bcoficohsa from '../../assets/img-clients/bcoficohsa.png';
import bcogalicia from '../../assets/img-clients/bcogalicia.png';
import bcohipotecario from '../../assets/img-clients/bcohipotecario.png';
import bcoicbc from '../../assets/img-clients/bcoicbc.png';
import bcoind from '../../assets/img-clients/bcoind.png';
import bcomacro from '../../assets/img-clients/bcomacro.png';
import bcomariva from '../../assets/img-clients/bcomariva.png';
import bcomeridian from '../../assets/img-clients/bcomeridian.png';
import bcomunicipal from '../../assets/img-clients/bcomunicipal.png';
import bconacion from '../../assets/img-clients/bconacion.png';
import bcopat from '../../assets/img-clients/bcopat.png';
import bcopiano from '../../assets/img-clients/bcopiano.png';
import bcorioja from '../../assets/img-clients/bcorioja.png';
import bcoroela from '../../assets/img-clients/bcoroela.png';
import bcosaenz from '../../assets/img-clients/bcosaenz.png';
import bcosanjuan from '../../assets/img-clients/bcosanjuan.png';
import bcosantacruz from '../../assets/img-clients/bcosantacruz.png';
import bcosantafe from '../../assets/img-clients/bcosantafe.png';
import bcosantiago from '../../assets/img-clients/bcosantiago.png';
import bcoservfin from '../../assets/img-clients/bcoservfin.png';
import bcoservtrans from '../../assets/img-clients/bcoservtrans.png';
import bcosucredito from '../../assets/img-clients/bcosucredito.png';
import bcotoyota from '../../assets/img-clients/bcotoyota.png';
import bcovalores from '../../assets/img-clients/bcovalores.png';
import bibank from '../../assets/img-clients/bibank.png';
import brubank from '../../assets/img-clients/brubank.png';
import cajadevalores from '../../assets/img-clients/cajadevalores.png';
import carrefour from '../../assets/img-clients/carrefour.png';
import coelsa from '../../assets/img-clients/coelsa.png';
import coopeande from '../../assets/img-clients/coopeande.png';
import creditoregional from '../../assets/img-clients/creditoregional.png';
import galiciamas from '../../assets/img-clients/galiciamas.png';
import gire from '../../assets/img-clients/gire.png';
import interbank from '../../assets/img-clients/interbank.png';
import mercantil from '../../assets/img-clients/mercantil.png';
import montemar from '../../assets/img-clients/montemar.png';
import naranjax from '../../assets/img-clients/naranjax.png';
import panamericanenergy from '../../assets/img-clients/panamericanenergy.png';
import reba from '../../assets/img-clients/reba.png';
import sancorseguros from '../../assets/img-clients/sancorseguros.png';
import uala from '../../assets/img-clients/uala.png';
import uilo from '../../assets/img-clients/uilo.png';
import AnimatedCounter from '../animated-counter/AnimatedCounter';

// Mapeo de nombres de clientes a sus imágenes importadas
const clientImages = [
  bcosaenz, bcocorp, bcoind, bcopat, bcorioja, bcobica, bcodino, bcobacs, bcoentrerios, 
  bcosanjuan, bcosantacruz, bcosantafe, brubank, uilo, uala, bcodelsol, naranjax, bibank, 
  bcocorrientes, bancor, bcovalores, bcomunicipal, bcosantiago, bcoservtrans, bcoroela, bcopiano, 
  bcotoyota, bcocomafi, coelsa, bcogalicia, bcohipotecario, cajadevalores, bcomariva, carrefour, 
  bcoservfin, bcocoinag, reba, bcomeridian, bcocolumbia, bconacion, montemar, bcoicbc, gire, 
  panamericanenergy, bcosucredito, bcojulio, assistcard, creditoregional, balanz, galiciamas, 
  bcomacro, interbank, sancorseguros
];

const clientNames = [
  "Banco Saenz", "Banco de Córdoba (Corporativo)", "Banco Industrial", "Banco Patagonia",
  "Banco Rioja", "Banco Bica", "Banco Dino", "Banco BACS", "Banco Entre Ríos",
  "Banco San Juan", "Banco Santa Cruz", "Banco Santa Fe", "Brubank", "Uilo", "Ualá",
  "Banco del Sol", "Naranja X", "BIBANK", "Banco de Corrientes", "Bancor", "Banco de Valores",
  "Banco Municipal", "Banco Santiago del Estero", "Servicios de Transporte", "Banco Roela",
  "Banco Piano", "Toyota Compañía Financiera", "Banco Comafi", "COELSA", "Banco Galicia",
  "Banco Hipotecario", "Caja de Valores", "Banco Mariva", "Carrefour Servicios Financieros",
  "Banco Coinag", "Reba", "Banco Meridian", "Banco Columbia", "Banco Nación", "Montemar",
  "ICBC", "Gire", "Pan American Energy", "Credicoop Sucrédito", "Banco Julio", "Assist Card",
  "Crédito Regional", "Balanz", "Galicia Más", "Banco Macro", "Interbank", "Sancor Seguros"
];

const Clients = () => {
  const { t } = useTranslation();
  
  // Dividimos las imágenes en filas según el dispositivo
  const desktopRows = [
    clientImages.slice(0, 13),
    clientImages.slice(13, 26),
    clientImages.slice(26, 39),
    clientImages.slice(39, 53),
  ];

  // Para móviles: creamos filas de exactamente 3 imágenes
  const mobileRows = [];
  for (let i = 0; i < clientImages.length; i += 3) {
    mobileRows.push(clientImages.slice(i, i + 3));
  }

  // Datos para los nuevos contadores
  const additionalCounters = [
    { country: t('clients.countries.colombia'), image: uala, value: 1 },
    { country: t('clients.countries.costaRica'), image: coopeande, value: 1 },
    { country: t('clients.countries.honduras'), image: bcoficohsa, value: 1 },
    { country: t('clients.countries.nicaragua'), image: bcoficohsa, value: 1 },
    { country: t('clients.countries.panama'), image: mercantil, value: 1 }
  ];

  const clientsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "client": clientNames.map((name, index) => ({
      "@type": "Organization",
      "name": name,
      "image": clientImages[index]
    }))
  };

  return (
    <section 
      id="clientes" 
      className="clients-section"
      aria-labelledby="clients-heading"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Datos estructurados para clientes */}
      <script type="application/ld+json">
        {JSON.stringify(clientsStructuredData)}
      </script>

      <div className="clients-background" aria-hidden="true">
        <div className="clients-background-gradient"></div>
      </div>
      
      <div className="clients-container">
        <div className="clients-header">
          <h2 id="clients-heading" className="clients-title">
            {t('clients.title')}
          </h2>
          <p className="clients-subtitle">
            {t('clients.subtitle')}
          </p>
        </div>

        <div className="clients-counter-container">
          <AnimatedCounter 
            targetValue={53} 
            label={t('clients.countries.argentina')} 
            delay={0.3}
            aria-label={`53 ${t('clients.ariaClientsIn')} ${t('clients.countries.argentina')}`}
          />
        </div>
        
        <div className="clients-static-grid desktop-version" role="list" aria-label={t('clients.ariaClientList')}>
          {desktopRows.map((row, rowIndex) => (
            <div key={`desktop-row-${rowIndex}`} className="clients-static-row" role="listitem">
              {row.map((image, index) => {
                const clientIndex = rowIndex * 13 + index;
                const clientName = clientNames[clientIndex] || t('clients.clientGeneric');
                return (
                  <div 
                    key={`desktop-row-${rowIndex}-${index}`} 
                    className="client-item"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <img 
                      src={image} 
                      alt={t('clients.logoAlt', { clientName })}
                      className="client-logo"
                      loading="lazy"
                      itemProp="logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error(`${t('clients.imageError')}: ${clientName}`);
                      }}
                    />
                    <meta itemProp="name" content={clientName} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Versión para móvil */}
        <div className="clients-static-grid mobile-version" role="list" aria-label={t('clients.ariaClientList')}>
          {mobileRows.map((row, rowIndex) => (
            <div key={`mobile-row-${rowIndex}`} className="clients-static-row" role="listitem">
              {row.map((image, index) => {
                const clientIndex = rowIndex * 4 + index;
                const clientName = clientNames[clientIndex] || t('clients.clientGeneric');
                return (
                  <div 
                    key={`mobile-row-${rowIndex}-${index}`} 
                    className="client-item"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <img 
                      src={image} 
                      alt={t('clients.logoAlt', { clientName })}
                      className="client-logo"
                      loading="lazy"
                      itemProp="logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error(`${t('clients.imageError')}: ${clientName}`);
                      }}
                    />
                    <meta itemProp="name" content={clientName} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
          
        {/* Sección de contadores adicionales */}
        <div 
          className="additional-counters-container"
          aria-label={t('clients.ariaInternationalClients')}
        >
          <div className="additional-counters-grid" role="list">
            {additionalCounters.map((item, index) => (
              <div 
                key={index} 
                className="additional-counter-item"
                role="listitem"
                itemScope
                itemType="https://schema.org/Country"
              >
                <AnimatedCounter 
                  targetValue={item.value} 
                  label={item.country}
                  delay={0.3 + (index * 0.1)}
                  aria-label={`${item.value} ${t('clients.ariaClientIn')} ${item.country}`}
                />
                <div className="client-item">
                  <img 
                    src={item.image} 
                    alt={t('clients.logoAltCountry', { country: item.country })}
                    className="client-logo" 
                    loading="lazy"
                    itemProp="image"
                  />
                  <meta itemProp="name" content={item.country} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;