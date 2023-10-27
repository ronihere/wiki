'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        console.log('searching:::', search);
        router.push(`/${search}`)
    }
  return (
    <form onSubmit={handleSubmit} className='flex gap-1'>
          <input className='rounded-lg p-2 border w-96 text-black' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className='bg-white rounded-lg p-2'>🚀</button>
    </form>
  )
}

export default Searchbar
