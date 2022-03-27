import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc ,updateDoc,doc,deleteDoc} from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRvnCQ9biY7e5u2DwGtDuXPIeNbAZ_44",
  authDomain: "khuay-coffee.firebaseapp.com",
  projectId: "khuay-coffee",
  storageBucket: "khuay-coffee.appspot.com",
  messagingSenderId: "532668944274",
  appId: "1:532668944274:web:4d8c940a8c58f7c46e3b4b",
  measurementId: "G-MRDEJCDK7E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const CUSTOMER="Customer";
export const ORDER="OrderDetail";
export const PRODUCT="Product";
export const CART="Cart";

export async function getData(colId, db){
  const col= collection(db ,colId);
  const snapshot=await getDocs(col);
  const dataList=snapshot.docs.map(docref=> {
    const a=docref.data();
    return {...a,docId:docref.id}
  });
  
  return dataList;
}

export async function deleteData(docId, colId,db){
  const docref= doc(db,colId+"/"+docId);
  deleteDoc(docref).then(
    ()=>console.log("Xóa doc thành công")
  ).catch(
    ()=>console.log("Xóa doc không thành công")
  )
}

export async function updateData(docData, docId, colId, db){
  const docref= doc(db,colId+"/"+docId);
  console.log(docref)
  updateDoc(docref,docData).then(
    ()=>console.log("update data thành công")
  ).catch(
    ()=>console.log("update data không thành công")
  )
}

export async function addData(docData,colId,db){
  const col= collection(db,colId);
  addDoc(col, docData).then(
    ()=>console.log("thêm data thành công")
  ).catch(
    ()=>console.log("thêm data không thành công")
  )
}
