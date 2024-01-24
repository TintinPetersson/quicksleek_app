import styles, { layout } from "../style";
import { card } from "../../../public/assets";
import Button from "./Button";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Discover More <br className="sm:block hidden" />
          About Our Team.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We are a trio of passionate Swedish software developers, united in our
          commitment to excellence in coding and the latest technologies. Our
          site showcases our expertise, offering a window into our dedication
          and a channel to connect with clients and employers.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <Image src={card} alt="card" width={"100%"} height={"100%"} />
      </div>
    </section>
  );
}
