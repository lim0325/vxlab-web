import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | VxLab",
  description: "VxLab은 산업용 X-ray 운영, 검사, CT 재구성 소프트웨어를 개발·공급하는 기술 기업입니다.",
};

const values = [
  {
    title: "기술 혁신",
    description:
      "X-ray 운영 자동화, 검사 알고리즘, CT 재구성 엔진까지 전 영역에서 기술 혁신을 추구합니다.",
  },
  {
    title: "고객 중심",
    description:
      "고객의 검사 환경과 운영 요구사항을 정확히 이해하고, 현장에 최적화된 솔루션을 제공합니다.",
  },
  {
    title: "신뢰와 정밀",
    description:
      "검증된 알고리즘과 엄격한 품질 기준을 통해 운영부터 분석까지 신뢰할 수 있는 결과를 보장합니다.",
  },
];

const milestones = [
  { year: "설립", desc: "VxLab 창립, X-ray CT 소프트웨어 개발 시작" },
  { year: "R&D", desc: "GPU 가속 CT 재구성 알고리즘 및 X-ray 운영 소프트웨어 개발 완료" },
  { year: "제품 출시", desc: "VxWorkspace / VxReconSDK 정식 출시" },
  { year: "성장", desc: "글로벌 파트너십 확대 및 인라인 검사 솔루션 출시" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            보이지 않는 것을 보는 기술
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            VxLab은 산업용 X-ray 운영, 검사, CT 재구성 소프트웨어를 개발·공급합니다.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
                Our Mission
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                산업용 X-ray의 모든 과정을 소프트웨어로
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                VxLab은 X-ray 장비 운영, 비파괴 검사, CT 재구성까지
                산업용 X-ray의 전 과정을 아우르는 소프트웨어를 개발·공급합니다.
                제조 현장의 품질을 보장하고, 연구 현장에서 새로운 발견을
                가능하게 하는 것이 우리의 목표입니다.
              </p>
              <p className="text-gray-500 leading-relaxed">
                X-ray 시스템 제어, CT 영상 처리, GPU 가속 컴퓨팅, 인공지능 분야의
                전문가들이 모여 산업 현장의 실질적인 문제를 해결합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
              <blockquote className="text-xl font-medium text-gray-800 leading-relaxed">
                &ldquo;우리는 X-ray가 찍은 데이터를 의미 있는 정보로 바꾸는
                일을 합니다. 보이지 않는 결함을 찾고, 측정할 수 없는 것을
                측정합니다.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-gray-400">VxLab Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
              Core Values
            </p>
            <h2 className="text-3xl font-bold text-gray-900">핵심 가치</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
}
