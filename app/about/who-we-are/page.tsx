const leadership = [
  {
    name: "Kendrick Cancio",
    role: "Co-General Manager (Engineering)",
    image: "https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1575913899569-LPR91D7NBTJT7OBTMVC3/48527256207_d4464ba29a_o.jpg?format=750w",
  },
  {
    name: "Hiroki Ogasawara",
    role: "Co-General Manager (Business)",
    image: "https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1648072708637-L8NKIZXZOSNBDEZITSAA/GN3_8315.JPG?format=750w",
  },
];

const teamMembers = [
  {
    name: "Amina Iqbal",
    role: "Autonomy Software Lead",
    image: "https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1673804227401-PBUGCUHMVVFOR4KF5URO/1.+Students-on-the-MIT-Pitt-team.jpg?format=750w",
  },
  {
    name: "Jasmine Patel",
    role: "Systems Integration Engineer",
    image: "https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1662329118358-JI6B0KU4FYRQXFP2DG19/1641757080539.jpg?format=750w",
  },
  {
    name: "Martin Chen",
    role: "Hardware & Sensors Specialist",
    image: "https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1673804235038-9B06LOVO67HL5O53LCMC/4.+iacstill.PNG?format=750w",
  },
];

export default function WhoWeArePage() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#8a1d1d] mb-4">
            Leadership
          </p>
          <h1 className="text-5xl font-bold text-black">Who We Are</h1>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            MIT Driverless&apos; mission is to be the hub of practical autonomy at MIT - to be the place where the brightest minds come to learn about the challenges in deploying software on full scale autonomous vehicles, and to connect them with our industry partners as they look for their future engineering leaders. To do so, we build autonomous racecars and compete in competitions around the world.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Leadership</h2>
              <p className="text-gray-600 max-w-2xl">
                Meet the leaders guiding our engineering and business strategy as we build the next generation of autonomous racecars.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {leadership.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-[2rem] border border-gray-200 shadow-sm transition duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{member.role}</p>
                  <a href="/contact" className="inline-flex items-center justify-center bg-[#8a1d1d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#6d0f0f]">
                    Contact Team
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of talented engineers, software developers, and innovators from across MIT who are passionate about autonomous vehicles and pushing the boundaries of what&apos;s possible.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-[1.5rem] border border-gray-200 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
