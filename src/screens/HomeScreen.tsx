import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {

	const { movieCinema, isLoading } = useMovies()

	if (isLoading) {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator color='red' size={50} />
			</View>
		)
	}

	return (
		<View>
			<Text>HomeScreen</Text>
		</View>
	)
}
