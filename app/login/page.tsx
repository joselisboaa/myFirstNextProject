import Image from "next/image";
import {default as Logo} from "@/public/GEP.svg";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.headerContent}>
      <Image 
        src={Logo}
        width={96}
        height={96}
        alt="GEP Logo"
      />
    </div>
  )
}