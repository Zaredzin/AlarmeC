import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    Title: {
        fontSize: 28,
        color: 'green',
    },
    mainContainer: {
        marginVertical: 20,
        marginHorizontal:30,
        borderColor: 'red',
        borderWidth: 2,

    },
    container1:{
        borderColor: 'blue',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center'
        

    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,

    },
    SensorsContainer:{
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        height: 65,
        borderWidth: 2,

    },
    container3:{
        borderColor: 'blue',
        borderWidth: 2,
        justifyContent: 'center',

    },
    roomButton:{
        fontSize: 28,
        justifyContent:'center',
        backgroundColor: 'gray',
        textAlign: 'center',
        paddingVertical: 5,
        marginBottom: 10,
        

    },
    triggerContainer:{
        justifyContent:'center',
        borderWidth: 2,
        borderColor: 'orange',
        textAlign: 'center',
        paddingVertical: 15
    },
    triggerContainerText:{
        justifyContent:'center',
        textAlign: 'center',
    }
})

export {styles}