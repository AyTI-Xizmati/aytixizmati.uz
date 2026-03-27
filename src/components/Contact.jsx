import { useState } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzY4dcLVdK9fgpazoCmgbX8ZHmdEaWwd17E-mOTbwBUSFSMmU9O9e9dy5MIUeee2RkVFw/exec';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    username: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', visible: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'name' && value.length > 0) {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      let cleaned = digits.startsWith('998') ? digits.slice(3) : digits;
      cleaned = cleaned.slice(0, 9);
      if (cleaned.length === 0) updatedValue = '+998 ';
      else if (cleaned.length <= 2) updatedValue = `+998 ${cleaned}`;
      else if (cleaned.length <= 5) updatedValue = `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2)}`;
      else if (cleaned.length <= 7) updatedValue = `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
      else updatedValue = `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7)}`;
    }

    if (name === 'username') {
      const cleaned = value.replace(/@/g, '');
      updatedValue = cleaned ? `@${cleaned}` : '@';
    }

    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  const handlePhoneFocus = () => {
    if (!formData.phone) {
      setFormData((prev) => ({ ...prev, phone: '+998 ' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 2 || formData.phone.replace(/\D/g, '').length !== 12) {
      setToast({ message: contact.error, type: 'error', visible: true });
      setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3000);
      return;
    }

    setLoading(true);
    try {
      const phoneDigitsOnly = formData.phone.replace(/\D/g, '').slice(3);
      const phoneFullFormat = formData.phone.replace(/\s/g, '');
      const body = new URLSearchParams({
        name: formData.name,
        phone: phoneDigitsOnly,
        phoneDisplay: phoneFullFormat,
        username: formData.username,
        message: formData.message,
      }).toString();

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      setToast({ message: contact.success, type: 'success', visible: true });
      setFormData({ name: '', phone: '', username: '', message: '' });
      setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 4000);
    } catch {
      setToast({ message: contact.error, type: 'error', visible: true });
      setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast.visible && (
        <div className={`toast-notification toast-${toast.type}`}>{toast.message}</div>
      )}
      <section className="contact" id="aloqa">
        <div className="container">
          <h2 className="section-title">{contact.title}</h2>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">{contact.form.name}</label>
                <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">{contact.form.phone}</label>
                <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} onFocus={handlePhoneFocus} required placeholder="+998 XX XXX XX XX" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-username">{contact.form.username}</label>
                <input type="text" id="contact-username" name="username" value={formData.username} onChange={handleChange} placeholder="@username" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">{contact.form.message}</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows="3" required placeholder={contact.form.messagePlaceholder} />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? contact.form.submitting : contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
