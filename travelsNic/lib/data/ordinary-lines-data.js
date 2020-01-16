import firebase from 'react-native-firebase';

const ORDINARY_LINES_COLLECTION = 'ordinaryLines';

export const ordinaryLinesQuery = () => {
    const db = firebase.firestore();
    return db.collection(ORDINARY_LINES_COLLECTION);
};

export const onSnapshotsOrdinaryLines = (eventChanges) => {
    ordinaryLinesQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getOrdinaryLines = async() => {
    const busesArreglo = [];
    const snapshotsOrdinaryLines = await ordinaryLinesQuery().get();
    snapshotsOrdinaryLines.forEach((documento) => {
        busesArreglo.push({
            id: documento.id, 
            ...documento.data(),
        });
    });
    return busesArreglo;
};

export const addOrdinaryLines = async(data) => {
    await ordinaryLinesQuery().add(data);
};

export const updateOrdinaryLines = async(id, data) => {
    await ordinaryLinesQuery().doc(id).update(data);
};

export const deleteOrdinaryLines = async(id) => {
    await ordinaryLinesQuery().doc(id).delete();
};