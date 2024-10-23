import { useState } from "react";
import imgen from '../img/logo_axenta.png'
import { generate_token } from '../notifications/firebase';

export function Formulario({ set_usuario, set_token }) {
    const [nombre, set_nombre] = useState("");
    const [password, set_password] = useState("");
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        set_usuario(nombre)

        const newToken = await generate_token();
        setToken(newToken);
        set_token(newToken)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="div_logo" style={{ textAlign: "center", marginBottom: "20px" }}>
                                    <img className="logo" src={imgen} alt="Logo" style={{ width: "150px", height: "auto" }} />
                                </div>
                                <input type="text" placeholder="Ingresar nombre" className="caja_texto" onChange={e => set_nombre(e.target.value)} />
                                <input type="password" placeholder="Ingresar contraseña" className="caja_texto" onChange={e => set_password(e.target.value)} />
                                <button className="btnform">Iniciar sesion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}