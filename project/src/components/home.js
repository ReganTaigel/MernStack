import { useState } from 'react';
import '../components/styles.css';
import Logo from '../imges/atom.png';
   

function Home()
{

    const[count, setCount] = useState(0)

    return(
        <div className="home">
         
            <h1>Home Page</h1>
             

            <p className='container '>
                This is a home page example of React, CSS, HTML to 
                show some of the static componets that can be used for a single page application! 
            </p>

            <div className='divImage'>
                <img src={Logo} alt="react" className="img-responsive"/>
            </div>

            <div className='divButton'>
                <p>I have clicked the button {count} times</p>
                <button className='Button' onClick={() => setCount(count + 1)}>Click Me</button>
           </div>

        </div>
    )
}

export default Home ;