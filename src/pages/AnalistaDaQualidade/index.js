import { StyleSheet, TextInput, Text, View, Linking, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AnalistaDaQualidade() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caixa}>
                <TextInput style={styles.infos}>ANALISTA DA QUALIDADE</TextInput>
                <Text style={styles.texto}>O Curso de Especialização Profissional - Analista da Qualidade tem por objetivo
                    o desenvolvimento de competências relativas à gestão pela qualidade em sistemas produtivos, seus conceitos,
                    ferramentas especificas e rotinas para auditoria do sistema de acordo com as normas técnicas relativas à área da qualidade.</Text>
                <TextInput style={styles.infos}>Carga horaria:</TextInput>
                <TextInput>160 Horas</TextInput>
                <Button color={'red'} title='Inscreva-se' onPress={() => Linking.openURL('https://www.sp.senai.br/cursos/cursos-livres/administracao-e-gestao')}></Button>
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