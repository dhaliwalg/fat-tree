import { mont, serif_gurmukhi } from "./utilities/fonts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-[30%] md:pt-[5%]">
      <main>
        <h1 className="text-4xl">{"gurjit singh dhaliwal"}</h1>
        <div className="flex flex-col justify-center items-center py-4">
          <div className={serif_gurmukhi.className}>
            <h1 className="text-2xl">{"ਗੁਰਜੀਤ ਸਿੰਘ ਧਾਲੀਵਾਲ"}</h1>
          </div>
        </div>
      </main>
      <div className="text-wrap lg:text-lg lg:w-1/3 text-lg w-2/3">
        <p className={mont.className}>
          {
            "i graduated from UMD in 2023 w/ a bachelor's in computer science and a minor in philosophy & ethics. "
          }
          {
            "i like to write, anything ranging from philosophical papers to short stories. "
          }
          {
            "other than writing, i love to compete in any activity. there's nothing i hate more than being bad."
          }
        </p>
      </div>
    </div>
  );
}
