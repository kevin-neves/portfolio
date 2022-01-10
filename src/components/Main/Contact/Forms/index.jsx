import { useState } from 'react';
import emailjs from 'emailjs-com';

import './style.css';

const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && isValidEmail(email) && message) {
      const serviceId = 'service_gko6nro';
      const templateId = 'template_e5mmomo';
      const userId = 'user_DKurr0p8wSOSsAHVOjvYk';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields or verify if you entered a valid email');
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <form>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      ></textarea>
      <button type="button" onClick={submit}>
        Contact Me
      </button>
      <span className={!emailSent ? 'invisible' : null}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </form>
  );
};

export default Forms;
