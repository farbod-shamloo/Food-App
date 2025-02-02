import Companies from "../modules/Companies";
import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Definition from "../modules/Definition";
import styles from "./HomePage.module.css";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Rest from "../modules/Rest"

function HomePage() {
  return <div className={styles.container}>
    <Banner />
    <Attributes />
    <Definition />
    <Companies />
    <Instruction />
    <Guide />
    <Rest />
  </div>;
}

export default HomePage;
