import firebase from 'react-native-firebase';

const HOTEL_AND_RESTAURANT_COLLECTION = 'hotelAndRestaurant';

export const hotelAndRestaurantQuery = () => {
    const db = firebase.firestore();
    return db.collection(HOTEL_AND_RESTAURANT_COLLECTION);
};

export const onSnapshotsHotelAndRestaurant = (eventChanges) => {
    hotelAndRestaurantQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getHotelAndRestaurant = async() => {
    const hotelAndRestaurantArreglo = [];
    const snapshotsHotelAndRestaurant = await hotelAndRestaurantQuery().get();
    snapshotsHotelAndRestaurant.forEach((documento) => {
        hotelAndRestaurantArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return hotelAndRestaurantArreglo;
};

export const addHotelAndRestaurant = async(data) => {
    await hotelAndRestaurantQuery().add(data);
};

export const updateHotelAndRestaurant = async(id, data) => {
    await hotelAndRestaurantQuery().doc(id).update(data);
};

export const deleteHotelAndRestaurant = async(id) => {
    await hotelAndRestaurantQuery().doc(id).delete();
};