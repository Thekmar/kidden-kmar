import Head from 'next/head';

const teamMembers = [
  {
    id: 1,
    name: 'Jessica Smith',
    role: 'Principal',
    image: '/assets/images/team/team-1.jpg',
    bio: 'Jessica leads our kindergarten with over 15 years of early childhood education experience.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Teacher',
    image: '/assets/images/team/team-2.jpg',
    bio: 'Michael inspires creativity and curiosity in every child he teaches.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Teacher',
    image: '/assets/images/team/team-3.jpg',
    bio: 'Emily specializes in motor skills development and interactive learning.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Counselor',
    image: '/assets/images/team/team-4.jpg',
    bio: 'David provides emotional support and developmental counseling for kids.',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Kidden Team</title>
        <meta name="description" content="Meet the passionate educators of Kidden Kindergarten." />
      </Head>
      <main className="bg-white min-h-screen w-full px-4 py-14 max-w-7xl mx-auto">
        <h1 className="text-5xl font-poppins font-bold text-center text-primary-600 mb-12">Meet Our Team</h1>
        
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-orange-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 relative flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mb-4">
                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-primary-700">{member.name}</h3>
              <p className="text-sm text-primary-500 font-bold mb-2">{member.role}</p>
              <p className="text-gray-700 font-comic mb-4">{member.bio}</p>
              <div className="flex space-x-3">
                <a href={member.social.facebook} aria-label={`${member.name} Facebook`} className="text-blue-600 hover:text-blue-800 transition">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z"/></svg>
                </a>
                <a href={member.social.twitter} aria-label={`${member.name} Twitter`} className="text-cyan-500 hover:text-cyan-700 transition">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 5.924c-.793.35-1.644.585-2.537.69a4.418 4.418 0 001.948-2.438 8.573 8.573 0 01-2.799 1.07 4.396 4.396 0 00-7.489 4.005 12.482 12.482 0 01-9.061-4.59 4.396 4.396 0 001.361 5.865 4.363 4.363 0 01-1.99-.544v.055a4.391 4.391 0 003.524 4.305 4.423 4.423 0 01-1.984.075 4.396 4.396 0 004.102 3.05 8.81 8.81 0 01-5.457 1.882c-.354 0-.704-.02-1.05-.061a12.44 12.44 0 006.729 1.97c8.08 0 12.5-6.693 12.5-12.5 0-.19 0-.383-.013-.573a8.935 8.935 0 002.195-2.265z"/></svg>
                </a>
                <a href={member.social.instagram} aria-label={`${member.name} Instagram`} className="text-pink-600 hover:text-pink-800 transition">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.5 2.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
