import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.contents}>

          <View style={styles.todoText}>
            <Text style={{fontSize: 40, fontWeight: "100", alignSelf: 'center', paddingTop: 7}}>
              ToDo List
            </Text>
          </View>

          <View style={styles.listContents}>
            <View style={[styles.itemContainer1, styles.itemCollective]}>
            <Text style={styles.text}>
                -Software Projects: Diagrams
              </Text>
            </View>

            <View style={[styles.itemContainer2, styles.itemCollective]}>
              <Text style={styles.text}>
                -Software Projects: Quiz Study
              </Text>
            </View>

            <View style={[styles.itemContainer3, styles.itemCollective]}>
            <Text style={styles.text}>
                -Mobile Development App: Lab 1
              </Text>
            </View>

            <View style={[styles.itemContainer4, styles.itemCollective]}>
            <Text style={styles.text}>
                -Database Programming: Lab 1
              </Text>
            </View>

          </View>
        </View>

        <View style={styles.legend}>

          <Text style={styles.fin}>
            Finished
          </Text>

          <Text style={styles.unfin}>
            Unfinished
          </Text>
        </View>

        <StatusBar style="auto" />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainView:
  {
    backgroundColor: '#faf0e6',
    borderRadius: 20,
    width: 325,
    height: 500,
    borderWidth: 5,
    borderColor: '#f08080',
  },

  todoText:
  {
    alignSelf: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: 'white',
    height: 60,
    width: 315,
  },

  listContents:
  {
    alignSelf: 'center',
  },

  itemCollective:
  {
    marginTop: 40,
    paddingTop: 10,
    height: 40,
    width: 250,
    borderRadius: 25,
  },

  itemContainer1:
  {
    backgroundColor: '#e9967a',
    
  },

  itemContainer2:
  {
    backgroundColor: '#e9967a',
    
  },

  itemContainer3:
  {
    backgroundColor: '#8fbc8f',
    
  },

  itemContainer4:
  {
    backgroundColor: '#8fbc8f',
    
  },

  text:
  {
    alignSelf: 'center',
  },

  legend:
  {
    flex:1,
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },

  fin:
  {
    marginRight: 45,
    color: '#8fbc8f',
  },

  unfin:
  {
    color: '#e9967a',
  },
});
