import Image from 'next/image';

export const Welcome = () => {
  return (
    <div className="md:w-2/3 w-4/5 mx-auto" id="main">
      <div className="md:pt-10 pt-2">
        <div className="flex 2xl:flex-row flex-col justify-start items-center">
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-4xl choco mt-20 mb-6">
              Welcome to Winter Bears
            </h1>
            <p className="text-2xl text-black my-6 montserrat">
              Winter Bears is a collection of 10,000 adorable polar bear NFTs
              available on the Ethereum blockchain.
            </p>
            <p className="text-2xl text-black my-6 montserrat">
              Each bear is completely unique, created using over 150 individual
              features.
            </p>
          </div>
          <div className="2xl:pl-20 2xl:pt-10 2xl:mt-20 mt-10 lg:w-2/3 xl:w-1/2 w-11/12">
            <Image src="/images/skate.png" alt="" width={606} height={345} />
          </div>
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-start items-start pr-10">
            <h1 className="md:text-5xl text-4xl font-choco my-6">Rarity</h1>
            <p className="text-2xl text-black my-6 montserrat">
              Each Winter Bear is special, but some are even more special than
              the rest.
            </p>
            <p className="text-2xl text-black my-6 montserrat">
              From santa hats to sleeping eyes, all Winter Bears attributes have
              a different rarity score. The combination of features each bear
              has builds its&#39; total rarity score and overall rarity tier.
            </p>
            <p className="text-2xl text-black my-6 montserrat">
              <strong>Aurora</strong> tier are the rarest bears, showcasing the
              most unique features.
            </p>
            <p className="text-2xl text-black my-6 montserrat">
              There are also five extra special unique bears to watch out for.
              If you find one of these, make sure to let us know!
            </p>
          </div>
        </div>
        <div className="flex 2xl:flex-row flex-col mt-10">
          <div className="2xl:w-2/3 w-full object-contain ">
            <img src="/images/rarity.png" alt="" />
          </div>

          <div className="flex flex-col justify-center items-start text-left lg:mt-0 mt-10 mx-auto lg:p-12 p-6">
            <div className="bg-aurora lg:py-6 py-4 rounded-3xl shadow-2xl my-4 lg:w-36 w-32 hover:scale-110">
              <p className="pl-6 lg:text-2xl text-xl text-black montserrat">
                Aurora
              </p>
            </div>
            <div className="bg-avalanche lg:py-6 py-4 rounded-3xl shadow-2xl my-4 hover:scale-110 lg:w-48 w-40">
              <p className="pl-6 lg:text-2xl text-xl text-black montserrat">
                Avalanche
              </p>
            </div>
            <div className="bg-blizzard lg:py-6 py-4 rounded-3xl shadow-2xl my-4 hover:scale-110 lg:w-56 w-44">
              <p className="pl-6 lg:text-2xl text-xl text-black montserrat">
                Blizzard
              </p>
            </div>
            <div className="bg-frost lg:py-6 py-4 rounded-3xl shadow-2xl my-4 hover:scale-110 lg:w-64 w-48">
              <p className="pl-6 lg:text-2xl text-xl text-black montserrat">
                Frost
              </p>
            </div>
            <div className="bg-snow lg:py-6 py-4 rounded-3xl shadow-2xl my-4 hover:scale-110 lg:w-80 w-56">
              <p className="pl-6 lg:text-2xl text-xl text-black montserrat">
                Snow
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-12 mt-6">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-4xl choco my-6">FAQ</h1>
            <h2 className="md:text-4xl text-3xl choco mt-8">
              How do I adopt a Winter Bear?
            </h2>
            <p className="text-2xl text-black my-6 montserrat">
              We have now sold out. Don&#39;t worry though, you can still adopt
              a Winter Bear on{' '}
              <a
                href="https://opensea.io/collection/winterbears"
                className="hover:underline text-blizzard"
              >
                OpenSea
              </a>{' '}
              or{' '}
              <a
                href="https://niftygateway.com/marketplace?collection=0xc8bcbe0e8ae36d8f9238cd320ef6de88784b1734&amp;niftyType=1"
                className="hover:underline text-blizzard"
              >
                Nifty Gateway
              </a>
            </p>
            <h2 className="md:text-4xl text-3xl choco mt-8">
              How do I join the community?
            </h2>
            <p className="text-2xl text-black my-6 montserrat">
              Winter Bears make great profile pictures so you can easily spot
              fellow community members! Follow the official{' '}
              <a
                href="https://twitter.com/winterbearsnft"
                className="hover:underline text-blizzard"
              >
                Twitter
              </a>{' '}
              account and come and say hi in the community{' '}
              <a
                href="https://discord.gg/2P2BtXvANH"
                className="hover:underline text-blizzard"
              >
                Discord
              </a>{' '}
              server.
            </p>
            <h2 className="md:text-4xl text-3xl choco mt-8">
              Are Winter Bears supporting charities?
            </h2>
            <p className="text-2xl text-black my-6 montserrat">
              Yes! Winter Bears has committed to donating $40,000 to She&#39;s
              The First and Polar Bears International upon sellout.
            </p>
            <p className="text-2xl text-black my-6 montserrat">
              Join the{' '}
              <a
                href="https://discord.gg/2P2BtXvANH"
                className="hover:underline text-blizzard"
              >
                Discord
              </a>{' '}
              server to learn more about why we chose to support these wonderful
              charities and the crucial work they&#39;re doing.
            </p>
            <div className="mx-auto lg:py-16 py-12 lg:w-2/3 xl:w-1/2 w-11/12">
              <Image width={606} height={353} alt="" src="/images/fire.png" />
            </div>

            <h2 className="md:text-4xl text-3xl choco mt-8">What are NFTs?</h2>
            <p className="text-2xl text-black my-6 montserrat">
              NFTs are Non-Fungible Tokens. Each Winter Bears NFT that you own
              is truly unique and verifiable on the Ethereum blockchain.
            </p>
            <h2 className="md:text-4xl text-3xl choco mt-8">
              What inspired Winter Bears?
            </h2>
            <p className="text-2xl text-black my-6 montserrat">
              Winter Bears was created by a team of DeFi builders who&#39;ve
              been contributing to the Ethereum community since 2016. We&#39;ve
              been avid NFT collectors and blown away by the uniting power of
              the NFT communities we&#39;ve been involved with.
            </p>
            <p className="text-2xl text-black my-6 montserrat">
              We&#39;re committed to growing the Winter Bears brand and
              providing long term value for our community.
            </p>
            <h2 className="md:text-4xl text-3xl font-choco mt-8">
              What can I do with my Winter Bear?
            </h2>
            <p className="text-2xl text-black my-6 montserrat">
              You are free to do anything you want with them under a
              non-exclusive license.
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <div className="flex flex-col mx-auto">
          <h1 className="md:text-5xl text-4xl font-choco my-6">Roadmap 🚀</h1>
          <div className="bg-gold py-6 rounded-3xl shadow-2xl my-6 p-6 hover:scale-110">
            <p className="text-2xl text-black montserrat">
              <strong>25% minted:</strong> Winter Bears airdrop to three lucky
              holders.
            </p>
          </div>
          <div className="bg-gold py-6 rounded-3xl shadow-2xl my-6 p-6 hover:scale-110">
            <p className="text-2xl text-black montserrat">
              <strong>50% minted:</strong> Winter Bears animated short movie.
            </p>
          </div>
          <div className="bg-gold py-6 rounded-3xl shadow-2xl my-6 p-6 hover:scale-110">
            <p className="text-2xl text-black montserrat">
              <strong>75% minted:</strong> Winter Bears merch store and
              giveaway!
            </p>
          </div>
          <div className="bg-gold py-6 rounded-3xl shadow-2xl my-6 p-6 hover:scale-110">
            <p className="text-2xl text-black montserrat">
              <strong>100% minted:</strong> Exclusive Winter Bears holder party
              in the metaverse with live DJ and prizes!
            </p>
          </div>
          <h2 className="md:text-4xl text-3xl font-choco mt-8">
            What comes next?
          </h2>
          <p className="text-2xl text-black mt-8 mb-6 montserrat">
            You can read more about the roadmap{' '}
            <a
              href="https://medium.com/winter-bears/winter-bears-roadmap-11ef08481705"
              className="hover:underline text-blizzard"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="mx-auto lg:w-2/3 xl:w-1/2 w-11/12 md:mt-20 mt-10">
          <Image width={606} height={402} alt="" src="/images/boat.png" />
        </div>
      </div>
      <div className="md:mt-20 mt-10 md:pb-44 pb-20">
        <div className="flex flex-col justify-start items-start">
          <h1 className="md:text-5xl text-4xl font-choco my-6">Community</h1>
          <p className="text-2xl text-black my-6 montserrat">
            Come and join the Winter Bears community on our journey together!
          </p>
          <div className="flex md:mt-16 mt-10 w-full items-center justify-center">
            <a
              href="https://twitter.com/winterbearsnft"
              className="md:mr-20 mr-10 lg:w-40 w-1/6"
            >
              <Image
                src="/images/twitter-logo.png"
                alt=""
                width={110}
                height={91}
              />
            </a>
            <a
              href="https://discord.gg/2P2BtXvANH"
              className="md:ml-20 ml-10 lg:w-40 w-1/6"
            >
              <Image
                src="/images/discord-logo.png"
                alt=""
                width={110}
                height={81}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
