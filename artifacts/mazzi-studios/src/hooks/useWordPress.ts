import { useQuery } from '@tanstack/react-query';
import { fetchWPPosts } from '@/lib/wordpress';

export function usePosts(perPage = 3, page = 1) {
  return useQuery({
    queryKey: ['wp-posts', perPage, page],
    queryFn: () => fetchWPPosts(perPage, page),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}