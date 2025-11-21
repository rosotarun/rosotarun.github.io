import React from 'react';

export default function Specifications() {
  const specs = {
    'Degrees of Freedom': [
      { label: 'Robot Type', value: '6-axis robotic arm (DOF 6)' },
    ],
    'Leader Arm Motor Configuration': [
      { label: 'Joint No.2', value: '7.4 V motor · Gear ratio 1:345' },
      { label: 'Joint No.1 & No.3', value: '7.4 V motor · Gear ratio 1:191' },
      { label: 'Joint No.4, No.5 & No.6 (Gripper)', value: '7.4 V motor · Gear ratio 1:147' },
    ],
    'Sensing': [
      { label: 'Joint Angle Sensor', value: '12-bit magnetic encoder per joint' },
    ],
    'Operating Conditions': [
      { label: 'Recommended Temperature', value: '0 °C ~ +40 °C' },
    ],
    'Communication': [
      { label: 'Interface', value: 'UART' },
    ],
    'Power (Leader / Follower Arm)': [
      { label: 'Leader Arm', value: '5 V · 4 A DC (rated)' },
      { label: 'Follower Arm', value: '12 V · 2 A DC (rated)' },
    ],
  };

  return (
    <section id="specs" className="py-24 px-6 bg-raycast-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-raycast-text mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-raycast-text-secondary max-w-2xl mx-auto">
            Detailed specifications for the ROSOTA Starter Pack components.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(specs).map(([category, items], categoryIndex) => (
            <div
              key={categoryIndex}
              className="rounded-2xl border border-raycast-border bg-gradient-to-br from-raycast-white to-gray-50/30 p-8"
            >
              <h3 className="text-2xl font-semibold text-raycast-text mb-6">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((spec, specIndex) => (
                  <div key={specIndex} className="pb-4 border-b border-raycast-border last:border-0 last:pb-0">
                    <div className="text-sm text-raycast-text-secondary mb-1">
                      {spec.label}
                    </div>
                    <div className="text-base font-medium text-raycast-text">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl border border-raycast-border bg-gradient-to-br from-raycast-white to-gray-50/30 p-12">
            <h3 className="text-3xl font-semibold text-raycast-text mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-raycast-text-secondary mb-8 max-w-2xl mx-auto">
              Order your ROSOTA Starter Pack today and start building the future of robotics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ko.aliexpress.com/item/1005008883199466.html?gatewayAdapt=glo2kor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-raycast-text text-raycast-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Buy Hardware
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-raycast-white text-raycast-text border border-gray-300 text-sm font-medium rounded-button hover:border-gray-400 hover:shadow-md transition-all duration-200"
              >
                Download Copilot First
              </a>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              구매는 외부 판매처로 이동합니다.
            </p>
            <p className="text-sm text-raycast-text-secondary mt-6">
              Questions? Contact us at{' '}
              <a href="mailto:rosotarun@gmail.com" className="text-raycast-text hover:underline">
                rosotarun@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

