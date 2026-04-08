"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvzvywgp");

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-medium py-4">
        메시지가 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다. 감사합니다!
      </p>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            이름 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            회사명
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
            placeholder="회사명"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          이메일 *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
          placeholder="email@example.com"
        />
        <ValidationError field="email" prefix="이메일" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          문의 유형
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors bg-white"
        >
          <option value="demo">데모 요청</option>
          <option value="technical">기술 상담</option>
          <option value="pricing">가격 문의</option>
          <option value="partnership">파트너십</option>
          <option value="other">기타</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          메시지 *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-vertical"
          placeholder="문의 내용을 작성해주세요."
        />
        <ValidationError field="message" prefix="메시지" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {state.submitting ? "전송 중..." : "보내기"}
      </button>
    </form>
  );
}
