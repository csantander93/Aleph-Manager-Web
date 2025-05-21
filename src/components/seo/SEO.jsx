import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "description": "Consultoría y software especializado en gestión de cumplimiento y normas ISO, GRC, PLAFT, continuidad y seguridad.",
    "url": "https://alephmanager.com",
    "logo": image,
    "sameAs": [
      "https://www.linkedin.com/showcase/aleph-manager/about/"
    ]
  };

  return (
    <Helmet>
      {/* Precarga la imagen del logo */}
      <link 
        rel="preload" 
        href="/assets/LOGO%20ALEPH%20FIJO%20v02.webp" 
        as="image"
        imagesrcset=""
        imagesizes="100vw"
        fetchpriority="high"
      />
      
      {/* Preconecta a dominios importantes si los usas */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/assets/Favicon Aleph 2020.webp" />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;