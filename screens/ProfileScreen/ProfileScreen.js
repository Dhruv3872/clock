import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";

//for on-device storage: AsyncStorage has been removed from React Native.
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

//custom components:
import ProfileImage from "./ProfileImage";
import { useState } from "react";
//lazy loading:
//?

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
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function onEdit() {
    setEditing(true);
  }
  function onCancel() {
    setEditing(false);
  }
  function onSave() {
    setContact_info({ address: address, email: email, phone: phone });
    setEditing(false);
  }
  return (
    <View style={styles.container}>
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
        <Text style={styles.fieldValue}>{contact_info.address}</Text>
        <Text style={styles.fieldTitle}>Email</Text>
        <Text style={styles.fieldValue}>{contact_info.email}</Text>
        <Text style={styles.fieldTitle}>Phone number</Text>
        <Text style={styles.fieldValue}>{contact_info.phone}</Text>
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
              {contact_info.address}
            </TextInput>
            <Text style={styles.fieldTitle}>Email</Text>
            <TextInput
              style={styles.fieldValue}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={(value) => {
                setEmail(value);
              }}
            >
              {contact_info.email}
            </TextInput>
            <Text style={styles.fieldTitle}>Phone number</Text>
            <TextInput
              style={styles.fieldValue}
              keyboardType="numeric"
              onChangeText={(value) => {
                setPhone(value);
              }}
              returnKeyType="go"
            >
              {contact_info.phone}
            </TextInput>
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
