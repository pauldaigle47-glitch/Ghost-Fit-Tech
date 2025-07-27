import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-pink-400 mb-6">{isSignup ? 'Create Account' : 'Login to Ghost Fit Tech'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 bg-black border border-gray-600 rounded text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 bg-black border border-gray-600 rounded text-white"
          required
        />
        <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 py-2 rounded-lg font-bold">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
        <p className="mt-4 text-center text-sm text-green-400 cursor-pointer" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Login' : 'New here? Create an account'}
        </p>
      </form>
    </div>
  );
}