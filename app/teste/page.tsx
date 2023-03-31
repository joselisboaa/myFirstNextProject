"use client"
import styles from "@/app/page.module.css";

export default function Teste () {
  return (
    <div className={styles.main}>
      <p>Testando novo componente</p>
      <button onClick={() => console.log("Hello world")}>Teste</button>
    </div>
  )
}