import React, { useState,useRef } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Connexion.css'

export default function Inscription({ setFormulaire }) {

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Mot de passe nécessaire')
            .min(6, 'Le mot de passe est trop court')
            .max(30, 'Le mot de passe est trop long'),

        confirmPassword: Yup.string()
            .required('confirmer le mot de passe')
            .oneOf([Yup.ref('password')], 'Le mot de passe ne correspond pas')
            
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = data => {

        alert(data);
    }

    return (
        <div className="FormDiv">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input {...register("Nom")} type="text" className={`form-control ${errors.Nom ? 'is-invalid' : ''}`} id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Nom de l'enfant</label>
                </div>

                <div className="form-floating mb-3">
                    <input {...register("Email")} type="email" className={`form-control ${errors.Email ? 'is-invalid' : ''}`} id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input {...register("password")} maxlength="30" minlength="6" type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Mot de passe" required />
                    <label htmlFor="floatingInput">Mot de passe</label>
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-floating mb-3">
                    <input {...register("confirmPassword")} maxlength="30" minlength="6" type="password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Mot de passe" required />
                    <label htmlFor="floatingInput">Confirmer</label>
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                </div>


                <button type="submit" className="btn btn-primary submit">S'inscrire</button>
                <p className="inscriptionClick" onClick={() => { setFormulaire(1) }}>déjà un compte ?</p>
            </form>
        </div>
    )
}
