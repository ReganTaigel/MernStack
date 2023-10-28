import {Link} from 'react-router-dom';
import './styles.css';

function Navbar()
{
    return(
        <>
         <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' >About</Link>
                    </li>
                    <li>
                        <Link to='/create' >Create</Link>
                    </li>
                    <li>
                        <Link to='/record' >Record</Link>
                    </li>
                </ul>
            </nav>
         </div>
        </>
    )
}
export default Navbar ;