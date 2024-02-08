import { SafeAreaView, Text, StyleSheet, Button, Image, View } from 'react-native';


export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/logo-senai.png')} style={{width: 300, height: 90, marginBottom: 30,}}></Image>
            <View style={styles.caixa}>
                <Text>Nicollas tavares</Text>
                <Text>Sumaré, 30/02/2024</Text>
                <Text>Escola SENAI Celso Charuri</Text>
                <Text>Técnico em Desenvolvimento de Sistemas</Text>
                <Text>INDMO - Interface para Dispositivos Móveis</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    caixa: {
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#fff',
        borderRadius: 56,
        width: '95%',
        height: '27%',
        margin: 70,
        borderWidth: 2,
        justifyContent: 'center',
    }

})