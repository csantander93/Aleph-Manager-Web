import { Helmet } from "react-helmet-async";
import logoLcp from '../../assets/LOGO ALEPH FIJO v02.webp?as=webp&width=200&quality=80';
import bgImageMobile from '../../assets/intro-bg-mobile.webp?as=webp&width=600&quality=75';

const SEO = ({ title, description, keywords, image, url }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "description": description,
    "url": url,
    "logo": image,
    "sameAs": [
      "https://www.linkedin.com/showcase/aleph-manager/about/"
    ]
  };

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{`${title} | Aleph Manager`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      
      {/* Precarga de recursos críticos para mobile */}
      <link 
        rel="preload" 
        href={logoLcp} 
        as="image"
        fetchpriority="high"
        media="(max-width: 768px)"
      />
      <link 
        rel="preload" 
        href={bgImageMobile} 
        as="image"
        media="(max-width: 768px)"
      />
      
      {/* Precarga de fuentes - Corregido */}
      <link
        rel="preload"
        href="/fonts/your-font.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preconexión temprana para recursos externos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Open Graph / Twitter */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aleph Manager" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={`${title} - Aleph Manager`} />
      
      {/* Favicon optimizado */}
      <link rel="icon" href="/assets/favicon.ico" />
      <link rel="icon" href="/assets/favicon.webp" type="image/webp" />
      <link rel="apple-touch-icon" href="/assets/apple-touch-icon.webp" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preload de CSS crítico para mobile - Corregido */}
      <link 
        rel="preload" 
        href="/mobile-critical.css" 
        as="style"
        media="(max-width: 768px)"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>{`
        <link rel="stylesheet" href="/mobile-critical.css" media="(max-width: 768px)" />
      `}</noscript>
    </Helmet>
  );
};

export default SEO;