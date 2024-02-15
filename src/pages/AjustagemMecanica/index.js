import { StyleSheet,TextInput, Text, View, Linking, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AjustagemMecanica() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caixa}>
            <TextInput style={styles.infos}>Ajustagem Mecanica</TextInput>
            <Text style={styles.texto}>O Curso de Aperfeiçoamento Profissional Ajustagem mecânica 
            tem por objetivo o desenvolvimento de competências relativas ao manuseio de ferramentas
             manuais e máquinas convencionais de acordo com normas técnicas, ambientais e de segurança.</Text>
            <TextInput style={styles.infos}>Carga horaria:</TextInput>
            <TextInput>100 Horas</TextInput>
            <Button color={'red'} title='Inscreva-se' onPress={ () => Linking.openURL('https://www.sp.senai.br/cursos/cursos-livres/fabricacao-mecanica-e-mecanica-industrial#')}></Button>
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