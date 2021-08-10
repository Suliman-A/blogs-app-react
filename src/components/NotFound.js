import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className='not-found'>
            <h3>Sorry</h3>
            <p>This page not found</p>
            <Link to='/'>Go back to home page</Link>
        </div>
    );
}

export default NotFound


