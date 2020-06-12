import FirebaseKeys from './config'
import  firebase from 'firebase'
import '@firebase/firestore'

class Fire{
    
    construct (){
        firebase.initializeApp(FirebaseKeys)
    }

    addPost = async ({text,localUri})=>{
        console.log('invoked add post')
        const remoteUri = await this.uploadPhotoAsync(localUri) 
        return new Promise((res,rej)=>{
        firebase.firestore().collection("posts").add({
                text,
                uid:this.uid,
                timestamp:this.timestamp,
                image:remoteUri
            })
            .then(ref=>{
                res(ref)
            })
           .catch(error=>{
               rej(error)
           })
        })
      }

      uploadPhotoAsync = async uri =>{
          const path = `photos/ ${this.uid}/${Date.now()}.jpg`
          return new Promise(async(res,rej)=>{

              const response = await fetch(uri)
              const file = await response.blob()

              
              let upload = firebase .storage().ref(path).put(file)
              upload.on(
                  "state_changed",
                  snapshot=>{},
                  err =>{
                      rej(err)
                  },
                  async()=>{
                      const url = await upload.snapshot.ref.getDownloadURL
                      res(url)
                  }
              )
          })

        //   return  async()=> {
        //       const response = await fetch(uri)
        //       const file = await response.blob()

        //       let upload = firebase .storage().ref(path).put(file)
        //       upload.on(
        //           "state_changed",
        //           snapshot=>{},
        //           err =>{
        //             //   rej(err)
        //           },
        //           async()=>{
        //               const url = await upload.snapshot.ref.getDownloadURL
        //             //   res(url)
        //           }
        //       )
        //   }
      }

    // get firestore(){
    //     return firebase.firestore()
    // }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return Date.now()
    }


}

Fire.shared = new Fire()

export default Fire