import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDHFt79o_P6pICyTJMH7tGt2QVC--3UKlo",
authDomain: "atividade-oauth-2f7cf.firebaseapp.com",
projectId: "atividade-oauth-2f7cf",
storageBucket: "atividade-oauth-2f7cf.firebasestorage.app",
messagingSenderId: "1092013102277",
appId: "1:1092013102277:web:43a3d54bfc0d1a1cea8cac"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
