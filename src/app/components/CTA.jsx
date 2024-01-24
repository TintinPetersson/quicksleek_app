import styles from "../style";
import Button from "./Button";

export default function CTA() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Contact us right now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Thanks for stopping by. Email us with any questions or requests. We
          are always quick to respond!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
}
