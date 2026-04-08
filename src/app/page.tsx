import Link from "next/link";
import ReconSlideshow from "./components/ReconSlideshow";

const products = [
  {
    name: "VxWorkspace",
    description:
      "고급 CT 재구성 및 3D 시각화 소프트웨어. 산업용 CT 데이터를 정밀하게 분석하고 시각화합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    name: "VxReconSDK",
    description:
      "고성능 CT 재구성 엔진. GPU 가속 기반으로 대용량 CT 데이터를 빠르게 재구성합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0015.75 4.5h-9A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5z" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Electronics", label: "전자/반도체" },
  { name: "Battery", label: "이차전지" },
  { name: "Automotive", label: "자동차" },
  { name: "Aerospace", label: "항공우주" },
  { name: "Research", label: "연구개발" },
];

const stats = [
  { value: "Sub-micron", label: "해상도 지원" },
  { value: "5x", label: "빠른 재구성 속도" },
  { value: "GPU", label: "가속 알고리즘" },
  { value: "24/7", label: "기술 지원" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 ct-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
              X-ray CT Reconstruction Software
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 whitespace-nowrap">
              See What Others <span className="text-accent">Can&apos;t See</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              VxLab은 산업용 X-ray CT 소프트웨어를 개발하는 기술 기업입니다.<br />
              비파괴 검사부터 품질 관리까지, 보이지 않는 것을 선명하게 보여드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                데모 요청
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                제품 알아보기
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              정밀한 CT 분석을 위한 소프트웨어
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              다양한 산업 환경에 최적화된 CT 재구성 및 분석 소프트웨어를 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {product.description}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center mt-5 text-primary text-sm font-medium hover:underline"
                >
                  자세히 보기 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VxLab */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
                Why VxLab
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                데이터에서 인사이트까지,{" "}
                <span className="gradient-text">더 빠르고 정확하게</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "최첨단 재구성 알고리즘",
                    desc: "FDK, Iterative, AI 기반 재구성 등 다양한 알고리즘을 지원하여 최적의 이미지 품질을 제공합니다.",
                  },
                  {
                    title: "GPU 가속 처리",
                    desc: "CUDA 기반 GPU 가속으로 대용량 CT 데이터를 실시간에 가까운 속도로 처리합니다.",
                  },
                  {
                    title: "유연한 통합",
                    desc: "API와 SDK를 통해 기존 시스템과 쉽게 통합할 수 있으며, 커스터마이징이 가능합니다.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ReconSlideshow />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
              Industries
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              다양한 산업 분야에 적용
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href="/solutions"
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-lg">
                  {industry.label}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{industry.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 VxLab을 경험해보세요
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            데모 요청을 통해 VxLab의 CT 재구성 소프트웨어가 어떻게 품질 관리를 혁신하는지 직접 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              데모 요청하기
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              회사 소개 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
