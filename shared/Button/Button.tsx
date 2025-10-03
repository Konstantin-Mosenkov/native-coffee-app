import { Pressable, PressableProps, View, Text, StyleSheet } from 'react-native'
import { Colors, FontsSizes, Radius } from '../token'

export function Button({ text, ...props }: PressableProps & {text: string}) {
	return (
		<Pressable {...props}>
			<View style={styles.button}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 62,
		borderRadius: Radius.r16,
		backgroundColor: Colors.primary,
	},
	text: {
		color: Colors.white,
		fontSize: FontsSizes.fs16,
		fontWeight: 600,
	}
})