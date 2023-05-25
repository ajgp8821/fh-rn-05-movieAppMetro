import axios from 'axios'
import movieAPI from '../../env'

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: movieAPI.api_key,
		language: 'es-ES'
	}
})

export default movieDB
