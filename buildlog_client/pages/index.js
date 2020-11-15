import Head from 'next/head'
import Login from '../components/users/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  )
}
