import { mont } from "./fonts";
import { anek } from "./fonts";
import AmongUsParticles from "@/public/Particles";
import Footer from "./footer";
import { Navbar } from "./nav";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-wrap">
      <div className="fixed inset-0 z-0">
        <AmongUsParticles />
      </div>
      <div className="z-10 flex flex-col justify-center items-center">
        <Navbar/>
        <main>
          <h1 className="text-4xl">{"gurjit singh dhaliwal"}</h1>
          <div className="flex flex-col justify-center items-center py-4">
            <div className={anek.className}>
            <h1 className="text-xl">{"ਗੁਰਜੀਤ ਸਿੰਘ ਧਾਲੀਵਾਲ"}</h1>
            </div>

          </div>
        </main>
        <div className="py-8 text-wrap text-lg w-1/3">
          <p className={mont.className}>
            {
              "hi! this is my portfolio, i graduated from UMD in 2023 w/ a bachelor's in computer science and a minor in philosophy & ethics."
            }
            <br />
            {"i love to write philosophical papers and short stories. "}
            {
              "other than writing, i like to compete in any activity. there's nothing i hate more than being bad. i've competed in a bhangra and basketball over the years."
            }
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
