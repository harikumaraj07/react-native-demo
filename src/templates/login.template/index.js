import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import styles from './styles';

const propTypes = {
  submit: PropTypes.func,
};

const defaultProps = {
  submit: () => {},
};

const LoginTemplate = props => {
  const {onSubmit} = props;

  const loginSchema = Yup.object().shape({
    // phone: Yup.string()
    //   .min(10, 'Too Short!')
    //   .max(10, 'Too Long!')
    //   .required('Required'),
    // password: Yup.string().required('Required'),
  });

  return (
    <View style={styles.wrapper}>
      <Header title="Login" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Formik
            initialValues={{measurementMethod: 'INDIRECT', isSave: false}}
            onSubmit={onSubmit}
            validationSchema={loginSchema}>
            {({values, setFieldValue, handleSubmit}) => (
              <View>
                <View style={styles.fieldContainer}>
                  <Field
                    name="phone"
                    label="Phone Number"
                    component={TextInput}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.fieldContainer}>
                  <Field
                    name="password"
                    label="Password"
                    component={TextInput}
                  />
                </View>
                <Button rounded title="Login" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

LoginTemplate.defaultProps = defaultProps;

LoginTemplate.propTypes = propTypes;

export default LoginTemplate;
