import { FC } from 'react'
import VolumeItem from './VolumeItem'
import { useGetVolumesQuery } from '../../../store/volume/volume.api'
import { useState } from 'react'

const HomeVolume: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [categories, setCategories] = useState('')
  const [sorting, setSorting] = useState('relevance')

  const { data, isLoading, error } = useGetVolumesQuery(`${searchQuery}+subject:${categories}&orderBy=${sorting}`)

  function handleClick() {
    return true
  }

  return (
    <div>
      <div className='flex justify-center items-center mb-10 '>
        <h1 className='text-2xl text-green-900 font-medium'> Search for books</h1>

        <input
          className='text-red-700 border-stone-300 bg-white rounded-xl w-1/4 p-2 mx-2 '
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className='text-md bg-white rounded-xl w-1/7 p-1 hover:bg-green-200'>
          Categories
          <select className='mx-1' value={categories} onChange={(e) => setCategories(e.target.value)}>
            <option value='all'>all</option>
            <option value='art'>art</option>
            <option value='biography'>biography</option>
            <option value='computer'>computer</option>
            <option value='history'>history</option>
            <option value='medical'>medical</option>
            <option value='poetry'>poetry</option>
          </select>
        </div>

        <div className='text-md bg-white rounded-xl w-1/7 p-1 hover:bg-green-200'>
          Sorting by
          <select className='mx-1' value={sorting} onChange={(e) => setSorting(e.target.value)}>
            <option value='relevance'>relevance</option>
            <option value='newest'>newest</option>
          </select>
        </div>

        <button onClick={handleClick} className='text-md bg-white rounded-xl w-1/7 p-1 hover:bg-green-200'>
          тут будет svg
        </button>
      </div>

      {isLoading ? (
        'Loading...'
      ) : error ? (
        <div className='text-red'>{error}</div>
      ) : (
        <div className='flex flex-wrap justify-between'>
          {data?.items.map((volume: any) => (
            <VolumeItem key={volume.id} volume={volume} />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomeVolume
