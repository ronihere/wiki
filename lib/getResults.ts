import { BASE_URI } from "./constants"
export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })

    const response = await fetch(BASE_URI + searchParams);
    console.log('FETCH_URI:::', BASE_URI + searchParams);
    return response.json();
}