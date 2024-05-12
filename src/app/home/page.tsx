import { TweetForm } from "./tweetform";
import Image from "next/image";
import { auth } from "@/lib/auth";
import profilepic from "@/../public/profilepic.svg";

export default async function Home() {
  const mockTweets = [
    "Wow so cool",
    "amazing content as always!",
    "This thing sucks :(",
  ];
  const session = await auth();
  if (session) {
    console.log(session.user?.image);
  }

  return (
    <div className="ml-16 h-screen w-full min-w-0 max-w-xl shrink-0 border-x border-slate-200 dark:border-slate-800 dark:bg-slate-950 md:ml-72">
      <div className="mx-auto grid w-full shrink-0 grid-cols-8 grid-rows-1 pt-12">
        <div className="col-start-1 col-end-1 row-start-1 row-end-auto mx-auto pt-2">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="User profile picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <Image src={profilepic} alt="User profile picture" />
          )}
        </div>
        <TweetForm />
      </div>
      <div className="flex flex-col">
        {mockTweets.map((value, key) => {
          return (
            <div
              className="grid min-h-20 auto-rows-min grid-cols-8 border border-b pt-2 dark:border-slate-800"
              key={key}
            >
              <div className="col-start-1 col-end-1 row-start-1 row-end-3 mx-auto pr-1 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div className="col-start-2 col-end-8 row-start-1 row-end-1 font-semibold">
                <span className="">User Info </span>
                <span className="text-sm font-light text-slate-400">
                  @randomstuff
                </span>
              </div>
              <div className="col-start-2 col-end-8 row-start-2 font-light">
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
