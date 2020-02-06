import firebase from 'react-native-firebase';

const HOTEL_AND_RESTAURANT_COLLECTION = 'hotelAndRestaurant';

export const hotelAndRestaurantQuery = () => {
    const db = firebase.firestore();
    return db.collection(HOTEL_AND_RESTAURANT_COLLECTION);
};

export const addHotelAndRestaurant = async(data) => {
    await hotelAndRestaurantQuery().add(data);
};