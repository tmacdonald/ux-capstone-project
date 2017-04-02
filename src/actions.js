import { database } from './firebase'

export const retrieveDatabaseEntry = (type, ref) => (dispatch) => {
    dispatch({ type, subtype: 'RETRIEVE' })
    database.ref(ref).once('value').then((snapshot) => {
        const data = snapshot.val()
        if (data) {
            dispatch({ type, subtype: 'SUCCESS', data: data })
        } else {
            dispatch({ type, subtype: 'FAILURE', error: 'no data' })
        }
    }, (error) => {
        dispatch({ type, subtype: 'FAILURE', error })
    })
}

export const writeMessage = (message) => {
    const data = { message }

    const key = database.ref().child('messages').push().key

    const updates = {}
    updates['/messages/' + key] = data
    
    return database.ref().update(updates)
}

export const writePost = (post) => {
    const newPostRef = database.ref('posts').push()
    newPostRef.set(post)
}

export const retrieveMessages = retrieveDatabaseEntry('RETRIEVE_MESSAGES', 'messages')