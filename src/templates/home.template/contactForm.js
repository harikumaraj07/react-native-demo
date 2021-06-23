import React from 'react';
import { Formik, Field } from 'formik';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

import ModalView from '../../components/ModalView';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { contactSchema } from '../../utils/validationScema.utils';
import styles from './styles';

const propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
};

const defaultProps = {
    initialValues: {},
    onSubmit: () => { },
};

const ContactForm = props => {

    const { onSubmit, initialValues } = props;

    return (
        <ModalView {...props}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={contactSchema}>
                {({ values, setFieldValue, handleSubmit }) => (
                    <View>
                        <View style={[styles.fieldContainer, styles.row]}>
                            <View style={styles.col}>
                                <Field
                                    name="first_name"
                                    label="First Name"
                                    component={TextInput}
                                />
                            </View>
                            <View style={styles.horizonalDivider} />
                            <View style={styles.col}>
                                <Field
                                    name="last_name"
                                    label="Last Name"
                                    component={TextInput}
                                />
                            </View>
                        </View>
                        <View style={[styles.fieldContainer, styles.row]}>
                            <View style={styles.col}>
                                <Field
                                    name="email"
                                    label="Email"
                                    component={TextInput}
                                />
                            </View>
                            <View style={styles.horizonalDivider} />
                            <View style={styles.col}>
                                <Field
                                    name="phone"
                                    label="Phone"
                                    component={TextInput}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Field
                                name="company_name"
                                label="Company Name"
                                component={TextInput}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Field
                                name="address"
                                label="Address"
                                component={TextInput}
                            />
                        </View>
                        <View style={[styles.fieldContainer, styles.row]}>
                            <View style={styles.col}>
                                <Field
                                    name="city"
                                    label="City"
                                    component={TextInput}
                                />
                            </View>
                            <View style={styles.horizonalDivider} />
                            <View style={styles.col}>
                                <Field
                                    name="state"
                                    label="State"
                                    component={TextInput}
                                />
                            </View>
                        </View>
                        <View style={[styles.fieldContainer, styles.row]}>
                            <View style={styles.col}>
                                <Field
                                    name="county"
                                    label="County"
                                    component={TextInput}
                                />
                            </View>
                            <View style={styles.horizonalDivider} />
                            <View style={styles.col}>
                                <Field
                                    name="zip"
                                    label="Zip"
                                    component={TextInput}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Button rounded title={initialValues.id ? 'Update' : "Save"} onPress={handleSubmit} />
                        </View>
                    </View>
                )}
            </Formik>
        </ModalView>
    )
}

ContactForm.defaultProps = defaultProps;

ContactForm.propTypes = propTypes;

export default ContactForm;
