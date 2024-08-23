import React from "react";

import { useForm, ValidationError } from "@formspree/react";

const FooterForm = () => {
  const [state, handleSubmit] = useForm("mvgpwqeb");
  if (state.succeeded) {
    return <p className="thanks">Thanks for subscribing!</p>;
  }
  return (
    <form onSubmit={handleSubmit} method="POST" className="footer_form">
      <div className="input_holder">
        <input type="text" name="Name" id="marketing_name" placeholder="Name" />
      </div>
      <div className="input_holder">
        <input
          type="text"
          name="E-mail"
          id="marketing_email"
          placeholder="Email Address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <button id="marketing_submit" type="submit" disabled={state.submitting}>
        subscribe now
      </button>
    </form>
  );
};

export default FooterForm;
