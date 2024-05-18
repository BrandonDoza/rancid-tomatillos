import "./Error.css"
import {Link} from "react-router-dom"

export default function Error() {
    return (
        <div className="error">
            <h1>Error, Page Not Found</h1>
            <p>Please enter a valid url</p>
            <Link to="/" className="links">Home</Link>
        </div>
    )
}