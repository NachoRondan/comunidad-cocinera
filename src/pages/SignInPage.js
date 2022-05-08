import { Link } from 'react-router-dom';

export default function SignIn(){
    return(
        <div>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                }}
            >
                <Link to="/home">To Homepage</Link> |{" "}
            </nav>
        </div>
    )
}