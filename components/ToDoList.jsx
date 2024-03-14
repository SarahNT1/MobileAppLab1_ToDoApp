/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';


function ToDoList({tasks}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable>
          {tasks.map((task, index) => (
            <View style={[styles.task]}>
              <Text key={index} style={[styles.taskText]}>
                {task}
              </Text>
            </View>
          ))}

          {/* <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View> */}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  }
});

export default ToDoList;
