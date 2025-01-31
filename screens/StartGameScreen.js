import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from '../constants/colors';
import Card from '../components/ui/card';
import InstructionText from "../components/ui/InstructionText";
import Title from "../components/ui/Title";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
         const chosenNumber = parseInt(enteredNumber);

         if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
         {
            Alert.alert('Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: {}}]
            );
            return;
         }
         onPickNumber(chosenNumber);
    }

    return ( 
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput 
         style={styles.numberInput} 
         maxLength={2} 
         keyboardType="number-pad" 
         autoCapitalize="none"
         autoCorrect={false}
         onChangeText={numberInputHandler}
         value={enteredNumber}
         />
         <View style={styles.buttonsContainer}>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset </PrimaryButton>
            </View>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
         </View>  
    </Card>
    </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        maginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.primary500,
        borderBottomWidth: 2, 
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
    
});