import Image from "next/image"

const FeaturedCard = ({className = '', title, image}) => {
  return <div className={"border-[2px] border-green-1 bg-white rounded-2xl " + className}>
    <div className="bg-line rounded-2xl z-20 group overflow-hidden relative">
        <span className="absolute translate-middle text-center text-5xl font-semibold z-50" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}> TBA </span>
        <Image src={image} alt="Featured 1" className="rounded-2xl group-hover:scale-110 transition-all duration-200 mx-auto" />
    </div>
    <h5 className="p-4 text-center text-4xl font-semibold">
        {title}
    </h5>
  </div>
}

export default FeaturedCard