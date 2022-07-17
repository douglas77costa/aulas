import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handlerEntrar = () => {
        console.log(email);
        console.log(password);

        navigate('pagina-inicial');
    }

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <br/><br/>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <br/><br/>
                <button type="button" onClick={handlerEntrar}>
                    Entrar
                </button>
            </form>
            <br/>
        </div>
    );
}