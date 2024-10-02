import { useLocation, useParams } from "react-router-dom"
import Navigation from "../components/Navigation"
import { useEffect, useState } from "react";

let ProfilePage = () => {

    let [user, setUser] = useState(null);

    let location = useLocation();
    let params = useParams();
    console.log("params", params);

    useEffect( () => {
        //Om vi inte har data i location.state -> Fetcha datat.
        let fetchData = async () => {
            let response = await fetch("https://jsonplaceholder.typicode.com/users/" + params.id);
            let json = await response.json();
            console.log("Location data not available. Fetching data...")
            setUser(json);
          }

        if(!location.state) {
            fetchData();
        }
        
    },[])

    return(
        <>
            <Navigation/>
            <h2>Profile - Id: {params.id}</h2>
            <h3>{location.state ? location.state.username : user?.username}</h3>
            
        </>
    )
}

export default ProfilePage