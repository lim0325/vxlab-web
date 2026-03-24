import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | VxLab",
  description: "VxLab의 X-ray CT 재구성 소프트웨어 제품군을 소개합니다.",
};

const products = [
  {
    id: "vxct-studio",
    name: "VxCT Studio",
    tagline: "올인원 CT 재구성 & 분석 플랫폼",
    description:
      "VxCT Studio는 CT 데이터 재구성부터 3D 시각화, 결함 분석, 치수 측정까지 모든 워크플로우를 하나의 환경에서 제공합니다.",
    features: [
      "FDK / Iterative / AI 기반 재구성 알고리즘",
      "3D 볼륨 렌더링 및 단면 뷰",
      "자동 결함 탐지 (기공, 크랙, 이물질)",
      "GD&T 기반 치수 측정",
      "CAD 비교 분석 (Nominal/Actual)",
      "리포트 자동 생성",
    ],
  },
  {
    id: "vxct-engine",
    name: "VxCT Engine",
    tagline: "고성능 GPU 가속 재구성 엔진",
    description:
      "VxCT Engine은 CUDA 기반 GPU 가속으로 대용량 CT 데이터를 빠르게 재구성하는 핵심 엔진입니다. SDK를 통해 기존 시스템에 쉽게 통합할 수 있습니다.",
    features: [
      "CUDA 기반 GPU 가속 (NVIDIA)",
      "Cone-beam / Fan-beam / Parallel-beam 지원",
      "Metal Artifact Reduction (MAR)",
      "Ring Artifact Correction",
      "C++ / Python SDK 제공",
      "배치 처리 및 자동화 지원",
    ],
  },
  {
    id: "vxct-inline",
    name: "VxCT Inline",
    tagline: "생산 라인 통합 실시간 검사",
    description:
      "VxCT Inline은 생산 라인에 직접 통합되어 실시간으로 CT 검사를 수행하는 인라인 솔루션입니다. 100% 전수 검사를 자동화합니다.",
    features: [
      "실시간 CT 재구성 및 검사",
      "Pass/Fail 자동 판정",
      "PLC / MES 시스템 연동",
      "SPC 통계 데이터 수집",
      "다중 스테이션 지원",
      "원격 모니터링 대시보드",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Products
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CT 분석의 새로운 기준
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            연구실부터 생산 라인까지, VxLab 제품군이 비파괴 검사의 모든 단계를 지원합니다.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {products.map((product, idx) => (
            <div
              key={product.id}
              id={product.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
                  {product.tagline}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-8 px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  데모 요청
                </Link>
              </div>

              {/* Visual placeholder */}
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400">{product.name} Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            어떤 제품이 적합한지 궁금하신가요?
          </h2>
          <p className="text-gray-500 mb-6">
            VxLab 전문가가 귀사의 요구사항에 맞는 최적의 솔루션을 제안해드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            상담 문의
          </Link>
        </div>
      </section>
    </>
  );
}
