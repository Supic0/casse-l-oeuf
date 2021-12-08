import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import './Connexion.css'
import Inscription from './Inscription';

export default function Connexion({ setIsConnected }) {

    const [formulaire, setFormulaire] = useState(1);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    if (formulaire === 1) {
        return (
            <div className="FormDiv">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                        <input {...register("Email", { required: true })} type="email" className={`form-control ${errors.Email?"is-invalid":""}`} id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input maxlength="30" minlength="6" {...register("Password", { required: true, minLength: 6, maxLength:30})}type="password" className={`form-control ${errors.Password?"is-invalid":""}`} id="floatingPassword" placeholder="Mot de passe" required />
                        <label htmlFor="floatingInput">Mot de passe</label>
                    </div>

                    <button type="submit" className="btn btn-primary submit">Connecter</button>
                    <p className="inscriptionClick" onClick={() => { setFormulaire(2) }}>Inscription</p>
                </form>
            </div>
        )
    } else {
        return (
            <Inscription setFormulaire={setFormulaire}/>
        )
    }
}
