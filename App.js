import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, } from "react-native";
import { useRef, useState } from "react";
import carImg from "./assets/car.gif";
import tasbeehImg from "./assets/tasbeeh.png";
import ayatulkursi from "./assets/ayatul kursi.jpg"
function Counter() {
  const [readCount, updateCount] = useState(0);
  var time = useRef();

  function increatCount() {
    updateCount(readCount + 1);
  }

  function decreaseCount() {
    if (readCount > 0) {
      updateCount(readCount - 1);
    }
  }

  function resetCount() {
    updateCount(0);
  }

  function startCount() {
    time.current = setInterval(()=>{
      updateCount(prev => prev + 1);
    }, 1000);
  }

  function stopCount() {
    clearInterval(time.current)
  }

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.britannica.com/20/153520-050-177A78E4/Kabah-hajj-pilgrims-Saudi-Arabia-Mecca.jpg",
      }}
      style={styles.container}
    >
      <View style={styles.firstrow}>
      <Image
        style={styles.firstpic}
        source={{
          uri:"https://littlemuslimhouse.com/wp-content/uploads/2021/06/AyatAlKursi-1024x691.png",
        }}
        />
        {/* <Image
        style={styles.secondpic}
        source={{
          uri:"https://i.pinimg.com/736x/0b/5e/84/0b5e84fae84a1a28b160bfe8dcc892d4.jpg",
        }}
        /> */}
        </View>
      <Text style={styles.counter}>{readCount}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={increatCount} style={styles.customButton}>
          <Text style={styles.buttonText}>Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseCount} style={styles.customButton}>
          <Text style={styles.buttonText}>Minus</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity onPress={startCount} style={styles.customButton}>
        <Text style={styles.buttonText}>Start Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopCount} style={styles.customButton}>
        <Text style={styles.buttonText}>Stop Count</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetCount} style={styles.customButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
      <Image
        style={styles.logo}
        source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BNZb1BNMYkzyBp-ubNOqRQepZxovWfeXUg&usqp=CAU",
        }}
        />
        <Text style={styles.footertext}>MADE BY ZEESHAN</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 200,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  customButton: {
    marginBottom: 10,
    width: 140,
    height: 40,
    borderRadius: 5,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
 logo:{
  height:"100%",
  display:"flex",
  width:"30%",
 },
 logoheader:{
  height:"10%",
  width:"100%",
  position:"absolute",
  top:40,
  display:"flex",
  flexDirection:"row",

 },
 footer:{
  backgroundColor: "black",
  height:"10%",
  width:"100%",
  position:"absolute",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  bottom:0,
  flexDirection:"row",
 },
 footertext:{
  color: "white",
 },
 firstpic:{
  height:"100%",
  width:"100%",
 },
 secondpic:{
  height:"30%",
  width:"100%",
 },
 firstrow:{
  display:"flex",
  flexDirection:"column",
  backgroundColor:"red",
  height:"25%",
  width:"100%",
  position:"absolute",
  top:30,
 },

});
export default Counter;

