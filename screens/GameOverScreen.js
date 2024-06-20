import { View, Image, StyleSheet, Text } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onRestart}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/zelda.png')}/>
            </View>
            <Text style={styles.summaryText}>
                Zelda needed 
                <Text style={styles.highlight}>{roundsNumber}</Text>
                 rounds to guess the number 
                 <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
    )
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: 'skyblue',
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: 'skyblue'
    }
})