import firebase from 'react-native-firebase';

const COORDINATE_MAP_COLLECTION = 'coordinateMap';

export const coordinateMapQuery = () => {
    const db = firebase.firestore();
    return db.collection(COORDINATE_MAP_COLLECTION);
};

export const onSnapshotsCoordinateMap = (eventChanges) => {
    coordinateMapQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getCoordinateMap = async() => {
    const coordinateMapArreglo = [];
    const snapshotsCoordinateMap = await coordinateMapQuery().get();
    snapshotsCoordinateMap.forEach((documento) => {
        coordinateMapArreglo.push({
            id: documento.id, 
            ...documento.data(),
        });
    });
    return coordinateMapArreglo;
};
