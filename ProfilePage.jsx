import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        const docRef = doc(db, 'users', firebaseUser.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setCart(snap.data().cart || []);
        }
      } else {
        navigate('/login');
      }
    });
    return () => unsub();
  }, [navigate]);

  const logout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-[#e0ffe0] px-6 py-10">
      <h1 className="text-4xl font-bold text-pink-400 mb-4">Your Profile</h1>
      {user && <p className="mb-6">Logged in as: <span className="text-green-400">{user.email}</span></p>}
      <h2 className="text-2xl font-semibold mb-3">Saved Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400 italic">Your saved cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, i) => (
            <li key={i} className="flex justify-between border-b border-gray-600 pb-2">
              <span>{item.title} × {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={logout} className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}