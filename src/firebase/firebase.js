import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBsBGkLvwUH3EZQrcTYwciVNqQDwpYgjc",
    authDomain: "expensify-21871.firebaseapp.com",
    projectId: "expensify-21871",
    storageBucket: "expensify-21871.appspot.com",
    messagingSenderId: "1003518044568",
    appId: "1:1003518044568:web:89b15b81c24f1d767be3ed",
    measurementId: "G-6Q8KXXH46D"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db as default }

//adding the document to the collection "users"
//document id is given by firebase automatically
// async function addData(){
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }


// addData()

// const data = {
//   country: "India",
//   name: "Wasim",
//   state: "Karantaka"
// }

// // Add a new document with a generated id
// const newCityRef = doc(collection(db, "cities"));

// //adding doc id to the data
// console.log(newCityRef)

// // later...
// setDoc(newCityRef, data);


// Add/update a new document in collection "cities"
//here we need to give document id
// setDoc(doc(db, "cities", "armin"), {
//   name: "armin",
//   state: "mainland",
//   country: "marley"
// });


// //deleting document from the collection
// deleteDoc(doc(db, "cities", "armin"));
 
// const expenses = []
// // //reading the document from the collection
// async function readData(){
//   const querySnapshot = await getDocs(collection(db, "cities"));
//   console.log(querySnapshot)
//   querySnapshot.forEach((doc) => {
//     console.log(doc)
    
//   });
// }



// readData()
// console.log(expenses)


// const unsub = onSnapshot(collection(db, "cities"), (snapshot) => {
//   snapshot.docChanges().forEach((change) => {
//     if (change.type === "added") {
//       console.log("New city: ", change.doc.data());
//   }
//   if (change.type === "modified") {
//       console.log("Modified city: ", change.doc.data());
//   }
//   if (change.type === "removed") {
//       console.log("Removed city: ", change.doc.data());
//   }
//   })
// });