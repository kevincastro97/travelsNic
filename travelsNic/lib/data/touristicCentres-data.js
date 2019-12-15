import firebase from 'react-native-firebase';

const TOURISTIC_CENTRES_COLLECTION = 'touristicCentres';

export const touristicCentresQuery = () => {
    const db = firebase.firestore();
    return db.collection(TOURISTIC_CENTRES_COLLECTION);
};

export const onSnapshotsTouristicCentres = (eventChanges) => {
    touristicCentresQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getTouristicCentres = async() => {
    const touristicCentresArreglo = [];
    const snapshotsTouristicCentres = await touristicCentresQuery().get();
    snapshotsTouristicCentres.forEach((documento) => {
        touristicCentresArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return touristicCentresArreglo;
};

export const addTouristicCentres = async(data) => {
    await touristicCentresQuery().add(data);
};

export const updateTouristicCentres = async(id, data) => {
    await touristicCentresQuery().doc(id).update(data);
};

export const deleteTouristicCentres = async(id) => {
    await touristicCentresQuery().doc(id).delete();
};