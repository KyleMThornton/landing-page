"use client";
export default function Home() {
  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-[url('/grain.svg')] bg-center bg-no-repeat bg-cover animate-slowpulse z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-black z-0"></div>
      <main className="relative flex flex-col w-screen h-screen justify-center items-center z-20">
        <div className="flex md:text-8xl text-6xl font-bold text-white">
          {/* <h1 className="md:hover:text-mega ease-in duration-500">B</h1> */}
          <h1>Big things</h1>
        </div>
        <div className="flex md:text-7xl text-5xl font-light">
          <h1 className="text-slate-300">coming soon...</h1>
        </div>
        <span className="loading loading-infinity loading-lg my-5 bg-gradient-to-b from-slate-100 to-gray-500"></span>
        <div className="join">
          <input
            type="text"
            placeholder="Sign up for updates"
            className="input input-bordered w-full max-w-xs join-item"
          />
          <button className="btn join-item" onClick={handleClick}>
            Subscribe
          </button>
        </div>
      </main>
    </div>
  );
}
