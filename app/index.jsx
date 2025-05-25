import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        contentFit="cover"
        //resizeMode="cover"
        style={styles.image}
        >
      
        <Text style={styles.title}>Coffee Shop</Text>
      
        <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      
      
      </ImageBackground>
    </View>
  )
}

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    //backgroundColor: 'grey',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    marginBottom: 20
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 4
  },
  button: {
    height: 60,
    borderRadius: 20, 
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.75)',
    padding: 6
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  }
});