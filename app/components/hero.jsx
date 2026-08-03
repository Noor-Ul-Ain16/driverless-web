'use client'

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[24rem] sm:h-[30rem]">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1606946136701-T6EKQD8ZMZY5DXTSR588/Capture+d%E2%80%99e%CC%81cran+2020-12-02+a%CC%80+1.54.57+PM.png?format=1500w"
          alt="MIT Driverless"
          fill
          unoptimized
          priority
          className="absolute inset-0 object-cover"
        />
      </div>
    </section>
  )
}
