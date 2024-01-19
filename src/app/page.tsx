"use client";

import { Loading } from "react-loading-dot";

export default function Home() {
  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-br from-slate-300 to-white-100">
      <div className="flex md:text-8xl text-6xl font-bold">
        <h1 className="md:hover:text-9xl ease-in duration-500">B</h1>
        <h1>ig things</h1>
      </div>
      <div className="flex md:text-7xl text-5xl font-light">
        <h1 className="">coming soon...</h1>
      </div>
      <div className="md:mt-60 mt-40">
        <Loading />
      </div>
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
  );
}
