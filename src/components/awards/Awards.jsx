import React from 'react';
import { useTranslation } from 'react-i18next';
import './Awards.css';

// Importar imágenes
import bpEmprende from '../../assets/img-awards/patagonia.png';
import bindInnovA from '../../assets/img-awards/bind.png';

const Awards = () => {
  const { t } = useTranslation();

  const awardsData = [
    {
      id: 1,
      image: bpEmprende,
      title: t('awards.award1.title'),
      subtitle: t('awards.award1.subtitle'),
      year: t('awards.award1.year'),
      awarder: t('awards.award1.awarder')
    },
    {
      id: 2,
      image: bindInnovA,
      title: t('awards.award2.title'),
      subtitle: t('awards.award2.subtitle'),
      year: t('awards.award2.year'),
      awarder: t('awards.award2.awarder')
    }
  ];

  // Datos estructurados para premios
  const awardsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "award": awardsData.map(award => ({
      "@type": "Award",
      "name": award.title,
      "awardedBy": award.awarder,
      "dateReceived": award.year,
      "description": award.subtitle
    }))
  };

  return (
    <section 
      id="premios" 
      className="awards-section"
      aria-labelledby="awards-heading"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Datos estructurados para premios */}
      <script type="application/ld+json">
        {JSON.stringify(awardsStructuredData)}
      </script>

      <div className="awards-background" aria-hidden="true">
        {/* Fondo decorativo - marcado como aria-hidden */}
      </div>
      
      <div className="awards-container">
        <div className="awards-header">
          <h2 id="awards-heading" className="awards-title">
            {t('awards.title')}
          </h2>
          <p className="awards-subtitle">
            {t('awards.subtitle')}
          </p>
        </div>
        
        <div className="awards-grid" role="list" aria-label={t('awards.ariaAwardList')}>
          {awardsData.map((award) => (
            <div 
              key={award.id} 
              className="award-card"
              role="listitem"
              itemScope
              itemType="https://schema.org/Award"
            >
              <div className="award-image-container">
                <img 
                  src={award.image} 
                  alt={t('awards.logoAlt', { awardTitle: award.title })} 
                  className={`award-image ${award.subtitle.toLowerCase().replace(/\s+/g, '-')}`} 
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(t('awards.imageError', { awardTitle: award.title }));
                  }}
                />
                <div className="award-year" itemProp="dateReceived">{award.year}</div>
              </div>
              <div className="award-content">
                <h3 className="award-title" itemProp="name">{award.title}</h3>
                <p className="award-subtitle" itemProp="description">{award.subtitle}</p>
                <meta itemProp="awardedBy" content={award.awarder} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;