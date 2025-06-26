import { View, Text, ScrollView, TouchableHighlight, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';

export default function DocumentsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.title}>My Documents</Text>
      </View>
      
      <ScrollView style={styles.content}>

        <TouchableHighlight style={styles.documentCard}>
          <View style={styles.documentContent}>
            <Text style={styles.icon}>📄</Text>
            <View style={styles.info}>
              <Text style={styles.fileName}>Project Report.pdf</Text>
              <Text style={styles.fileDetails}>2.5 MB • Jun 25, 2025</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.documentCard}>
          <View style={styles.documentContent}>
            <Text style={styles.icon}>📄</Text>
            <View style={styles.info}>
              <Text style={styles.fileName}>Meeting Notes.docx</Text>
              <Text style={styles.fileDetails}>1.2 MB • Jun 24, 2025</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.documentCard}>
          <View style={styles.documentContent}>
            <Text style={styles.icon}>📊</Text>
            <View style={styles.info}>
              <Text style={styles.fileName}>Budget 2025.xlsx</Text>
              <Text style={styles.fileDetails}>800 KB • Jun 23, 2025</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.documentCard}>
          <View style={styles.documentContent}>
            <Text style={styles.icon}>📋</Text>
            <View style={styles.info}>
              <Text style={styles.fileName}>Presentation.pptx</Text>
              <Text style={styles.fileDetails}>5.1 MB • Jun 22, 2025</Text>
            </View>
          </View>
        </TouchableHighlight>

      </ScrollView>
      
      <TouchableHighlight style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Document</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    fontSize: 18,
    color: '#007AFF',
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  documentCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  documentContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fileDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#007AFF',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});