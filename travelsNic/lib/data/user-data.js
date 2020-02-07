import firebase from 'react-native-firebase';

const USERS_COLLECTION = 'users';

export const usersQuery = () => {
    const db = firebase.firestore();
    return db.collection(USERS_COLLECTION);
};

export const getUserById = async(uid) => {
    const db = firebase.firestore();
    const user = await db.collection(USERS_COLLECTION).doc(uid).get();
    console.log("User Await", user.data());
    if(user.exists) {
        return {
            id: user.id,
            ...user.data(),
        };
    }
    else {
        return null;
    }
};

export const addUsers = async(data, uid) => {
    console.log("UID USER: ", uid);
    await usersQuery().doc(uid).set(data);
};

export const updateUsers = async(id, data) => {
    await usersQuery().doc(id).update(data);
};

export const deleteUsers = async(id) => {
    await usersQuery().doc(id).delete();
};