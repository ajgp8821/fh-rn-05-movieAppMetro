import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import Carousel from 'react-native-snap-carousel'
import { HorizontalSlider } from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
	const { top } = useSafeAreaInsets()

	if (isLoading) {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator color='red' size={50} />
			</View>
		)
	}

	return (
		<ScrollView>
			<View style={{ marginTop: top }}>
				{/* Carousel */}
				<View style={{ height: 440 }} >
					<Carousel
						data={ nowPlaying }
						renderItem={ ({ item }: any) =>  <MoviePoster movie={ item } /> }
						sliderWidth={ windowWidth }
						itemWidth={ 300 }
						inactiveSlideOpacity={ 0.9 }
					/>
				</View>

				{/* Popular movies */}
				<HorizontalSlider title='Popular movies' movies={ popular } />
				<HorizontalSlider title='Top Rated' movies={ topRated } />
				<HorizontalSlider title='Upcoming' movies={ upcoming } />
			</View>
		</ScrollView>
	)
}
