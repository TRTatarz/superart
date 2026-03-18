import React from 'react';
import { MessageCircle, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border border-gray-300 p-8 md:p-16 text-center bg-white shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          ช่องทางการติดต่อทีมงาน แจ้งปัญหาการใช้งานเว็บไซต์ต่างๆ
        </h1>
        
        <p className="text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          หากพบปัญหาการใช้งานเว็บไซต์หรือมีข้อสงสัยในการใช้งานเว็บไซต์ สามารถติดต่อทีมงานได้ ผ่านช่องทางสนทนา Line Official Account หรือทาง Facebook เรา พร้อมให้บริการคุณอย่างทันท่วงที ทำงานว่องไวทันใจไม่ให้คุณต้องรอนาน กรุณาเลือกช่องทางติดต่อโดยกดที่ลิงก์ด้านล่างได้เลย
        </p>

        <div className="mb-24">
          <p className="text-gray-500 font-medium">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต 99 ม.18 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button className="flex items-center justify-center space-x-3 border border-gray-300 py-4 px-6 hover:bg-green-50 hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <span className="font-medium text-gray-800">ติดต่อผ่านไลน์</span>
          </button>
          
          <button className="flex items-center justify-center space-x-3 border border-gray-300 py-4 px-6 hover:bg-blue-50 hover:border-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Facebook className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-gray-800">ติดต่อผ่านเฟสบุ๊ค</span>
          </button>
        </div>
      </div>
    </div>
  );
}
