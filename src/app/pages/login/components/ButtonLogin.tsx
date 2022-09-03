import React, {PropsWithChildren} from "react";

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}

export const ButtonLogin: React.FC<PropsWithChildren<IButtonLoginProps>> = ({type, onClick, children}) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}
