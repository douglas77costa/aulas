import {Link} from "react-router-dom";
import {useRef} from "react";
import {useUsuarioLogado} from "../../shared/hooks";

const Button = () => {
    return <button>
        Menu Button
    </button>
}

export const Dashboard = () => {
    //Salva um objeto/variavel/componente na memória independente da mudança de estado
    const counterRef = useRef(0);

    const usuarioLogadoContext = useUsuarioLogado();

    return (
        <div>
            <p>Dashboard</p>

            <p>{usuarioLogadoContext.nomeDoUsuario}</p>

            <p>Contador: {counterRef.current}</p>

            <button onClick={() => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Log</button>
            <br/><br/>
            <Link to="/entrar">Login</Link>
            <br/><br/>
            <Button/>
        </div>
    );
}
