import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({children}) {
    return <Text style={styles.tite}>{children}</Text>
};

export default Title;

const styles = StyleSheet.create({
    tite: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary500,
        padding: 12
    }
})