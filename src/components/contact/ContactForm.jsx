import React, { useState } from 'react';
import './ContactForm.css';
import logoAleph from '../../assets/LOGO ALEPH FIJO v02.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
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
  
      const response = await fetch('https://panel.alephmanager.com/API/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(postData)
      });
  
      const result = await response.json();
  
      if (result && result.status === 1) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Manejar error
        console.error('Error al enviar el mensaje:', result?.message || 'Error desconocido');
        alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error en la petición:', error);
      alert('Hubo un error al conectar con el servidor.');
    } finally {
      setIsSubmitting(false);
      
      // Ocultar el mensaje de éxito después de 5 segundos
      if (submitSuccess) {
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-background">
        <div className="contact-background-gradient-1"></div>
        <div className="contact-background-gradient-2"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">CONTACTO</h2>
          <p className="contact-subtitle">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>

        <div className="contact-row">
          <div className="form-container">
            {submitSuccess ? (
              <div className="success-message">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 4 12 14.01l-3-3" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4>¡Mensaje enviado!</h4>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="error-message">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div className="form-row">
                  <div className="floating-input">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="name">Nombre y Apellido</label>
                  </div>
                  
                  <div className="floating-input">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                
                <div className="floating-input">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    required 
                  />
                  <label htmlFor="subject">Asunto</label>
                </div>
                
                <div className="floating-input textarea-input">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="message">Mensaje</label>
                </div>
                
                <button 
                  type="submit" 
                  className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg className="submit-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="info-container">
            <img 
              src={logoAleph} 
              alt="Aleph Manager Logo" 
              className="info-logo"
            />
            <p className="info-text">
              Estamos a disposición para responder cualquier duda o consulta que pueda surgirle.
            </p>
            <p className="info-email">
              <a href="mailto:gerencia@alephmanager.com">gerencia@alephmanager.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;