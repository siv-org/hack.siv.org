import { FaFolderOpen } from 'react-icons/fa'

export const ArchiveBanner = () => {
  return (
    <div className="text-center italic bg-purple-300/80 p-4 rounded text-black text-base w-full flex items-center justify-center">
      <span className="text-2xl hidden sm:inline-block mr-2.5">
        <FaFolderOpen />
      </span>
      Archive of the contest that ran from August 6 – 19, 2024
    </div>
  )
}
