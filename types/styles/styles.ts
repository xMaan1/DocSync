import { StyleSheet } from 'react-native';
import { Colors } from '../colors/colors';

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
  },

  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 8,
  },
  inputGroup: {
    marginBottom: 16,
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
    marginHorizontal: 16,
    marginVertical: 8,
    gap: 12,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    padding: 16,
    borderRadius: 12,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardColumn: {
    marginHorizontal: 16,
  },
  card2: {
    backgroundColor: Colors.cardBackground,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardNumber1: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
  },
  cardNumber2: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.success,
  },
  cardTitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
    minHeight: 44,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: Colors.success,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 12,
    minHeight: 44,
  },
  changePasswordButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 12,
    minHeight: 44,
  },
  deleteButton: {
    backgroundColor: Colors.danger,
    paddingVertical: 16,
    borderRadius: 8,
    minHeight: 44,
  },
  buttonsSection: {
    marginTop: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
  },

  authInput: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: Colors.white,
    fontSize: 16,
  },
  authButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    minHeight: 44,
  },
  authButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  
  linkContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    color: Colors.primary,
    fontWeight: '600',
  },

  dropdown: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    fontSize: 16,
  },
  dropdownAuth: {
    width: '100%',
    minHeight: 44,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: Colors.white,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.placeholder,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.text,
  },

  indicatorContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  dashboardHeaderTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'left',
  },
  dashboardHeaderSubtitle: {
    fontSize: 16,
    color: Colors.white,
    marginTop: 4,
    textAlign: 'left',
  },
  textContainer: {
    flex: 1,
  },
});