import * as bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Register
async function createAccount(formData: FormData) {
  'use server';

  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const hashPassword = await bcrypt.hash(password, 10);

  const body = {
    username: username,
    email: email,
    password: hashPassword,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  if (res.ok) {
    const data = await res.json();

    if (data.jwt) {
      cookies().set('session', data.jwt);
    }
  }

  // // Redirect to the login page after successful registration
  redirect('/dashboard');
}

// Login
async function login(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const body = {
    identifier: email,
    password: password,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  // const isMath = await bcrypt.compare(password, hashPassword);

  if (res.ok) {
    const data = await res.json();

    cookies().set('session', data.jwt);

    if (data.jwt) {
      redirect('/dashboard');
    }
  } else {
    console.log('ERRO NO LOGIN');
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

// Reset Pasword
async function resetPassword(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;

  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email }), // user's email
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Your user received an email');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

async function isSessionVaid() {
  const sessionCookie = cookies().get('session');
}

const authActions = {
  createAccount,
  login,
  resetPassword,
};

export default authActions;
