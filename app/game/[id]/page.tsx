import React from 'react';
import Image from 'next/image';

export default function GameTopupPage() {
  const packages = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: 'ข้อมูล',
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">ชื่อเกม</h1>
      </div>

      <div className="w-full h-48 md:h-64 relative border border-gray-300 mb-12 bg-gray-50 overflow-hidden flex items-center justify-center">
        <span className="text-gray-800 font-medium z-10">Banner</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h2 className="text-2xl font-semibold">เลือกแพ็กเกจ (Select Package)</h2>
              <div className="text-sm text-gray-600">
                <p>หมายเหตุ</p>
                <p>- 1 บาทมีค่าเท่ากับ 1 เครดิต กรุณาเติมเครดิตให้เพียงพอต่อการทำรายการในแต่ละครั้ง</p>
                <p>- ในกรณีที่ลูกค้ากรอกข้อมูลผิดและระบบได้ทำการเติมเงินไปแล้ว ลูกค้าจะไม่สามารถขอเครดิตคืนได้ทุกกรณี</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  className="border border-gray-300 py-4 px-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {pkg.name}
                </button>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User ID*</label>
              <input
                type="text"
                placeholder="กรอก"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เลือก Server*</label>
              <select
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                defaultValue=""
              >
                <option value="" disabled>เลือก Server</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">สตรีมเมอร์โค้ดหรือโปรโมชั่นโค้ด</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ราคาแพ็กเกจที่เลือก</label>
              <input
                readOnly
                className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:outline-none"
              />
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ยอดรวม</label>
              <input
                type="text"
                readOnly
                className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:outline-none"
              />
            </div>
            <button className="w-full border border-gray-300 py-4 font-semibold hover:bg-gray-100 transition-colors">
              ซื้อทันที
            </button>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="border border-gray-300 p-6 h-full flex flex-col">
            <h3 className="font-semibold mb-4">วิธีดู ID (UID) ของเกม CN334</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 mb-6">
              <li>คลิกที่รูป "ฟันเฟือง" มุมขวาบนของจอ</li>
              <li>จากนั้นจะปรากฏหน้าตั้งค่าขึ้นมา ให้ไปที่แถบ "เกม" เลข ID ทั้งหมด 10 หลักจะขึ้นด้านล่าง (67....)</li>
            </ol>
            
            <div className="w-full aspect-video relative border border-gray-300 mb-6 bg-gray-100 flex items-center justify-center overflow-hidden">
              <span className="text-gray-800 text-sm">Image</span>
            </div>

            <div className="text-sm text-gray-700 space-y-3">
              <p className="font-semibold">หมายเหตุ</p>
              <p>- กรุณาใส่เลข UID ให้ครบและถูกต้อง</p>
              <p>- หากข้อมูลที่กรอกไม่ตรงกับข้อมูลในเกม ระบบจะยกเลิกรายการและคืนเครดิตให้กับลูกค้าทันที</p>
              <p>- ระบบจะใช้เวลาประมาณ 5-10 นาทีในการทำรายการ</p>
              <p>- หากทำการเติมเงินเข้าเกมแล้ว ไม่สามารถขอยกเลิกหรือขอคืนเงินได้</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
