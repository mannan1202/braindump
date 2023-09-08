import Register from '@/components/Register';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <Register />
      <div className="text-sm mt-5 self-center">
        or{' '}
        <Link href="login" className="underline font-bold">
          Login
        </Link>
      </div>
    </div>
  );
}
