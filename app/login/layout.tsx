import styles from "@/app/page.module.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <header className={styles.homeLayout}>
      {children}
    </header>
  )
}