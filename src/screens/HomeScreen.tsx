import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import Carousel from 'react-native-snap-carousel'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

	const { movieCinema, isLoading } = useMovies()
	const { top } = useSafeAreaInsets()

	if (isLoading) {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator color='red' size={50} />
			</View>
		)
	}

	return (
		<View style={{ marginTop: top }}>
			<View style={{ height: 440 }} >
				<Carousel
					data={ movieCinema }
					renderItem={ ({ item }: any) =>  <MoviePoster movie={ item } /> }
					sliderWidth={ windowWidth }
					itemWidth={ 300 }
				/>
			</View>
		</View>
	)
}
