import {Link} from 'react-router-dom';

function Error(){
   return(<section>
        <p>Oops... we did not find the page you were looking for.</p>
        <Link to="/">Go To Home Page</Link>
    </section>)
}

export default Error