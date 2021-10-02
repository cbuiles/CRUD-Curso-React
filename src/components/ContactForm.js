import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {};

const validationsForm = (form) => {};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          type="email"
          placeholder="Escribe tu email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
