import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full md:p-6 p-3 bg-white">
      <div className="flex items-center">
        <a href="/" className="hidden-img">
          <Image
            src="/images/santa.png"
            alt=""
            className="justify-start md:block hidden"
            width={100}
            height={90}
          />
        </a>
        <a
          href="/"
          className="test md:px-10 px-4 md:pt-3 pt-1 lg:text-6xl md:text-5xl text-3xl"
        >
          Winter Bears
        </a>
      </div>
      <div className="flex md:flex-wrap justify-evenly items-center montserrat tracking-widest md:text-2xl text-l">
        <div className="auth justify-center items-center">
          <button className="md:mx-6 mx-2 my-1 md:px-8 px-3 md:py-3 py-1 rounded-xl bg-gold shadow-2xl text-black hover:scale-110">
            <strong>Connect</strong>
          </button>
        </div>
        <a
          href="https://twitter.com/winterbearsnft"
          className="md:mx-6 mx-2 my-1"
        >
          <Image
            src="/images/twitter-logo.png"
            className="md:w-16 w-8"
            alt=""
            width={65}
            height={54}
          />
        </a>
        <a href="https://discord.gg/2P2BtXvANH" className="md:mx-6 mx-2 my-1">
          <Image
            src="/images/discord-logo.png"
            className="md:w-16 w-8"
            alt=""
            width={65}
            height={47}
          />
        </a>
      </div>
    </nav>
  );
};
