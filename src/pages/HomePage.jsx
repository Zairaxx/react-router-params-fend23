import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
let HomePage = ({profiles}) => {
    return(
        <>
            <Navigation/>
            <h2>Home</h2>
            <ul>
                {profiles.map((profile,i) => <li key={i}>
                        <Link to={"/profile/" + profile.id} state={profile}>{profile.username}</Link>
                    </li>)}
            </ul>
            
        </>
    )
}

export default HomePage