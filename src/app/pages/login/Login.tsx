import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {InputLogin} from "./components/InputLogin";
import {ButtonLogin} from "./components/ButtonLogin";
import {useUsuarioLogado} from "../../shared/hooks";

export const Login = () => {
    //useRef: Salva um objeto/variavel/componente na memória independente da mudança de estado
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const buttonEnterRef = useRef<HTMLButtonElement>(null);

    //useState posibilita a alteração de estado de um componente
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Usado para navegar entre rotas por meio do TypeScrip
    const navigate = useNavigate();

    //Usado para operações complexa, é executado apenas se os valores passados mudarem.
    const emailLength = useMemo(() => {
        console.log('Execution')
        return email.length * 1000;
    }, [email.length]);

    //Usado para executar uma função quando chamado.
    const handlerEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
        if (inputPasswordRef.current != null) {
            inputPasswordRef.current.focus();
        }
        navigate('pagina-inicial');
    }, [email, navigate, password]);

    // useEffect é executado apenas uma vez, após a rederizaão do componente
    useEffect(() => {
        if (window.confirm('Você quer sair dessa página?')) {
            console.log('sim');
        } else {
            console.log('cancelar');
        }
    }, []);

    useEffect(() => {
        console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(password);
    }, [password]);

    const {nomeDoUsuario} = useUsuarioLogado();

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <p>{nomeDoUsuario}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    ref={inputPasswordRef}
                    onChange={newValue => setPassword(newValue)}
                    onPressEnter={() => buttonEnterRef.current?.click()}
                />

                <ButtonLogin type={"button"} onClick={handlerEntrar}>
                    Entrar
                </ButtonLogin>
                <ButtonLogin type={"button"} onClick={handlerEntrar}>
                    Cadastrar
                </ButtonLogin>
            </form>
            <br/>
        </div>
    );
}
