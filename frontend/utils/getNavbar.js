import { sanityClient } from './sanityClient';

export async function getNavbar() {
  const data = await sanityClient.fetch(`
    *[_type == "navbar"][0]{
      logo {
        image { asset->{url} },
        altText
      },
      links[]{
        label,
        url,
        hasDropdown,
        dropdownItems[]{
          label,
          url
        }
      },
      showSearch,
      searchPlaceholder
    }
  `);
  return {
    logo: data.logo?.image?.asset?.url,
    logoAltText: data.logo?.altText,
    links: data.links || [],
    showSearch: data.showSearch,
    searchPlaceholder: data.searchPlaceholder,
  };
} 