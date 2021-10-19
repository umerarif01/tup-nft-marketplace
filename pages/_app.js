import 'tailwindcss/tailwind.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
  <body className="">
     <nav className="border-b shadow-lg p-6">
     <div className="flex">
     <img 
     className="w-[50px] pr-2"
     src="https://s2.coinmarketcap.com/static/img/coins/200x200/4411.png"/>
     <p className="text-4xl font-bold">TUP NFT MarketPlace</p>
     </div>
     <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-purple-500 font-bold hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-2 transition ">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-purple-500 font-bold hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-2 transition">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-purple-500 font-bold hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-2 transition">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-purple-500 font-bold hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-2 transition">
              Creator Dashboard
            </a>
          </Link>
        </div>
     </nav>
    <Component {...pageProps} />
  </body>
  )
  }

export default MyApp
