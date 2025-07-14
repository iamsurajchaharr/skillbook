import sanityClient from './sanityClient';

export async function searchCourses(query) {
  if (!query) return [];
  const results = await sanityClient.fetch(
    `*[_type == "course" && title match $q]{
      _id,
      title,
      "slug": slug.current
    }[0...10]`,
    { q: `*${query}*` }
  );
  return results;
} 