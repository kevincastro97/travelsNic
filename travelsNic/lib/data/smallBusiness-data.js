import firebase from 'react-native-firebase';

const SMALL_BUSINESS_COLLECTION = 'smallBusiness';

export const smallBusinessQuery = () => {
    const db = firebase.firestore();
    return db.collection(SMALL_BUSINESS_COLLECTION);
};

export const onSnapshotsSmallBusiness = (eventChanges) => {
    smallBusinessQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getSmallBusiness = async() => {
    const smallBusinessArreglo = [];
    const snapshotsSmallBusiness = await smallBusinessQuery().get();
    snapshotsSmallBusiness.forEach((documento) => {
        smallBusinessArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return smallBusinessArreglo;
};

export const addSmallBusiness = async(data) => {
    await smallBusinessQuery().add(data);
};

export const updateSmallBusiness = async(id, data) => {
    await smallBusinessQuery().doc(id).update(data);
};

export const deleteSmallBusiness = async(id) => {
    await smallBusinessQuery().doc(id).delete();
};