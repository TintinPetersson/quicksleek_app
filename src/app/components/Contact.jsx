import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flew-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Meet the trio <br className="sm:block hidden" />
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            We're three coding enthusiasts who thought, 'Why not turn our
            classroom antics into professional magic?' And here we are, making
            the web a bit more interesting, one line of code at a time!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
