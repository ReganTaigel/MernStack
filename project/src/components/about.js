function About()
{
    return(
        <div className="about">
            
            <h1>The About Page</h1> 
            <p>
                This SPA was built in react using the compontes that
                react has to offer. One of the main components are the <em><strong>Navigation</strong></em> bar at
                the top of this SPA (Single Page Application). The navigation bar uses 
                the components name <em><strong>BrowserRouter</strong></em> to create a means for the "URL to be changed 
                and keep the UI in sync". The different between <strong><em>"React"</em></strong> and <strong><em>"angular"</em></strong> 
                is that React is a library that aims to target specific functionality. As Angular is a frame work that tries 
                to provide everything required to develop complete application.

            </p>

            <p>
                This SPA also uses a <em><strong>useState</strong></em> to collect the useres button clicks and displays it back to them.
                this is done by using a basic button that is driven by an event, this event is then converted back As
                recored data. Currently there in no backend to send this data to, as this event can not be stored in any
                backend it is stored in local memory.     
            </p>
        </div>
   
    )
}

export default About ;