import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  return (
    <>
      <div className="flex flex-row text-xl">
        <Link
          href={"https://github.com/dhaliwalg"}
          className="hover:underline flex items-center mr-4"
        >
          <GoArrowUpRight className="mr-0.5" />
          <p>{"github"}</p>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gurjit-dhaliwal/"}
          className="hover:underline flex items-center mr-4"
        >
          <GoArrowUpRight className="mr-0.5" />
          <p>{"linkedin"}</p>
        </Link>
        <Link
          href={
            "cydia://url/https://cydia.saurik.com/api/share#?source=https://dhaliwalg.github.io/"
          }
          className="hover:underline flex items-center mr-4"
        >
          <GoArrowUpRight className="mr-0.5" />
          <p>{"cydia_repo"}</p>
        </Link>
      </div>
    </>
  );
}
