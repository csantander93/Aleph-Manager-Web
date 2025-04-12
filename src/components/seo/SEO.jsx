import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aleph Manager",
    "description": "Consultoría y software especializado en gestión de cumplimiento y normas ISO, GRC, PLAFT, continuidad y seguridad.",
    "url": "https://alephmanager.com", // cambiá esto cuando tengas dominio
    "logo": image, // podés usar la misma imagen del SEO general
    "sameAs": [
      "https://www.linkedin.com/showcase/aleph-manager/about/" // sumá redes si querés
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Aleph Manager" />
      <meta name="publisher" content="Aleph Manager" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/Favicon Aleph 2020.png" />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>

  );
};

export default SEO;
