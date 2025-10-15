import Head from 'next/head';

const teamMembers = [
  {
    id: 1,
    name: 'Jessica Smith',
    role: 'Principal',
    image: '/assets/images/team/team-1.jpg',
    bio: 'Jessica leads our kindergarten with over 15 years of early childhood education experience.',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Teacher',
    image: '/assets/images/team/team-2.jpg',
    bio: 'Michael inspires creativity and curiosity in every child he teaches.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Teacher',
    image: '/assets/images/team/team-3.jpg',
    bio: 'Emily specializes in motor skills development and interactive learning.',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Counselor',
    image: '/assets/images/team/team-4.jpg',
    bio: 'David provides emotional support and developmental counseling for kids.',
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Meet Our Team - Kidden</title>
        <meta name="description" content="Meet the dedicated team members of Kidden Kindergarten." />
      </Head>
      <main className="bg-orange-50 min-h-screen w-full px-6 py-20 max-w-7xl mx-auto rounded-lg">
        <h1 className="text-5xl font-poppins font-extrabold text-orange-700 text-center mb-16">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map(({ id, name, role, image, bio }) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h2 className="text-xl font-bold text-orange-700 font-poppins">{name}</h2>
              <p className="text-orange-600 font-semibold mb-2">{role}</p>
              <p className="text-gray-700 font-comic">{bio}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
