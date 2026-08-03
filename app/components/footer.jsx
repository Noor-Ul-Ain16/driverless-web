'use client'

export default function Footer() {
  const sponsors = [
    {
      name: 'Aptiv',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668446797631-5AHZY06646ZX5ZB9GFW5/aptiv_logo_rev_rgb.png?format=300w',
    },
    {
      name: 'EDC',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668446797701-OGMBX3A0MJSDUXB7COK7/EDC+Logo.png?format=100w',
    },
    {
      name: 'General Motors',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668446798159-RP13CR6I4GRCZ8AHKJRR/GM.png?format=100w',
    },
    {
      name: 'IBM',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668446798255-PPV0HWUSHYWX7EFOGJ0M/IBM.png?format=300w',
    },
    {
      name: 'Motional',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668446798743-XYC4L9JK1V71CCQY440K/Motional.png?format=100w',
    },
    {
      name: 'RTI',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668446798714-AF2LU0FQHKJBFQJ5TAM2/RTI.png?format=100w',
    },
  ]

  const mainSponsors = [
    {
      name: 'Oshkosh',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668447401456-X8QUMBOHNE9VGAV7QRGJ/Oshkosh_Logo_White_TM_Hrz_150.png?format=500w',
    },
    {
      name: 'Pratt Miller',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1668447532659-LKHUW7MDF7XXYJ7JK2BA/PM+Logo.png?format=500w',
    },
  ]

  return (
    <footer className="w-full bg-[#8a1d1d] text-white py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold tracking-[0.08em] mb-8">
            Previously Powered by
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
            {mainSponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 md:h-14 object-contain"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-11 mb-12 px-4">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex items-center justify-center h-12 min-w-20">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center border-t border-white/30 pt-8 mt-12">
          <p className="text-sm text-zinc-200">
            © 2025 MIT Driverless | 265 Massachusetts Avenue, Cambridge, MA 02139, USA
          </p>
        </div>
      </div>
    </footer>
  )
}
