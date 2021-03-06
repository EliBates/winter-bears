import Image from 'next/image';

export const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full lg:pt-6 pt-20 bg-dark">
      <img
        src="images/animated.gif"
        className="animated lg:w-3/4 w-11/12 maxHeight object-contain"
        alt="adopt me"
      />
      <a
        href="https://opensea.io/collection/winterbears"
        className="text-center pt-9 pb-5 md:px-16 px-12 bg-white choco lg:text-7xl md:text-5xl sm:text-4xl text-4xl rounded-3xl shadow-2xl hover:bg-black hover:text-white hover:scale-110"
      >
        ADOPT ME
      </a>
    </div>
  );
};
