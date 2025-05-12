export const sendContactEmail = async (formData) => {
  const api_key = "f3b28d96-2cf1-4b6c-9c6e-8bcd92b7e77d"; // Tu API key fija
  const to = "gerencia@alephmanager.com"; // Correo destino
  const subject = formData.subject;
  
  // Construye el contenido del mensaje
  const content = `
    <p><strong>Nombre:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${formData.message}</p>
  `;

  const postData = {
    api_key: api_key,
    to: to,
    content: content,
    subject: subject,
    base_url: window.location.origin // Equivalente a base_url() en PHP
  };

  try {
    const response = await fetch('https://panel.alephmanager.com/API/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(postData)
    });

    const result = await response.json();
    return result;
    
  } catch (error) {
    console.error('Error en la petición:', error);
    throw error;
  }
};