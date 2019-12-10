import firebase from 'react-native-firebase';

const EXPRESS_LINES_COLLECTION = 'expressLines';

export const expressLinesQuery = () => {
    const db = firebase.firestore();
    return db.collection(EXPRESS_LINES_COLLECTION);
};

export const onSnapshotsExpressLines = (eventChanges) => {
    expressLinesQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getExpressLines = async() => {
    const busesArreglo = [];
    const snapshotsExpressLines = await expressLinesQuery().get();
    snapshotsExpressLines.forEach((documento) => {
        busesArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return busesArreglo;
};

export const addExpressLines = async(data) => {
    await ExpressLinesQuery().add(data);
};

export const updateExpressLines = async(id, data) => {
    await ExpressLinesQuery().doc(id).update(data);
};

export const deleteExpressLines = async(id) => {
    await ExpressLinesQuery().doc(id).delete();
};