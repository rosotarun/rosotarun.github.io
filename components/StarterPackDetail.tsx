import React from 'react';
import Image from 'next/image';

const FOR_TAGS = ['Education', 'Research', 'Prototype Development', 'Physical AI Exploration'];

export default function StarterPackDetail() {
  return (
    <section className="py-20 px-6 bg-raycast-white">
      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Sticky Product Visual */}
        <div className="lg:sticky lg:top-24 self-start">
          <div className="relative rounded-3xl border border-gray-200 bg-[#f8f9fa] shadow-sm overflow-hidden lg:max-w-xl">
            <Image
              src="/images/soarm.png"
              alt="Lerobot SO-ARM101 kit"
              width={640}
              height={480}
              className="w-full h-full object-contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-10 text-[#495057]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Product</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-black">Lerobot SO-ARM101 Kit</h1>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              The Lerobot SO-ARM101 kit is a modular robotic platform designed to help you explore the next era of Physical AI.
            </p>
            <p>
              It includes a pre-assembled SO-ARM101 robotic arm (leader/follower), and access to ROSOTA Copilot, our
              intelligent control software that enables intuitive operation and learning. Each unit is precisely tuned
              for plug-and-play setup and smooth motion — ideal for research, prototyping, or creative robotic applications.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">For</p>
            <div className="flex flex-wrap gap-2">
              {FOR_TAGS.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-gray-300 text-xs uppercase tracking-[0.08em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Support</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>ROSOTA Crew 커뮤니티를 통한 기술 지원</li>
            </ul>
          </div>

          <div className="space-y-4">
            <a
              href="https://ko.aliexpress.com/item/1005008883199466.html?gatewayAdapt=glo2kor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center rounded-2xl bg-raycast-text text-white py-4 text-base font-semibold tracking-wide transition-colors duration-200 hover:bg-blue-600"
            >
              Buy Hardware
            </a>
            <p className="text-center text-xs text-gray-500">
              구매는 외부 판매처로 이동합니다.
            </p>
            <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-600">
              Build your first step into Physical AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

