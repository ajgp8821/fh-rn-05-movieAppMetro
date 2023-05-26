import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'
// import { Movie } from '../interfaces/movieInterface'

// interface Props extends StackScreenProps<RootStackParams, any> {}
type Props = StackScreenProps<RootStackParams, 'DetailScreen'>

export const DetailScreen = ( { route }: Props ) => {

	// const movie = route.params as Movie
	const movie = route.params

	console.log(movie.title)

	return (
		<View style={styles.container}>
			<Text>
        DetailScreen
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
