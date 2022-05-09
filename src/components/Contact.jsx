import styles from '@styles/Contact.module.scss';
import { useRef } from 'react';
import Footer from '@components/Footer';
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
        message: formData.get('message'),
      },
    };
    const response = await axios.post('/api/contact', mail);
    if (response.status === 200) {
      console.log('Email sent');
    }
  };
  return (
    <section className={`PageSection ${styles.Contact}`} id="Contact">
      <div className={styles['Contact__content']}>
        <h2 className={styles['Contact__title']}>Get in touch!</h2>
        <form ref={form} onSubmit={sendEmail} className={styles['Contact__form']}>
          <input className={styles['Form__input-text']} type="text" name="user_name" placeholder="Name" />

          <input className={styles['Form__input-text']} type="email" name="user_email" placeholder="Email Address" />

          <textarea className={styles['Form__textarea']} name="message" placeholder="Your message" />
          <input className={styles['Form__button']} type="submit" value="Send Message" />
        </form>
      </div>
      <Footer />
    </section>
  );
}
