import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contacto.css";

export const Contacto = () => {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kdsixgh', 'template_ef50ld9', form.current, 'mS7bs5xcWBI5CowtR')
        .then((result) => {
            console.log(result.text);
            setMessage('Email enviado correctamente!');
            
        }, (error) => {
            console.log(error.text);
            setMessage('Error al enviar email!');
        });
    };

    return (
        <div id="contact" className="contacto">
            <form ref={form} onSubmit={sendEmail}>
                <h1>Contacto</h1>
                <label htmlFor="nombre">Nombre:</label>
                <input className="nombre" type="text" name="user_name" />
                <label htmlFor="correo">Correo:</label>
                <input className="correo" type="email" name="user_email" />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea className="mensaje" name="message" />
                <input type="submit" className='enviar' value="Enviar" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
