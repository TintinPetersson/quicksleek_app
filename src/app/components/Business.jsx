"use client";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
import Image from "next/image";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

export default function Business() {
  return (
    <section id="services" className={`${layout.section} md:mt-36 mt-12`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You focus on your business, <br className="sm:block hidden" />
          we'll manage your online prescence.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ipsa consequatur ex, cupiditate praesentium rerum quisquam corrupti
          minima inventore placeat libero. Ex, commodi aliquid rerum hic totam
          labore cumque non?
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
