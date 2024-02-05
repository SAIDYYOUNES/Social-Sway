import { StyleSheet } from "react-native";
export const ProfilCardStyle = StyleSheet.create({
    userName: {
        zIndex: 100,
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    img: {
        zIndex: 100,
        width: 370,
        height: 370,
        borderRadius: 15
    },
    detail:{
         zIndex: 100,
        fontSize:20,
        flexDirection:'row',
        justifyContent:'space-around'
        
    }
}

);