import React, {createContext, PropsWithChildren} from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Doug'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}
