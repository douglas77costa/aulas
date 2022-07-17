import { Link } from "react-router-dom";

const Button = () => {
    return <button>
        Menu Button
    </button>
}

export const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/entrar">Login</Link>
            <br/><br/>
            <Button />
        </div>
    );
}