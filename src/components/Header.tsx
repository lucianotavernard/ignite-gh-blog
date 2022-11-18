import faviconImg from '@/assets/favicon.svg'
import headerBg from '@/assets/bg-header.png'

export function Header() {
  return (
    <header className="relative flex justify-center items-center w-ful h-72">
      <div className="z-0 absolute top-0 w-full h-full">
        <img className="w-full h-full" src={headerBg} alt="" />
      </div>

      <img className="z-10 relative mb-20" src={faviconImg} alt="" />
    </header>
  )
}
