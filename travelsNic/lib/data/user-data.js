import firebase from 'react-native-firebase';

const USERS_COLLECTION = 'users';

export const usersQuery = () => {
    const db = firebase.firestore();
    return db.collection(USERS_COLLECTION);
};

export const addUsers = async(data) => {
    await usersQuery().add(data);
};

export const updateUsers = async(id, data) => {
    await usersQuery().doc(id).update(data);
};

export const deleteUsers = async(id) => {
    await usersQuery().doc(id).delete();
};