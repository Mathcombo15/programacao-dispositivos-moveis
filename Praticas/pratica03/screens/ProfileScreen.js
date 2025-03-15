import { StyleSheet, Text, View } from "react-native";

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileSection}></View>
            <View style={styles.profileImage}>
                <Text style={styles.profileName}>João da Silva</Text>
                <Text style={styles.profileRole}>Desenvolvedor React Native</Text>
            </View>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            <View style={styles.skillSection}>
                <View style={styles.skillBadge}>
                    <Text style={styles.skillName}>React Native</Text>
                </View>
                <View style={styles.skillBadge}>
                    <Text >JavaScript</Text>
                </View>
                <View style={styles.skillBadge}>
                    <Text style={styles.skillName}>CSS</Text></View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "row", alignItems: "center", marginBottom: 24, },
    profileSection: { flexDirection: "row", alignItems: "center", marginBottom: 24, },
    profileImage: { width: 80, height: 80, borderRadius: 40, backgroundColor: "EADDFF", marginRight: 16, },
    profileName: { fontSize: 20, fontWeight: "600", color: "1C1B1F", },
    profileRole: { fontSize: 16, color: "49455F", sectionBottom: 8, },
    sectionTitle: { fontSize: 18, fontWeight: "500", color: "1C1B1F", marginBottom: 8, },
    skillSection: { flexDirection: "row", flexWrap: "wrap", gap: 8, },
    skillBadge: { backgroundColor: "#E8DEF8", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, },
    skillName: { fontSize: 14, color: "1C1B1F", },


})

export default ProfileScreen;