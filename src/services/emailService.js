export const sendContactEmail = async (formData) => {
  const api_key = process.env.REACT_APP_EMAIL_API_KEY;
  const to = process.env.REACT_APP_EMAIL_TO;
  
  const content = `
    <p><strong>Nombre:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${formData.message}</p>
  `;

  try {
    const response = await fetch('https://panel.alephmanager.com/API/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        api_key,
        to,
        content,
        subject: formData.subject,
        base_url: window.location.origin
      })
    });

    return await response.json();
  } catch (error) {
    console.error('Error en la petición:', error);
    throw error;
  }
};