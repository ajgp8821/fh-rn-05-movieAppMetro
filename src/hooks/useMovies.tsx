import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface'

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {

	const [ isLoading, setIsLoading ] = useState<boolean>(true)
	const [ moviesState, setMoviesState ] = useState<MovieState>({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	})

	const getMovies = async () => {
		const nowPlayingPromise = await movieDB.get<MovieDBMoviesResponse>('/now_playing')
		const popularPromise = await movieDB.get<MovieDBMoviesResponse>('/popular')
		const topRatedPromise = await movieDB.get<MovieDBMoviesResponse>('/top_rated')
		const upcomingPromise = await movieDB.get<MovieDBMoviesResponse>('/upcoming')

		const resp = await Promise.all([
			nowPlayingPromise,
			popularPromise,
			topRatedPromise,
			upcomingPromise,
		])
    
		setMoviesState({
			nowPlaying: resp[0].data.results,
			popular: resp[1].data.results,
			topRated: resp[2].data.results,
			upcoming: resp[3].data.results,
		})

		setIsLoading( false )
	}

	useEffect(() => {
		// now_playing
		getMovies()
	}, [])
  
	return {
		...moviesState,
		isLoading
	}
}
