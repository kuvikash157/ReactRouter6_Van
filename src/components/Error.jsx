
import { useRouteError } from "react-router-dom"
export default function Error() {
    const error = useRouteError();
    console.error(error);
    const message =  error.message || error.statusText ||"Something went wrong";    
    return (
        <h2 className="error-message"> Error: {message}</h2>
    )
}