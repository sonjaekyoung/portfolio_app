"use client";

import { useState } from "react";

export default function ProductButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* 팝업 버튼들: 메인 버튼 아래에 위치 */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col gap-3 transition-all duration-300 transform origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <a
          href="https://namingfactory.ai.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-6 py-2 bg-charcoal-900 text-gold-500 border border-gold-500/30 rounded-xl hover:bg-gold-500 hover:text-charcoal-900 transition-all shadow-xl backdrop-blur-sm text-sm font-bold text-center hover:scale-105"
        >
          상품명 제작소
        </a>
        <a
          href="https://www.ascendingdream.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-6 py-2 bg-charcoal-900 text-gold-500 border border-gold-500/30 rounded-xl hover:bg-gold-500 hover:text-charcoal-900 transition-all shadow-xl backdrop-blur-sm text-sm font-bold text-center hover:scale-105"
        >
          어센딩드림
        </a>
      </div>

      {/* 메인 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-8 py-3 bg-gold-500 text-charcoal-900 font-bold rounded-full hover:bg-gold-400 transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20 active:scale-95"
      >
        Product
      </button>
    </div>
  );
}

