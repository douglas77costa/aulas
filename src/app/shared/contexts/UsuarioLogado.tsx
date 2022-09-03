import React, {createContext, PropsWithChildren, useCallback, useEffect, useState} from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Lucas');
        }, 300);
    });

    const handleLogout = useCallback(() => {
        console.log('Logout executado')
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}
