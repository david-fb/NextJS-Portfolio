import imgEnvelope from '@images/envelope.png';
import styles from '@styles/Contact.module.scss';
import { useRef } from 'react';
import axios from 'axios';

export default function Contact() {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const mail = {
      data: {
        email: formData.get('user_email'),
        name: formData.get('user_name'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      },
    };
    const response = await axios.post('/api/contact', mail);
    console.log(response.status);
    if (response.status === 200) {
      console.log('Email sent');
    }
  };
  return (
    <section className={`PageSection ${styles.Contact}`} id="Contact">
      <h2 className={styles['Contact__title']}>Contact Me</h2>
      <div className={styles['Contact__content']}>
        <img src={imgEnvelope.src} alt="envelope" />
        <form ref={form} onSubmit={sendEmail} className={styles['Contact__form']}>
          <input className={styles['Form__input-text']} type="text" name="user_name" placeholder="Name" />

          <input className={styles['Form__input-text']} type="text" name="user_email" placeholder="Email Address" />

          <textarea className={styles['Form__textarea']} name="message" placeholder="Your message" />
          <input className={styles['Form__button']} type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
}
