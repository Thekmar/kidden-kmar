import { useRouter } from 'next/router';
import Head from 'next/head';

const classDetails = {
  'art-class': {
    title: 'Art Class',
    description: 'Explore colors, shapes, and creativity with our engaging art classes for kids.',
    image: '/assets/images/class-1.jpg',
  },
  'music-class': {
    title: 'Music Class',
    description: 'Develop rhythm, tones, and musical skills in our interactive music sessions.',
    image: '/assets/images/class-2.jpg',
  },
  'fun-games': {
    title: 'Fun Games',
    description: 'Play and learn coordination and social skills through fun games.',
    image: '/assets/images/class-3.jpg',
  },
};

export default function ClassPage() {
  const router = useRouter();
  const { slug } = router.query;

  const classInfo = classDetails[slug] || null;

  if (!classInfo) {
    return <div>Class not found</div>;
  }

  return (
    <>
      <Head>
        <title>{classInfo.title} - Kidden</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary-700 mb-4 font-poppins">{classInfo.title}</h1>
        <img src={classInfo.image} alt={classInfo.title} className="w-full rounded-lg mb-6 object-cover" />
        <p className="font-comic text-gray-800">{classInfo.description}</p>
      </main>
    </>
  );
}
