import React from 'react';
import { BrowserRouter ,Link } from 'react-router-dom';


export const Nav:React.FC = () => {
	return <nav className='header'>
		
<Link to='/'><h1  className='tituloPrincipal'>Filmoteca</h1></Link>
<Link to='/'>Home</Link>
<Link to='/rateds'> Rated TV Shows</Link>
<Link to='/Popular'>Popular Movies</Link>
<Link to='/ratedMovie'>Rated Movies</Link>

	</nav>
}
