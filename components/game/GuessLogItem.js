import { View, Text, StyleSheet } from 'react-native';

function GuessLogItem({roundNumber, guess}) {
    return ( 
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Zelda's Guess: {guess}</Text>
        </View>
    );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 40,
        marginVertical: 8,
        backgroundColor: 'gold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        with: '100%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})