import styles from "../style";
import { arrowUp } from "../../../public/assets";
import Image from "next/image";

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} get-started-button w-[140px] h-[140px] rounded-full bg-pink-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <Image
            src={arrowUp}
            width={23}
            height={23}
            alt="arrow"
            className="object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}
