import { User } from '../context/Auth';
import firebase from './firebaseConfig';
import { UserAlarm } from './interfacesServices';

export const getUserAlarms = async (userId :string) => {
  const activeUser  = `users/${userId}`
  let userAlarms:UserAlarm[] = [];

    try {
      await firebase.database().ref(activeUser).once('value', (user) => {
        userAlarms = user.val().Alarms
      })

      return userAlarms;
    } catch (error) {
      console.log(error);
    }
};

export const createdAlarm = async (userId: string, AlarmData:UserAlarm[]) => {
  const newAlarm = await firebase.database().ref('users').child(userId)
    newAlarm.update({
        Alarms: AlarmData
    })
}

export const createdNewUserForDataBase = async(userData: User) =>{
    const newUser = await firebase.database().ref('users')

    newUser.child(userData.id).update({
            email: userData.email, 
            name: userData.name,
            photo: userData.photo,
  })
}