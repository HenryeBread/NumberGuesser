import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}
export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})