import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBwApVssAHZjh9muXptbjEW72t05s3kiF0",
    authDomain: "ux-capstone-project-e97f9.firebaseapp.com",
    databaseURL: "https://ux-capstone-project-e97f9.firebaseio.com",
    projectId: "ux-capstone-project-e97f9",
    storageBucket: "ux-capstone-project-e97f9.appspot.com",
    messagingSenderId: "527227749916"
}

const firebaseApp = firebase.initializeApp(config)
const database = firebaseApp.database()

export { database }
export default firebaseApp