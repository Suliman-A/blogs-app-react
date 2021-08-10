import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <h1>The Cloud UC-CITCS</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create' style={{
                    // color: 'white',
                    // backgroundColor: '#2f8128',
                    // borderRadius: '8px'  
                }}>Create new Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;