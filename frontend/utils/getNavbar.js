import sanityClient from './sanityClient';

export async function getNavbar() {
  const data = await sanityClient.fetch(`
    *[_type == "navbar"][0]{
      logo { asset->{url} },
      links,
      showSearch
    }
  `);
  return {
    logo: data.logo?.asset?.url,
    links: data.links || [],
    showSearch: data.showSearch,
  };
} 