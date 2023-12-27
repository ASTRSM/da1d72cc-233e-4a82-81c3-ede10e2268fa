import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useSearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  const pathname = usePathname()
  const { replace } = useRouter()
  const [term, setTerm] = useState(query)

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
    setTerm(term)
  }, 300)

  return { searchParams, handleSearch, term }
}