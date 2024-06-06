import { useInfiniteQuery } from '@tanstack/vue-query'

export default function useRickMortyList() {
  return useInfiniteQuery({
    queryKey: ['rickmorty-list', 'rickMorty'],
    queryFn: ({ pageParam = 1 }) => {
      return $rickMorty<{
        info: {
            count: number
            previous: string | null,
            next: string | null,
        }
        results: {
            name: string
            species: string
        }[]
      }>(`character?count=20&pages=${pageParam}`)
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })
}
