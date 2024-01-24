import styles, { layout } from "../style";
import { apple, bill, google } from "../../../public/assets";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Image
          src={bill}
          alt="projects"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Always focused on <br className="sm:block hidden" />
          your goals.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover our earlier website projects, reflecting our dedication to
          coding excellence and innovative web solutions.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image
            src={apple}
            alt="apple_store"
            width={128}
            height={42}
            className="object-contain mr-5 cursor-pointer"
          />
          <Image
            src={google}
            alt="google_play"
            width={128}
            height={42}
            className="object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
