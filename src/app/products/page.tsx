import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products | VxLab",
  description: "VxLab의 X-ray CT 재구성 소프트웨어 제품군을 소개합니다.",
};

const products = [
  {
    id: "vxworkspace",
    name: "VxWorkspace",
    tagline: "올인원 CT 재구성 & 분석 플랫폼",
    image: "/products-vxworkspace.png",
    description:
      "VxWorkspace는 CT 데이터 재구성부터 3D 시각화, 치수 측정, 캘리브레이션까지 모든 워크플로우를 하나의 환경에서 제공합니다.",
    features: [
      "FDK / Iterative / AI 기반 재구성 기능",
      "3D 볼륨 렌더링 및 단면 뷰",
      "치수 측정",
      "팬텀 기반 자동 켈리브레이션",
      "워크플로우 기반 데이터 관리",
    ],
  },
  {
    id: "vxreconsdk",
    name: "VxReconSDK",
    tagline: "고성능 GPU 가속 재구성 엔진",
    image: "/products-vxreconsdk.png",
    description:
      "VxReconSDK은 CUDA 기반 GPU 가속으로 대용량 CT 데이터를 빠르게 재구성하는 핵심 엔진입니다. SDK를 통해 기존 시스템에 쉽게 통합할 수 있습니다.",
    features: [
      "CUDA 기반 GPU 가속 (NVIDIA)",
      "Cone-beam / Oblique-CT / Planar-CT 지원",
      "Metal Artifact Reduction (MAR)",
      "Ring Artifact Correction",
      "ROI 기반 재구성 지원",
      "C++ SDK 제공",
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
              </div>

              {/* Product Screenshot */}
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src={product.image}
                    alt={`${product.name} Screenshot`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
