import React from "react";
import { required } from "../../validators/validators";
import { Input, Textarea } from "../FormControls/FormControl";
import { Field, reduxForm } from "redux-form";

const ParamsTableForm = ({ profile, ...props }) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="params_table_form_lfa">
        <Field name={"lookingForAJob"} component={Input} type={"checkbox"} />
        I'm looking for a gob
      </div>
      <div>
        <Field
          name={"lookingForAJobDescription"}
          component={Textarea}
          validate={required}
          placeholder={"Skills"}
        />
      </div>
      <div>
        <Field
          name={"aboutMe"}
          component={Textarea}
          validate={required}
          placeholder={"About Me"}
        />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};
const ParamsTableReduxForm = reduxForm({ form: "params_table" })(
  ParamsTableForm
);
export default ParamsTableReduxForm;
