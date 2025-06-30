import { StyleSheet } from 'react-native';
import { Colors } from '../colors/colors';

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  header: {
    height: 120,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerYellow: {
    backgroundColor: Colors.yellow,
  },
  headerGreen: {
    backgroundColor: Colors.green,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginLeft: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },

  textContainer: {
    flex: 1,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputGroup: {
    marginBottom: 20,
  },
  addressInput: {
    height: 80,
    textAlignVertical: 'top',
  },

  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    color: Colors.text,
  },

  cardRow: {
    flexDirection: 'row',
    margin: 20,
    gap: 15,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    width: '48%',
  },
  cardColumn: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  card2: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    width: '95%',
    marginTop: 20,
  },
  cardNumber1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.blue,
  },
  cardNumber2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.green,
  },
  cardTitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 5,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: Colors.success,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  changePasswordButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  deleteButton: {
    backgroundColor: Colors.danger,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonsSection: {
    marginTop: 30,
    marginBottom: 40,
  },

  authInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: 5,
    marginBottom: 20,
  },
  authButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  authButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },

  dropdown: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  dropdownAuth: {
    width: '100%',
    height: 50,
    borderColor: Colors.borderLight,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
    backgroundColor: Colors.white,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.textLight,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.text,
  },

  indicatorContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ProfileStyles = StyleSheet.create({
  profilePhotoSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    position: 'relative',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profilePhotoText: {
    fontSize: 40,
    color: Colors.text,
  },
  changePhotoIcon: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePhotoText: {
    fontSize: 16,
    color: Colors.white,
  },
  tapToChangeText: {
    marginBottom: 20,
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  formSection: {
    paddingHorizontal: 20,
  },
});

export const DashboardStyles = StyleSheet.create({
  section1: {
    height: 135,
    padding: 20,
    flexDirection: 'row',
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  doctorHeader: {
    backgroundColor: Colors.yellow,
  },
  patientHeader: {
    backgroundColor: Colors.green,
  },
  dashboardHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'left',
  },
  dashboardHeaderSubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 10,
    textAlign: 'left',
  },
});
