import Link from 'next/link'

export default function WhoWeArePage() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 text-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600 mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black">Who We Are</h1>
          
          {/* Sub-navigation Tabs */}
          <div className="flex justify-center gap-4 mt-8 text-xs font-bold uppercase tracking-widest">
            <span className="px-5 py-2.5 rounded-full bg-black text-white">Who We Are</span>
            <Link href="/about/our-history" className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition">
              Our History
            </Link>
          </div>
        </div>

        {/* Director Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-gray-200 pb-3">Director</h2>
          
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start bg-zinc-50 p-8 rounded-3xl border border-gray-200">
            <div className="aspect-[4/5] rounded-2xl bg-zinc-200 border border-gray-300 overflow-hidden flex items-center justify-center">
              <img 
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
                alt="Prof. Dr. Muhammad Khurram" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-gray-700">
              <h3 className="text-2xl font-bold text-black">Prof. Dr. Muhammad Khurram</h3>
              <p className="text-sm font-semibold text-red-700">
                Professor and Co-Chairman, Department of Computer & Information Systems Engineering
              </p>
              <p className="text-sm font-medium">Director, Research Center for Artificial Intelligence (RCAI)</p>
              <p className="text-sm font-medium">Focal Person, National Center of Artificial Intelligence (NCAI) & Head, Smart City Lab</p>
              <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                Ph.D. (IC Design), Massey University, New Zealand, 2012
              </p>
            </div>
          </div>
        </section>

        {/* Research Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-10 border-b border-gray-200 pb-3">Research Team</h2>

          {/* Graduate Leads */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-red-700 mb-6">Graduate Leads</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Ansharah Mobeen", role: "Team Lead" },
                { name: "Fatima Saud", role: "Project Manager, Computer Vision Engineer, Research Associate" },
                { name: "Hamid Raza", role: "Embedded Systems Engineer, Research Assistant" },
                { name: "Salim", role: "Embedded Systems Engineer, Research Assistant" }
              ].map((member) => (
                <div key={member.name} className="p-6 rounded-2xl border border-gray-200 bg-zinc-50 flex flex-col items-center text-center">
                  <img 
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full object-cover mb-4 border border-gray-300"
                  />
                  <h4 className="font-bold text-black text-lg">{member.name}</h4>
                  <p className="text-xs text-gray-600 mt-1 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Undergraduate Students Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-red-700 mb-6">Undergraduate Students</h3>
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
              {[
                { name: "Tehreem Raza Khan", role: "Hardware Lead" },
                { name: "Eshal Kashif", role: "Software Lead" }
              ].map((member) => (
                <div key={member.name} className="p-6 rounded-2xl border border-gray-200 bg-zinc-50 flex flex-col items-center text-center">
                  <img 
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full object-cover mb-4 border border-gray-300"
                  />
                  <h4 className="font-bold text-black text-lg">{member.name}</h4>
                  <p className="text-xs text-gray-600 mt-1 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software Team */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-zinc-900 mb-4 border-b border-gray-100 pb-2">Software</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Muhammad Hussnain Mansoor",
                "Syed Hussain Sajjad",
                "Muhammad Haris",
                "Hamdan",
                "Mazna Noman Khan",
                "Anam Jafar"
              ].map((member) => (
                <div key={member} className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs flex items-center gap-3">
                  <img 
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
                    alt={member} 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <p className="font-medium text-black text-sm">{member}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded/Hardware Team */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-4 border-b border-gray-100 pb-2">Embedded / Hardware</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Sumbal Zehra",
                "Abdul Moiz",
                "Muhammad Areeb",
                "Muhammad Ubaid",
                "Farhan Raza",
                "Shaheer Azmat Khan"
              ].map((member) => (
                <div key={member} className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs flex items-center gap-3">
                  <img 
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
                    alt={member} 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <p className="font-medium text-black text-sm">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}