import Link from 'next/link';
import { UserPlus, LogIn, KeyRound } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center justify-center w-32 h-full border-r border-gray-300 font-semibold text-lg">
            Logo
          </Link>

          <nav className="hidden md:flex ml-6 space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">หน้าหลัก</Link>
            <Link href="/add-credit" className="text-gray-300 hover:text-white">เติมเงินเครดิต</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">ติดต่อทีมงาน</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <Link href="#" className="flex items-center text-gray-300 hover:text-white">
            <UserPlus className="w-4 h-4 mr-1" />
            สมัครสมาชิก
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="#" className="flex items-center text-gray-300 hover:text-white">
            <LogIn className="w-4 h-4 mr-1" />
            เข้าสู่ระบบ
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="#" className="flex items-center text-gray-300 hover:text-white">
            <KeyRound className="w-4 h-4 mr-1" />
            ลืมรหัสผ่าน
          </Link>
        </div>
      </div>
    </header>
  );
}
