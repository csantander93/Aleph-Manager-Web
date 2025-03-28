import React from 'react';
import './Clients.css';

// Importamos todas las imágenes directamente
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

// Mapeo de nombres de clientes a sus imágenes importadas
const clientImages = {
  assistcard,
  balanz,
  bancor,
  bcobacs,
  bcobica,
  bcocoinag,
  bcocolumbia,
  bcocomafi,
  bcocorp,
  bcocorrientes,
  bcodelsol,
  bcodino,
  bcoentrerios,
  bcoficohsa,
  bcogalicia,
  bcohipotecario,
  bcoicbc,
  bcoind,
  bcomacro,
  bcomariva,
  bcomeridian,
  bcomunicipal,
  bconacion,
  bcopat,
  bcopiano,
  bcorioja,
  bcoroela,
  bcosaenz,
  bcosanjuan,
  bcosantacruz,
  bcosantafe,
  bcoservfin,
  bcoservtrans,
  bcosucredito,
  bcotoyota,
  bcovalores,
  bibank,
  brubank,
  cajadevalores,
  carrefour,
  coelsa,
  coopeande,
  creditoregional,
  galiciamas,
  gire,
  interbank,
  mercantil,
  montemar,
  naranjax,
  panamericanenergy,
  reba,
  sancorseguros,
  uala,
  uilo
};

const Clients = () => {
  // No necesitamos duplicar los clientes manualmente
  const row1Clients = Object.keys(clientImages).slice(0, 15);
  const row2Clients = Object.keys(clientImages).slice(15, 30);
  const row3Clients = Object.keys(clientImages).slice(30);

  return (
    <section className="clients-section">
      <div className="clients-background">
        <div className="clients-background-gradient"></div>
      </div>
      
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">Nuestros Clientes</h2>
          <p className="clients-subtitle">Empresas que confían en nuestros servicios</p>
        </div>
        
        <div className="clients-scroller-container">
          {/* Fila 1 - Mueve a la izquierda */}
          <div className="clients-track clients-row-1">
            {[...row1Clients, ...row1Clients].map((cliente, index) => (
              <div key={`row1-${index}`} className="client-item">
                <img 
                  src={clientImages[cliente]} 
                  alt={cliente.replace('bco', 'banco ')}
                  className="client-logo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Error al cargar imagen: ${cliente}.png`);
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Fila 2 - Mueve a la derecha */}
          <div className="clients-track clients-row-2">
            {[...row2Clients, ...row2Clients].map((cliente, index) => (
              <div key={`row2-${index}`} className="client-item">
                <img 
                  src={clientImages[cliente]} 
                  alt={cliente.replace('bco', 'banco ')}
                  className="client-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Fila 3 - Mueve a la izquierda */}
          <div className="clients-track clients-row-3">
            {[...row3Clients, ...row3Clients].map((cliente, index) => (
              <div key={`row3-${index}`} className="client-item">
                <img 
                  src={clientImages[cliente]} 
                  alt={cliente.replace('bco', 'banco ')}
                  className="client-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;