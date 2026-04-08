import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | VxLab",
  description: "VxLab에 문의하세요. 데모 요청, 기술 상담, 파트너십 문의를 환영합니다.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            문의하기
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            데모 요청, 기술 상담, 파트너십 등 어떤 문의든 환영합니다.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                메시지 보내기
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                연락처 정보
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <p className="text-gray-500">sales@vxlab.co.kr</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-500">+82-10-3211-0353</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Address
                  </h3>
                  <p className="text-gray-500">
                    경기도 광명시 서부샛길 778 (철산동)
                    <br />
                    디오스텔가산 1405호
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-500">
                    월 - 금: 09:00 - 18:00
                    <br />
                    토/일/공휴일: 휴무
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
