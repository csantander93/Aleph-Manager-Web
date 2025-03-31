import React from 'react';
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
import CounterGrid from '../animated-counter/CounterGrid';

// Mapeo de nombres de clientes a sus imágenes importadas
const clientImages = [
  bcosaenz, bcocorp, bcoind, bcopat, bcorioja, bcobica, bcodino, bcobacs, bcoficohsa, bcoentrerios, 
  bcosanjuan, bcosantacruz, bcosantafe, brubank, uilo, uala, coopeande, bcodelsol, naranjax, bibank, 
  bcocorrientes, bancor, bcovalores, bcomunicipal, bcosantiago, bcoservtrans, bcoroela, bcopiano, 
  bcotoyota, bcocomafi, coelsa, bcogalicia, bcohipotecario, cajadevalores, bcomariva, carrefour, 
  bcoservfin, bcocoinag, reba, bcomeridian, bcocolumbia, bconacion, montemar, bcoicbc, gire, 
  panamericanenergy, bcosucredito, bcojulio, assistcard, creditoregional, balanz, galiciamas, 
  bcomacro, interbank, mercantil, sancorseguros
];

const Clients = () => {
  // Dividimos las imágenes en 8 grupos de 7 (56 imágenes en total)
  const rows = [
    clientImages.slice(0, 7),
    clientImages.slice(7, 14),
    clientImages.slice(14, 21),
    clientImages.slice(21, 28),
    clientImages.slice(28, 35),
    clientImages.slice(35, 42),
    clientImages.slice(42, 49),
    clientImages.slice(49, 56)
  ];

  // Velocidades de animación diferentes para cada fila
  const animationDurations = [40, 45, 50, 55, 60, 65, 70, 75];

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

        <CounterGrid />
        
        <div className="clients-scroller-container">
          {rows.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`}
              className={`clients-track clients-row-${rowIndex + 1}`}
              style={{
                animationDuration: `${animationDurations[rowIndex]}s`
              }}
            >
              {[...row, ...row].map((image, index) => (
                <div key={`row-${rowIndex}-${index}`} className="client-item">
                  <img 
                    src={image} 
                    alt={`Client ${index}`}
                    className="client-logo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.error(`Error al cargar imagen: ${index}`);
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;