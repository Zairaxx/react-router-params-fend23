import { Link } from "react-router-dom"

let Navigation = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}

export default Navigation