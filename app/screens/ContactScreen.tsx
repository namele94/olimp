import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton.tsx';
import MyImageBg from '../components/MyImageBg.tsx';

const ContactScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Number</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={values.name}
                    onChangeText={handleChange('name')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Address</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter address"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Date</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter date"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={values.subject}
                    onChangeText={handleChange('subject')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Index</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter index"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={values.message}
                    onChangeText={handleChange('message')}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.buttonContainer}>
          <CustomButton title="Back to menu" onPress={handleSubmit} />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.black,
    fontSize: 14,
    marginBottom: 4,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.transparentWhite,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});

export default ContactScreen;