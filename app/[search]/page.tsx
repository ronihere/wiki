import React from 'react'
import getResults from '@/lib/getResults'
import Item from './components/Item'
type TParams = {
    params: {
        search: string
    }
}
export async function generateMetadata({ params: { search } }: TParams) {
    const resultPromise: Promise<SearchResult> = getResults(decodeURIComponent(search));
    const searchResult = await resultPromise;
    const results: Result[] | undefined = searchResult?.query?.pages;
    if (!results) {
        return {
            title: `${decodeURIComponent(search)} Not found`
        }
    }
  return {
    title: `${decodeURIComponent(search)}`,
    description : `${decodeURIComponent(search)} related articles`
  }
}

const page = async ({ params: { search } }: TParams) => {
    const resultPromise: Promise<SearchResult> = getResults(decodeURIComponent(search));
    const searchResult = await resultPromise;
    const results: Result[] | undefined = searchResult?.query?.pages;
    // throw new Error('Error hai bhai')
  return (
    <section>
          {
              results ?
                  Object.values(results).map((result) => {
                      return (
                          <Item key={result.pageid} result={result} />
                      )
                  })
                  :
                  <h2 className="p-2 text-xl">{`${decodeURIComponent(search)} Not Found`}</h2>
                }
    </section>
  )
}

export default page
