import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";

//for on-device storage: AsyncStorage has been removed from React Native.
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

//custom components:
import ProfileImage from "./ProfileImage";
import { useState } from "react";

const storage = new MMKVLoader().initialize();

function ProfileScreen() {
  //A state variable to regulate visibiliity of the 'Edit contact info' Modal:
  const [editing, setEditing] = useState(false);

  //contact info:
  const [contact_info, setContact_info] = useMMKVStorage(
    "contact_info",
    storage,
    {
      address: "",
      email: "",
      phone: "",
    }
  );
  //individual variables for onChangeText value update:
  const [address, setAddress] = useState(contact_info.address);
  const [email, setEmail] = useState(contact_info.email);
  const [phone, setPhone] = useState(contact_info.phone);
  //'presentedPhone' variable will be shown as the 'phone number'
  // when this screen will be rendered:
  let [presentedPhone, setPresentedPhone] = useState("");
  //These additional variables seem required when we insert validation
  // as if validation fails, we will have to revert the changes made in the
  // textInput field. This is the case as we are saving the value of
  // textInput field using its 'onChangeText' prop.
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  // email pattern:
  // for the email Regex, I have referred to this:
  //https://emaillistvalidation.com/blog/mastering-regex-for-email-validation-the-ultimate-guide/
  //with 2 changes in the 'Basic Email validation'.
  const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}$/;

  //phone number pattern: created with trial and error to better understand regex
  // using this tool:
  //https://regexr.com/
  //The following regex allows (123)-(456)-(7890) pattern,
  // the same without any bracket, and/or without any dash as well.
  const phonePattern = /^(\(?\d{3}\)?-?){2}\(?\d{4}\)?$/;

  function onEdit() {
    setEditing(true);
    if (!isEmailValid) {
      validateEmail(email);
    }
    if (!isPhoneValid) {
      validatePhone(phone);
    }
  }

  function onCancel() {
    setEditing(false);
  }

  //The following function would convert "(123)-(456)-(7890)"" into
  // "1234567890" and return it. This is implemented so that the value
  // written in the storage would contain only 10 digits of the input
  // without any curved braces or dashes.
  function formatPhoneValue(input) {
    console.log("received input: " + input);
    input = input.replaceAll("(", "");
    input = input.replaceAll(")", "");
    input = input.replaceAll("-", "");
    console.log("formattedPhoneNumber: " + input);
    setPhone(input); //yes, but this does not set the value of the state variable
    //'phone' equal to the value of the variable 'input' in the current render. It will
    // do so before the next render. And there is no way to match these two values
    // for the rendered screen. So we will have to pass the derived value to the
    // 'contact_info' storage variable instead of passing the state variable 'phone'.
    const formattedPhone = input;
    return formattedPhone;
  }

  function onSave() {
    console.log(isEmailValid);
    console.log(isPhoneValid);
    if (isEmailValid && isPhoneValid) {
      formattedPhoneValue = formatPhoneValue(phone);
      setContact_info({
        address: address,
        email: email,
        phone: formattedPhoneValue,
      });
      setEditing(false);
    }
  }

  //Function that is bound with 'onChangeText' prop of the TextInput responsible
  // for taking email input.
  function validateEmail(input) {
    // console.log(input);
    console.log("emailValid: " + emailPattern.test(input));
    if (emailPattern.test(input)) {
      setIsEmailValid(true);
      setEmail(input);
    } else {
      setIsEmailValid(false);
    }
  }

  //Function that is bound with 'onChangeText' prop of the TextInput responsible
  // for taking phone number input:
  function validatePhone(input) {
    console.log(input);
    console.log("phoneValid: " + phonePattern.test(input));
    if (phonePattern.test(input)) {
      setIsPhoneValid(true);
      setPhone(input);
    } else {
      setIsPhoneValid(false);
    }
  }

  function showPhoneNumber() {
    //'presentablePhone' is the variable we will build to ultimately have the value
    // of the phone number with brackets and dashes.
    let presentablePhone = "(";
    console.log(phone);
    for (let i = 0; i < phone.length; i++) {
      if (i === 3) {
        presentablePhone = presentablePhone.concat(")-");
      } else if (i === 6) {
        presentablePhone = presentablePhone.concat("-");
      }
      presentablePhone = presentablePhone.concat(phone.charAt(i));
      console.log("presentablePhone: " + presentablePhone);
    }
    setPresentedPhone(presentablePhone);
  }

  return (
    <View style={styles.container} onLayout={showPhoneNumber}>
      <View style={styles.section1}>
        <View style={styles.imageContainer}>
          <ProfileImage />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>John Doe</Text>
        </View>
      </View>
      <View style={styles.contactInfo}>
        <View style={styles.section2}>
          <Text style={styles.sectionTitle}>Contact info</Text>
          <Button title="Edit" onPress={onEdit} />
        </View>
        <Text style={styles.fieldTitle}>Address</Text>
        <Text style={styles.fieldValue}>{address}</Text>
        <Text style={styles.fieldTitle}>Email*</Text>
        <Text style={styles.fieldValue}>{email}</Text>
        <Text style={styles.fieldTitle}>Phone number*</Text>
        <Text style={styles.fieldValue}>{presentedPhone}</Text>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={editing}
        onRequestClose={onCancel}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.contactInfo}>
            <View style={styles.section2}>
              <Text style={styles.sectionTitle}>Contact info</Text>
              <Button title="Cancel" onPress={onCancel} />
            </View>
            <Text style={styles.fieldTitle}>Address</Text>
            <TextInput
              style={styles.fieldValue}
              multiline={true}
              returnKeyType="next"
              onChangeText={(value) => {
                setAddress(value);
              }}
            >
              {address}
            </TextInput>
            <Text style={styles.fieldTitle}>Email*</Text>
            <TextInput
              style={styles.fieldValue}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={validateEmail}
            >
              {email}
            </TextInput>
            {!isEmailValid && (
              <Text style={styles.invalidMessage}>
                Enter a valid email address.
              </Text>
            )}
            <Text style={styles.fieldTitle}>Phone number*</Text>
            <TextInput
              style={styles.fieldValue}
              keyboardType="numeric"
              onChangeText={validatePhone}
              returnKeyType="go"
            >
              {presentedPhone}
            </TextInput>
            {!isPhoneValid && (
              <Text style={styles.invalidMessage}>
                Enter a valid Phone Number.
              </Text>
            )}
            <View style={styles.saveButton}>
              <Button title="save" onPress={onSave} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "orange",
  },
  section1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 8,
  },
  imageContainer: {
    flex: 1,
  },
  nameContainer: {
    flex: 3,
    marginTop: 24,
  },
  name: {
    fontSize: 28,
  },
  section2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactInfo: {
    backgroundColor: "#ff8533",
    margin: 8,
    padding: 16,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: "300",
    margin: 2,
  },
  fieldValue: {
    fontSize: 20,
    fontWeight: "500",
    margin: 2,
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#0066ff",
  },
  invalidFieldValue: {
    color: "white",
  },
  invalidMessage: {
    fontSize: 18,
    color: "#b30000",
    fontWeight: "bold",
  },
  ModalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 172,
  },
  saveButton: {
    marginTop: 16,
    marginHorizontal: 144,
  },
});

export default ProfileScreen;
