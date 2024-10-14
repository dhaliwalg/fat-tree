import Link from "next/link";
import { mont } from "../utilities/fonts";

const projs = [
  {
    title: "birthday countdown (vue.js + pinia)",
    href: "https://bday-bash.vercel.app/",
  },
  {
    title: "houston sikh youth camp (react + python)",
    href: "https://houstonsikhyouthcamp.org/",
  },
  {
    title: "VALORANT exploratory analysis (python + ml)",
    href: "https://dhaliwalg.github.io/320finalproj/",
  },
  {
    title: "smarternships (android + firebase)",
    href: "https://github.com/MichaelG922/Smarternships",
  },
  {
    title: "pagg pros (react + next.js)",
    href: "https://paggpros.vercel.app/",
  },
  {
    title: "iOS exploits (obj-c + logos)",
    href: "https://github.com/dhaliwalg/tweaks",
  },
  {
    title: "discord bots (python + discord api)",
    href: "https://github.com/dhaliwalg/discordbots",
  },
  { title: "this website (nextjs + react)", href: "\\" },
  { title: "others i've forgotten", href: "" },
];

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center pt-[40%] w-3/4 md:pt-[10%]">
      <h1 className="text-3xl">projects:</h1>
      <div className={mont.className}>
        {Object.entries(projs).map(([path, { title, href }]) => {
          return (
            <Link
              key={path}
              href={href}
              className="transition-all hover:text-neutral-800 hover:underline dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-xl mt-4"
            >
              <li>{title}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
