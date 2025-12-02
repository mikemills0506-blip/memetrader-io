export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <h1 className="text-2xl font-bold">memetrader.io</h1>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Launch</a>
          <a href="#" className="text-gray-300 hover:text-white">Explore</a>
          <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* MAIN HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6">
          Launch & Trade Meme Coins Instantly
        </h2>

        <p className="text-gray-300 text-lg max-w-xl mb-10">
          Create tokens, join bonding curves, and trade live — all on Solana’s
          fastest Web3 infrastructure.
        </p>

        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white text-lg font-semibold shadow-md transition">
          Launch a Token
        </button>
      </section>

    </main>
  );
}
