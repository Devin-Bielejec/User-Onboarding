import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting, addUser }) {
    return (
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="name" name="name" placeholder="Name"/>
            </div>

            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" />
            </div>

            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password"/>
            </div>

            <label>
                <Field type="checkbox" name="tos" checked={values.tos}/>
                Accept TOS
            </label>

            <button disabled={isSubmitting}>Submit</button>
        </Form>
    );
};

const FormikForm = withFormik({
    mapPropsToValues({name, email, password, tos, addUser }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
            addUser: addUser || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
        .min(1, "Name needs to be a least 1 character long")
        .required("Name is required"),
        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
        password: Yup.string()
        .min(16, "Password needs to be at least 16 characters long")
        .required("Password is required")
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        axios.post("https://reqres.in/api/users", values)
        .then(res => {
            console.log(res);
            console.log(values.addUser(res.data));
        })
        .catch(err => console.log("ERROR", err));
    }
})(LoginForm);

export default FormikForm;