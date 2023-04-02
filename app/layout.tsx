import styles from "@/app/page.module.css";
import './globals.css'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <header className={styles.homeLayout}>
          {children}
        </header>
      </body>
    </html>
  )
}