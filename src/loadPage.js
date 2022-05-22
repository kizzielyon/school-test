import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function LoadPage() {
    const history = useHistory()
    useEffect(() => {
        var isLogged = localStorage.getItem("hiroLogged")
        if(isLogged === null) {
            history.push("/onboarding")
        }
        else {
            history.push("/request-diagnostics")
        }
    }, [])
    return null
}

export default LoadPage;