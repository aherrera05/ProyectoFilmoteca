import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Nav } from './Naveg';
import axios from 'axios';

export const Rated :React.FC = () => {
    //const API_URL_UPCOMING ='https://api.themoviedb.org/3/movie/upcoming?api_key=713eb6bb7202872206e0d25740ad550c';
    const API_URL_RATED_TV_SHOWS ='https://api.themoviedb.org/3/tv/top_rated?api_key=713eb6bb7202872206e0d25740ad550c';

    const [movies, setMovies] = useState([]);
	const [rating, setRating] = useState(0);
  // Busca datos hasta que se haya cargado el componente completamente

  useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(API_URL_RATED_TV_SHOWS);
			const filteredUpcomnigMovies = data.results.map( (movie: { title: any; overview: any; id: any; vote_average: any; image:any;poster_path:any }) => 
			{
				 return {
					 title: movie.title,
					 description: movie.overview,
					 id: movie.id,
					 rating:movie.vote_average,
					 imge:movie.image,
                     poster:movie.poster_path
				 }
			});
			setMovies(filteredUpcomnigMovies);
		};

    fetchData();
  }, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setRating(value);
	}
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const user = {
			name:rating
		};

		const request = await axios.post('URL_POST', user);
		console.log(`POST`, request);
	}

	  
	const IMG_API = "https://image.tmdb.org/t/p/w500/";
	//console.log(movies);
	const Ver :React.FC = () => {
		return <React.Fragment>
		<div className="flex-center"> 
		<ContainerMovie>
		{ (movie:any) => ( 
				<div key={movie.id}>
					
					<p>{movie.description}</p>
					
					
					<span>rating {movie.rating}</span>
					<Button >Agregar a favoritos</Button>
			<Button >Agregar para ver </Button>
		
			</div>
				)
		}
				
			
			
				</ContainerMovie>
				</div>
				</React.Fragment>
				
	}
	return <React.Fragment>
    
	
		
	<div className="moviesGrid">
   
   
	
   {movies.map( (movie:any) => ( 
		   <div key={movie.id}>
				



				<div className="titulo">
				<h1>{movie.title}</h1>
				</div>
			   
		   <div className="img-container">
		   <img width="230" height="345" src = {IMG_API + movie.poster}  /> 
			   <p>{movie.description}</p>
			   </div>
				   
		  		
   
 
		   
		   <span className="rating">Rating {movie.rating}</span>
		   
		   
	   <div className="movieInfo">

				   <Button >Agregar a favoritos</Button>
		   <Button >Agregar para ver </Button>
		   </div>
		   </div>
		   
		   ))}
		   
</div>
		   
	   
	   
		   
		   
		   
		   
		   </React.Fragment>

		   
   }
//<Button onClick={()=>AddFavourite()}>+</Button>
		//<Button onClick={()=>removePlant()}>-</Button>
const Button = styled.button`
	
background: black ;
	color: white;

	&:hover {
		background: #91550c;
		color: black;
		font-family: "Segoe IU", sans-serif;
	}
`;

//const Container = styled.div`
//	width:200px;
//	padding: 15px 10px;
//	background: black
	//display: flex;
//	flex-direction: column;
	
	//;
//`;
const ContainerMovie = styled.div`
align-items: center;
display: flex;
height: 100vh;
justify-content: center;
width: 100%;
	;
`;