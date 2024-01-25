import Image from 'next/image';

const FeaturedCard = ({ className = '', title, image }) => {
  return (
    <div
      className={
        'rounded-2xl border-[2px] border-green-1 bg-white ' + className
      }
    >
      <div className="group relative z-20 overflow-hidden rounded-2xl bg-line">
        <span
          className="translate-middle absolute z-50 text-center text-display font-semibold"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {' '}
          TBA{' '}
        </span>
        <Image
          src={image}
          alt="Featured 1"
          className="mx-auto rounded-2xl transition-all duration-200 group-hover:scale-110"
        />
      </div>
      <h5 className="p-4 text-center text-4xl font-semibold">{title}</h5>
    </div>
  );
};

export default FeaturedCard;
