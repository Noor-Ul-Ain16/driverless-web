'use client'

export default function Footer() {
  const sponsors = [
    {
      name: '92 News HD Plus',
      logo: '92_News_HD_Plus_logo.png',
    },
    {
      name: 'abn news',
      logo: 'abn news.jpeg',
    },
    {
      name: 'ary',
      logo: 'ary.png',
    },
    {
      name: 'asia one',
      logo: 'asia one.png',
    },
    {
      name: 'bol',
      logo: 'bol.jpg',
    },
    {
      name: 'dawn',
      logo: 'dawn.png',
    },
    
    {
      name: 'dw',
      logo: 'dw.jpg',
    },
    {
      name: 'express-news-logo-png_seeklogo-390653',
      logo: 'express-news-logo-png_seeklogo-390653.png',
    },
    {
      name: 'gtv news',
      logo: 'gtv news.jpeg',
    },{
      name: 'independent urdu',
      logo: 'independent urdu.jpg',
    },
    {
      name: 'independent_urdu_logo',
      logo: 'independent_urdu_logo.jpeg',
    },{
      name: 'karachi matters',
      logo: 'karachi matters.jpg',
    },
    {
      name: 'no background_aaj-tv-aaj-news-logo-png',
      logo: 'no background_aaj-tv-aaj-news-logo-png.png',
    },{
      name: 'nukta',
      logo: 'nukta.png',
    },
    {
      name: 'public news',
      logo: 'public news.jpg',
    },{
      name: 'startup pakistan',
      logo: 'startup pakistan.jpeg',
    },
    {
      name: 'times of karachi',
      logo: 'times of karachi.jpeg',
    },
    
  ]

  const validSponsors = sponsors.filter((item) => item.logo.trim() !== '')

  return (
    <footer className="w-full bg-[#8a1d1d] text-white py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
                
        {validSponsors.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-11 mb-12 px-4">
            {validSponsors.map((sponsor, index) => (
              <div key={sponsor.name || index} className="flex items-center justify-center h-12 min-w-20">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name || 'Sponsor Logo'}
                  className="h-15 object-contain"
                />
              </div>
            ))}
          </div>
        )}

        <div className="text-center border-t border-white/30 pt-8 mt-12">
          <p className="text-sm text-zinc-200">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}