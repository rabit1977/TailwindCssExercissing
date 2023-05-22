'use client';
import React, { useState } from 'react';
import { auth } from '../../components/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to home page or dashboard
      router.push('/');
    } catch (error) {
      // Handle error
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full px-6 py-12 bg-white shadow-md rounded-lg'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
          Sign up for a new account
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
              id='email'
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
              id='password'
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
            Sign up
          </button>
        </form>
      </div>
      <SignOut />
    </div>
  );
}

function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Sign out the current user
      await signOut(auth);
      // Redirect to home page or sign in page
      router.push('/signin');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full px-6 py-12 bg-white shadow-md rounded-lg'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
          You are signed in
        </h2>
        <button
          onClick={handleSignOut}
          className='w-full py-2 px-4 border border-transparent rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default SignUp;
