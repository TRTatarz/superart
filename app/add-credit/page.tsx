import React from 'react';
import { QrCode, Smartphone, CreditCard } from 'lucide-react';

export default function AddCreditPage() {
  const paymentMethods = [
    {
      id: 'promptpay',
      icon: <QrCode className="w-8 h-8 mb-2" />,
      title: 'QR Promt Pay',
      subtitle: '(ชำระเงินด้วยพร้อมเพย์)',
      fee: 'ไม่มีค่าธรรมเนียม',
    },
    {
      id: 'mobilebanking',
      icon: <Smartphone className="w-8 h-8 mb-2" />,
      title: 'Mobile Banking',
      subtitle: '(ชำระเงินด้วยโมบายแบงก์กิ้ง SCB/BAY/KTB)',
      fee: 'ค่าธรรมเนียม 10 บาทต่อรายการ',
    },
    {
      id: 'creditcard',
      icon: <CreditCard className="w-8 h-8 mb-2" />,
      title: 'Credit Card / Line Wallet',
      subtitle: '(ชำระเงินด้วยบัตรเครดิตหรือ Line Wallet)',
      fee: 'ค่าธรรมเนียม 3.5% ต่อรายการ',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">เติมเงินเครดิต</h1>
      </div>

      <div className="space-y-8">
        <section>
          <p className="mb-4 text-gray-800">
            กรุณาเติม "เครดิต" ก่อนเป็นอันดับแรก เพื่อนำ "เครดิต" ไปใช้ "เติมเงินเกม" โดยอัตราแลกเปลี่ยนคือ 1 บาท สามารถแลกได้ 1 เครดิต (1:1)
          </p>
          <div className="text-sm text-gray-700 space-y-1">
            <p className="font-semibold">วิธีเติมเครดิต</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>กรอกจำนวนเงิน (บาท) ที่คุณต้องการใช้ซื้อเครดิตในช่องด้านล่าง</li>
              <li>กรอกเป็นจำนวนเงินเต็มเท่านั้น เช่น 100/1500/5000 และไม่ต้องใส่ทศนิยม</li>
              <li>เลือกช่องทางการชำระเงินที่คุณต้องการ</li>
              <li>กดปุ่ม "ยืนยันการทำรายการ"</li>
              <li>เมื่อชำระเงินเสร็จ กรุณารอสักครู่ระบบจะทำการเติมเครดิตให้คุณทันที</li>
              <li>คุณสามารถตรวจสอบสถานะการชำระเงินได้ที่ ข้อมูลสมาชิก&gt;ประวัติการเติมเครดิต</li>
              <li>ธุรกรรมที่ชำระเงินผ่าน SpayLater จะไม่สามารถขอคืนเงินหรือถอนเครดิตได้</li>
              <li>หากชำระเงินด้วยบัตรเครดิตแล้วต้องการขอคืนเงิน กรุณาติดต่อธนาคารเจ้าของบัตรโดยตรงเท่านั้น เพื่อแจ้งเรื่องหรือทำเรื่องปฏิเสธรายการ</li>
            </ol>
          </div>
        </section>

        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">จำนวนเงินที่ต้องการเติม:</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">ช่องทางการชำระเงิน</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className="border border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="border border-gray-400 rounded-full p-3 mb-4">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{method.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{method.subtitle}</p>
                <p className="text-sm text-gray-500 mt-2">{method.fee}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <p className="text-sm text-gray-700 mb-6">
            กรุณาอ่าน <a href="#" className="text-blue-600 hover:underline">"เงื่อนไขและการให้บริการ"</a> ก่อนกดปุ่ม "ยืนยันการทำรายการ"<br />
            หากคุณกดปุ่มยืนยันการทำรายการแล้ว บริษัทจะถือว่าเป็นการยอมรับเงื่อนไขแล้ว
          </p>
          <button className="w-full border border-gray-300 py-4 font-semibold hover:bg-gray-100 transition-colors">
            ยืนยันการทำรายการ
          </button>
        </section>
      </div>
    </div>
  );
}
