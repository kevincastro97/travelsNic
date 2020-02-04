import firebase from 'react-native-firebase';

const COORDINATE_MAP_COLLECTION = 'coordinateMap';

export const coordinateMapQuery = () => {
    const db = firebase.firestore();
    return db.collection(COORDINATE_MAP_COLLECTION);
};

export const addCoordinateMap = async(data) => {
    await coordinateMapQuery().add(data);
};