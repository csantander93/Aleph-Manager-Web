import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';
import logoAleph from '../../assets/LOGO ALEPH FIJO v02.webp';
import { sendContactEmail } from '../../services/emailService';

const ContactForm = () => {
  const { t } = useTranslation();
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
      const result = await sendContactEmail(formData);
  
      if (result && result.status === 1) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error(t('contact.formSubmitError'), result?.message || t('contact.unknownError'));
        setErrorMessage(t('contact.submitErrorMessage'));
      }
    } catch (error) {
      console.error(t('contact.error'), error);
      setErrorMessage(t('contact.serverErrorMessage'));
    } finally {
      setIsSubmitting(false);
      
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
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-row">
          <div className="form-container">
            {submitSuccess ? (
              <div className="success-message">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 4 12 14.01l-3-3" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4>{t('contact.successTitle')}</h4>
                <p>{t('contact.successMessage')}</p>
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
                    <label htmlFor="name">{t('contact.nameLabel')}</label>
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
                    <label htmlFor="email">{t('contact.emailLabel')}</label>
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
                  <label htmlFor="subject">{t('contact.subjectLabel')}</label>
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
                  <label htmlFor="message">{t('contact.messageLabel')}</label>
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
                      {t('contact.submitButton')}
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
              alt={t('contact.logoAlt')} 
              className="info-logo"
            />
            <p className="info-text">
              {t('contact.infoText')}
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