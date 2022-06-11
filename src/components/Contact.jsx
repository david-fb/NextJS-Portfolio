import styles from '@styles/Contact.module.scss';
import { useRef, useState } from 'react';
import Footer from '@components/Footer';
import axios from 'axios';
import SendMessageLoader from './SendMessageLoader';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingMessage, setIsSendingMessage] = useState(true);
  const form = useRef();
  const closeModal = () => {
    setTimeout(() => {
      setIsLoading(false);
      setIsSendingMessage(true);
    }, 2000);
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(form.current);
    const mail = {
      data: {
        email: formData.get('user_email'),
        name: formData.get('user_name'),
        message: formData.get('message'),
      },
    };
    try {
      const response = await axios.post('/api/contact', mail);
      if (response.status === 200) {
        setIsSendingMessage(false);
        closeModal();
        form.current.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className={`PageSection ${styles.container}`} id="Contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Get in touch!</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input className={styles.inputText} type="text" name="user_name" placeholder="Name" />

          <input className={styles.inputText} type="email" name="user_email" placeholder="Email Address" />

          <textarea className={styles.textArea} name="message" placeholder="Your message" />
          <button className={`primary-button ${styles.button}`} type="submit">
            Send Message
          </button>
          {isLoading && <SendMessageLoader isSending={isSendingMessage} />}
        </form>
      </div>
      <Footer />
    </section>
  );
}
