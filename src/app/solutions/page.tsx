import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | VxLab",
  description: "VxLab CT 재구성 소프트웨어의 산업별 솔루션을 소개합니다.",
};

const solutions = [
  {
    id: "aerospace",
    name: "항공우주",
    nameEn: "Aerospace",
    description:
      "터빈 블레이드, 복합재 구조물, 주조 부품 등 항공우주 분야의 핵심 부품을 비파괴적으로 정밀 검사합니다.",
    useCases: [
      "터빈 블레이드 내부 결함 탐지",
      "복합재 층간분리(Delamination) 검사",
      "적층제조(AM) 부품 기공 분석",
      "AS9100 품질 기준 충족",
    ],
  },
  {
    id: "automotive",
    name: "자동차",
    nameEn: "Automotive",
    description:
      "엔진 부품, 배터리 셀, 전장 부품 등 자동차 산업의 핵심 품질 관리를 CT 분석으로 지원합니다.",
    useCases: [
      "다이캐스팅 부품 기공/수축소 분석",
      "EV 배터리 셀 내부 검사",
      "용접 및 접합 품질 검증",
      "사출 성형 부품 벽두께 측정",
    ],
  },
  {
    id: "electronics",
    name: "전자/반도체",
    nameEn: "Electronics",
    description:
      "PCB, BGA, 반도체 패키지 등 미세 구조물에 대한 고해상도 CT 검사를 제공합니다.",
    useCases: [
      "BGA 솔더 조인트 검사",
      "PCB 내부 via/layer 분석",
      "반도체 패키지 결함 탐지",
      "마이크로 커넥터 품질 검증",
    ],
  },
  {
    id: "research",
    name: "연구개발",
    nameEn: "Research",
    description:
      "대학 및 연구기관에서 재료 분석, 생체 의학, 지질학 등 다양한 분야의 CT 연구를 지원합니다.",
    useCases: [
      "재료 미세구조 분석",
      "다공성 재료 기공률 측정",
      "생체 시료 3D 형태 분석",
      "지질/암석 샘플 내부 구조 연구",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            산업별 맞춤 솔루션
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            각 산업의 고유한 품질 요구사항에 최적화된 CT 분석 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              id={solution.id}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
                    {solution.nameEn}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {solution.name}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center mt-6 text-primary text-sm font-medium hover:underline"
                  >
                    자세한 상담 요청 →
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    주요 활용 사례
                  </h3>
                  <ul className="space-y-3">
                    {solution.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-3">
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
                        <span className="text-sm text-gray-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            귀사의 산업에 맞는 솔루션을 찾고 계신가요?
          </h2>
          <p className="text-gray-300 mb-6">
            VxLab 전문가와 상담하여 맞춤 솔루션을 확인하세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            상담 문의
          </Link>
        </div>
      </section>
    </>
  );
}
