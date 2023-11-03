import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    paddingHorizontal: 3,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 30,
  },
  productContainer: {
    width: 180,
    height: 260,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.fifth,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    borderRadius: 15,
    position: 'absolute',
    top: -8,
    width: 180,
    height: 170,
  },
  title: {
    position: 'absolute',
    width: 150,
    bottom: 65,
    paddingStart: 12,
    fontSize: 14,
    color: 'black',
    textTransform: 'uppercase',
  },
  price: {
    position: 'absolute',
    bottom: 10,
    width: 100,
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.tertiary,
    borderColor: 'white',
    borderRadius: 5,
    paddingStart: 20,
    paddingTop: 5,
    fontSize: 20,
    color: 'white',
  },
});
