"use client";

import React, { useState, ChangeEvent } from 'react';
import { useParams } from 'next/navigation';
import { GAMES } from '../../data/games';

interface GamePackage {
  id: number;
  name: string;
  price: number;
}

interface OrderForm {
  userId: string;
  server: string;
  promoCode: string;
}

export default function GameTopupPage() {
  const params = useParams();
  const gameId = params.id as string;

  const gameInfo = GAMES.find(g => g.id === gameId);

  const [selectedPackage, setSelectedPackage] = useState<GamePackage | null>(null);
  const [formData, setFormData] = useState<OrderForm>({
    userId: '',
    server: '',
    promoCode: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!gameInfo) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">ไม่พบข้อมูลเกม (Game Not Found)</h1>
      </div>
    );
  }

  const packages: GamePackage[] = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: `แพ็กเกจ ${i + 1}`,
    price: (i + 1) * 150,
  }));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePurchase = async (): Promise<void> => {
    if (!selectedPackage) return alert("กรุณาเลือกแพ็กเกจที่ต้องการ");
    if (!formData.userId) return alert("กรุณากรอก User ID");
    if (!formData.server) return alert("กรุณาเลือกเซิร์ฟเวอร์");

    try {
      setIsSubmitting(true);
      
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          gameName: gameInfo.name,
          gameId: gameId,
          packageId: selectedPackage.id,
          amount: selectedPackage.price,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      alert(`เติมเงิน ${gameInfo.name} สำเร็จ!`);
      
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "เกิดข้อผิดพลาดในการเชื่อมต่อ";
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
          {gameInfo.name}
        </h1>
      </div>

      <div className="relative w-full h-48 md:h-64 mb-12 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 border border-gray-100">
        <img 
          src={gameInfo.image} 
          alt={gameInfo.name} 
          className="object-contain w-full h-full p-4" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className={`bg-gray-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs`}>1</span>
              เลือกแพ็กเกจ
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  disabled={isSubmitting}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 border-2 rounded-lg text-left transition-all active:scale-[0.98] ${
                    selectedPackage?.id === pkg.id 
                    ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-100 font-bold' 
                    : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <div className="text-sm text-gray-600 mb-1">{pkg.name}</div>
                  <div className="text-lg text-blue-900">{pkg.price} บาท</div>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className={`bg-gray-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs`}>2</span>
              ข้อมูลตัว ID
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">User ID (UID)*</label>
                <input
                  name="userId"
                  type="text"
                  value={formData.userId}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="กรอก ID ของคุณ"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">เซิร์ฟเวอร์*</label>
                <select
                  name="server"
                  value={formData.server}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 rounded-lg p-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">กรุณาเลือกเซิร์ฟเวอร์</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="america">America</option>
                </select>
              </div>
            </div>
          </section>

          <button
            onClick={handlePurchase}
            disabled={isSubmitting || !selectedPackage}
            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 ${
              isSubmitting || !selectedPackage ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? "กำลังส่งข้อมูล..." : `เติมเงินให้ ${gameInfo.name} (${selectedPackage?.price || 0} บาท)`}
          </button>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-8">
            <h3 className="font-bold text-gray-800 mb-4 underline decoration-blue-500 decoration-2 underline-offset-4">สรุปการสั่งซื้อ</h3>
            <div className="space-y-3 text-sm text-gray-600 border-b pb-4">
              <div className="flex justify-between">
                <span>เกม:</span>
                <span className="font-medium text-gray-900">{gameInfo.name}</span>
              </div>
              <div className="flex justify-between">
                <span>แพ็กเกจ:</span>
                <span className="font-medium text-gray-900">{selectedPackage?.name || '-'}</span>
              </div>
              <div className="flex justify-between">
                <span>ราคา:</span>
                <span className="font-bold text-blue-600">{selectedPackage ? `${selectedPackage.price} บาท` : '-'}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}