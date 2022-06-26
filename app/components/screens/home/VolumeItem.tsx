import Image from 'next/image'
import { FC } from 'react'
import defaultImage from '../../../../public/no-image.jpg'

const VolumeItem: FC<{ volume: any }> = ({ volume }) => {
  return (
    <div style={{ width: '48%', backgroundColor: '#E5F0EA' }} className="rounded-xl mb-5 p-3 shadow-sm">
      <div className="text-center">
        <Image
          src={volume.volumeInfo.imageLinks ? volume.volumeInfo.imageLinks.thumbnail : defaultImage}
          alt={volume.volumeInfo.title}
          width="100"
          height="143"
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5">
          {volume.volumeInfo.title}
        </div>
        <div className="text-sm text-green-600">
          pages: {volume.volumeInfo.pageCount ? volume.volumeInfo.pageCount : '0'}
        </div>
      </div>
      <button className="text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200">Open book</button>
    </div>
  )
}

export default VolumeItem
