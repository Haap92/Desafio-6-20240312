import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { useSelector, useDispatch } from "react-redux";
import SubmitButton from "../components/SubmitButton";
import { clearUser } from "../features/auth/authSlice";

const MyProfile = ({ navigation }) => {
    const { user, token, profileImage, imageCamera, localId } = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const authState = useSelector(state => state.authReducer);
    console.log("Auth state:", authState);

    const handleLogout = () => {
        console.log("Logout button pressed");
        dispatch(clearUser());
    };

  return (
    <View style={styles.headerContainer}>
        <View style={styles.container}>
            <Text style={styles.text}>{user}</Text>
            {profileImage || imageCamera ? (
            <View>
                <Image
                    source={{ uri: profileImage || imageCamera }}
                    resizeMode="cover"
                    style={styles.image}
                    />
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate("Image Selector")}
                    >
                        <Text style={styles.text}>Change profile picture</Text>
                </Pressable>
            </View>
            ) : (
            <View>
                <Image
                    source={require("../../assets/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Image Selector")}
                >
                    <Text style={styles.text}>Add profile picture</Text>
                </Pressable>
            </View>
            )}
            {/*<Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Location Selector")}
            >
                <Text style={styles.text}>My addresses</Text>
            </Pressable>
            <View style={styles.buttonContainer}>
                <SubmitButton title={"Logout"} 
                    onPress={() => {
                        handleLogout();  
                        navigation.navigate("Login");
                    }} 
                />
            </View>*/}
        </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.grayScale0
    },
    container: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 50,
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 30
    },
    button: {
        width: "50%",
        elevation: 10,
        backgroundColor: colors.mustard0,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },
    text: {
        fontFamily: "oswaldRegular",
        fontSize: 18,
        color: "white",
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 100,
        alignItems: "center"
    }
});
