import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  let [inputValue, setInputValue] = useState("");
  let [dataArr, setDataArr] = useState([]);
  const ShowData = () => {

    setInputValue("");
    if (inputValue.length === 0) {
      console.log("ERROR! ");
    } else {
      setDataArr([...dataArr, inputValue]);
    }
  }
  const DeleteItem = (index) => {
    const newArr = dataArr.filter((_, i) => i !== index);
    setDataArr(newArr);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.btn}>Contact Manager App</Text>
      <TextInput onSubmitEditing={ShowData} style={styles.input} placeholder="Add New Contact: " value={inputValue} onChangeText={(txt) => setInputValue(txt)} />
      <Pressable style={styles.btn} onPress={ShowData} >
        <Text style={styles.btnText}>Add Contact!</Text>
      </Pressable>

      <FlatList style={styles.contacts} keyExtractor={(item, idx) => idx.toString()} data={dataArr} renderItem={({ item, index }) => (
        <View style={styles.list}>
          <Text numberOfLines={1} style={styles.text}>{item}</Text>
          <Pressable style={styles.deleteBTn} onPress={() => DeleteItem(index)}>
            <Text style={styles.btnText}>Delete Contact!</Text>
          </Pressable>
        </View>
      )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    alignItems: "center",
    padding: 12,
  },
  input: {
    padding: 20,
    width: "100%",
    borderRadius: 5,
    borderWidth: 3
  },

  btn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 12,
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: 15,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  deleteBTn: {
    width: 200,
    padding:12,
    backgroundColor: "red",
    borderRadius: 4,
  }
  ,
  contacts: {
     width: "100%",
     height:400,
     backgroundColor:"#111",
  }
  ,
  list: {
    margin:12,
    flexDirection: "row",
    justifyContent:"space-evenly",
  },
  text : {
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  }
})