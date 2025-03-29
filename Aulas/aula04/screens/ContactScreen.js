import { View, StyleSheet, FlatList } from "react-native";
import { List, Appbar, FAB } from "react-native-paper";


const contatos = [
    { id: 1, nome: "Maria", fone: "61 6656-9496" },
    { id: 2, nome: "Matheus", fone: "61 6656-9496" },
    { id: 6, nome: "Ana", fone: "61 6656-9496" },
];

function ContactScreen() {
    return <View style={styles.container}>
        <Appbar.Header>
            <Appbar.Content title="Contatos" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <FlatList
            data={contatos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <List.Item
                    left={(props) => <List.Icon icon="account"{...props} />}
                    title={item.nome}
                    description={item.fone}
                />
            )}
        />
        <View style={styles.fab}>
            <FAB icon="plus" size="small" />
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab: {
        flexDirection: "row",
        position: "absolute",
        right: 16,
        bottom: 16
    }
});

export default ContactScreen;