export interface WPPost {
  id: number;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export const fetchWPPosts = async (perPage = 3, page = 1): Promise<WPPost[]> => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const response = await fetch(
    `${base}/api/wp/posts?per_page=${perPage}&page=${page}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts from WordPress');
  }
  
  return response.json();
};

export const stripHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};