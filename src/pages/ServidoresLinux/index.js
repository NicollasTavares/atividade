import { StyleSheet,TextInput, Text, View, Linking, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ServidoresLinux() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caixa}>
            <TextInput style={styles.infos}>ADMINISTRADOR DE SERVIDORES LINUX</TextInput>
            <Text style={styles.texto}>O Curso de Especialização Profissional Administrador de Servidores Linux
             tem por objetivo o desenvolvimento de competências relativas à análise, planejamento,
              configuração, manutenção e monitoramento de redes utilizando Servidores Linux.</Text>
            <TextInput style={styles.infos}>Carga horaria:</TextInput>
            <TextInput>60 Horas</TextInput>
            <Button color={'red'} title='Inscreva-se' onPress={ () => Linking.openURL('https://www.sp.senai.br/cursos/cursos-livres/tecnologia-da-informacao-e-informatica')}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infos: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    caixa: {
        alignItems: 'center',
        backgroundColor: '#f2745d',
        borderRadius: 5,
        width: '95%',
        height: '70%',
        borderWidth: 5,
        justifyContent: 'center',
        margin: 10
    },
    texto: {
        textAlign: 'center',
        fontSize: 16
    }
});