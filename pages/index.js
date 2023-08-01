import styles from '../styles/pages/Home.module.css';
import { useUserContext } from '../UserProvider';
import Head from 'next/head';
import Layout from '../components/Layout';

import withAuth from '../withAuth'



const ProjectCard = () => {
  return (
    <div>
      <p className='text-lime-600'>Project Card</p>
    </div>
  )
}

const Home = () => {
  const { user } = useUserContext();

  return (
    <Layout>
      <Head>
        <title>Dashboard - TestWise</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline bg-red-300 text-lime-600">
          Hello world!
        </h1>
        <h2 className={styles.title}>Dashboard</h2>
        <p className="text-blue-600">The quick brown fox...</p>
        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>

        <p className={styles['info-text']}>
          <ProjectCard></ProjectCard>
        </p>
      </div>
    </Layout>
  );
}

export default withAuth(Home)