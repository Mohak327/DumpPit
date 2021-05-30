import React from 'react';
import { useFormikContext } from "formik";

import AppTextInput from '../AppTextInput';
import ErrorMessage from '../forms/ErrorMessage';

function AppFormField({ name, ...otherProps }) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

    return (
        <>
            <AppTextInput
                // autoCapitalize="none"
                // autoCorrect={false}
                // icon="email"
                // keyboardType="email-address"
                // placeholder="Email"
                // textContent="emailAddress"      // iOS only
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    );
}

export default AppFormField;