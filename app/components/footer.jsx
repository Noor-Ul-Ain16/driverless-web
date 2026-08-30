'use client'

export default function Footer() {

  return (
    <footer className="w-full bg-[#8a1d1d] text-white py-10 px-6 md:px-12">
      <div className="zoom-responsive max-w-6xl mx-auto">

        <div className="text-center">
          <p className="text-sm text-zinc-200">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}