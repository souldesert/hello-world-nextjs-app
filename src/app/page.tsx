'use client';

import styles from './page.module.css';
import Counter from './components/counter/counter';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js</h1>
      <p>Hello, World!</p>

      <Counter />
    </main>
  )
}
