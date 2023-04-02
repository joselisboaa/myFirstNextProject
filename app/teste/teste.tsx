"use client"
import styles from "@/app/page.module.css";
import { useState } from "react";

export default function ClientComponent ({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState<number>(0);
  
  return (
    <div className={styles.main}>
      <p>Contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Teste
      </button>
      {children}
    </div>
  )
}