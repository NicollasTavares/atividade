import { SafeAreaView, Text, StyleSheet, View, Platform, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cursos() {

    const navegation = useNavigation();

    function navegaServidoresLinux() {
        navegation.navigate('ServidoresLinux');
    }
    function navegaAjustagemMecanica() {
        navegation.navigate('AjustagemMecanica');
    } function navegaAnalistadaQualidade() {
        navegation.navigate('AnalistaDaQualidade');
    }

    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Text style={styles.infos}>O SENAI-SP oferece várias opções de cursos, ágeis e de curta duração, a profissionais já atuantes ou que buscam uma nova oportunidade no mercado de trabalho.</Text>
            <View style={styles.caixa}>
                <Text style={styles.infos}>ADMINISTRADOR DE SERVIDORES LINUX</Text>
                <Button color={'red'} title='Saiba mais' onPress={navegaServidoresLinux}></Button>
            </View>
            <View style={styles.caixa}>
                <Text style={styles.infos}>AJUSTAGEM MECÂNICA</Text>
                <Button color={'red'} title='Saiba mais' onPress={navegaAjustagemMecanica}></Button>
            </View>
            <View style={styles.caixa}>
                <Text style={styles.infos}>ANALISTA DA QUALIDADE</Text>
                <Button color={'red'} title='Saiba mais' onPress={navegaAnalistadaQualidade}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    caixa: {
        backgroundColor: '#FA8072',
        borderRadius: 50,
        width: '95%',
        height: '23%',
        borderWidth: 5,
        margin: 10,
        alignItems: 'center',
        borderBlockColor: 'red'

    },
    infos: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 20,
        margin: 15,
        color: 'black',
    },
})