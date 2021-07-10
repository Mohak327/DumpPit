import React from 'react';
import { StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup";

import Screen from '../components/Screen';
import {SubmitButton, AppFormField, AppForm} from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-green.png")}
            />
            <Text style={styles.heading}>DumpPit</Text>


            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    textContent="emailAddress"      // iOS only
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    righticon="eye"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"      // iOS only
                />

                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // alignItems: 'center',
        marginBottom: 50,
        justifyContent: 'center'
    },

    heading: {
		color: 'green',
		fontSize: 20,
		fontWeight: 'bold',
        alignItems: 'center',
        paddingLeft: '40%'
	},

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;