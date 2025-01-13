'use client';

import Button from '@/common/components/Button/Button';
import Input from '@/common/components/Input/Input';
import { useLocalStorage } from '@/common/hooks/useLocalStorage';
import { login } from '@/modules/auth/services/login';
import { useState } from 'react';
// import { useLocalStorage } from "@uidotdev/usehooks"

import Image from 'next/image';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

const Login = ({}) => {
  const [accessToken, setAccessToken] = useLocalStorage('access-token', null);

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const response = await login(form);
      setAccessToken(response.data.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      toast.success('Login Success');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message || 'Something went wrong');
    }
  };

  if (accessToken) {
    redirect('/dashboard');
  }

  return (
    <main className=" flex min-h-[100vh] w-full items-center justify-between">
      <div className="container max-w-[500px] flex-grow-[1]">
        <form
          onSubmit={handleLogin}
          className="mt-14 flex min-w-[360px] flex-col gap-6"
        >
          <h1 className="text-center text-display font-bold">Admin Login</h1>
          <div>
            <label htmlFor="username" className="text-xl font-semibold">
              Username
            </label>
            <Input
              inputProps={{
                type: 'text',
                name: 'username',
              }}
              onInput={(value) => setForm({ ...form, username: value })}
            />
          </div>
          <div>
            <label htmlFor="username" className="text-xl font-semibold">
              Password
            </label>
            <Input
              inputProps={{
                type: 'password',
                name: 'password',
              }}
              onInput={(value) => setForm({ ...form, password: value })}
            />
          </div>
          <div className="flex w-full flex-col">
            <Button type={'fill'} isLoading={isLoading}>
              LOGIN
            </Button>
          </div>
        </form>
      </div>
      <div className="relative hidden aspect-[540/1024] h-[100vh] self-end md:block">
        <Image
          src={'/image/background/bg-login.png'}
          fill={true}
          alt="background"
        />
      </div>
    </main>
  );
};

export default Login;
