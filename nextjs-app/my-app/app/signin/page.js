'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../components/firebase/firebase';
import { useRouter } from 'next/navigation';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate and sign in logic here
    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Redirect to home page or dashboard
        router.push('/');
      })
      .catch((error) => {
        // Handle error
        const errorCode = error.code;
        const errorMessage = error.message;
        // set error message if any
        setErrorMessage(errorMessage);
      });
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full px-6 py-12 bg-white shadow-md rounded-lg'>
        <h1>{email}</h1>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email address
            </label>
            <input
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Password
            </label>
            <input
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
              required
            />
          </div>
          {errorMessage && (
            <p className='text-sm text-red-600 mb-4'>{errorMessage}</p>
          )}
          <button
            type='submit'
            className={`w-full py-2 px-4 border border-transparent rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              !email || !password ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!email || !password}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
