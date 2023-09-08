import Login from '@/components/Login';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <Login />
      <div className="text-sm mt-5 self-center">
        or{' '}
        <Link href="register" className="underline font-bold">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
