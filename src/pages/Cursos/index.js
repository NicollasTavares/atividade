import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';


export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.caixa}>
                    <Text style={{fontWeight: 'bold', height: '15%'}}>Servidores Linux</Text>
                    <Text>Capacidades Técnicas:</Text>
                    <Text>Configurar o sistema operacional GNU Linux</Text>
                    <Text>Configurar servidores DHCP</Text>
                    <Text>Configurar servidores DNS</Text>
                    <Text>Gerenciar o sistema operacional GNU Linux</Text>
                </View>

                <View style={styles.caixa}>
                    <Text style={{fontWeight: 'bold', height: '15%'}}>Ajustagem Mecânica</Text>
                    <Text>Planejar a ordem de execução da usinagem</Text>
                    <Text>Ajustar peças manualmente</Text>
                    <Text>Montar conjuntos mecânicos</Text>
                    <Text>Fixar peças e dispositivos na máquina</Text>
                    <Text>Usinar peças</Text>
                </View>

                <View style={styles.caixa}>
                    <Text style={{fontWeight: 'bold', height: '15%'}}>Analista da Qualidade</Text>
                    <Text>Processos e produção de projetos</Text>
                    <Text>Manutenção Produtiva Total ( TPM)</Text>
                    <Text>Técnico em Desenvolvimento de Sistemas</Text>
                    <Text>INDMO - Interface para Dispositivos Móveis</Text>
                    <Text>INDMO - Interface para Dispositivos Móveis</Text>
                    <Text>INDMO - Interface para Dispositivos Móveis</Text>
                </View>
            </ScrollView>
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
    scroll: {
        gap: 15,
    },
    caixa: {
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#fff',
        borderRadius: 56,
        width: '85%',
        height: '40%',
        margin: 30,
        borderWidth: 2,
        justifyContent: 'center',
    }

})