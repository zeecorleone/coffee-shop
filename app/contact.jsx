import { StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    
    <View>
      <Text>This is Contact Us</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
