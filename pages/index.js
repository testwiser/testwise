import styles from '../styles/pages/Home.module.css';
import { useUserContext } from '../UserProvider';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image'

import withAuth from '../withAuth'



const ProjectCard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><Image src="/../public/shoes.jpeg" alt="Logo" height={200} width={400} fill={true} /></figure>
      <div className="card-body">
        <h2 className="card-title">Project Card</h2>
        <p>Description for project card</p>
        <div className="card-actions justify-end">
          <button className="btn self-center">View Project</button>
        </div>
      </div>
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
        <h2 className={styles.title}>Dashboard</h2>
        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>
        <p className='pt-8 pb-8 text-2xl text- text-neutral-900 underline'>Your projects:</p>
        <div className="flex items-stretch space-x-10 ">
          <div>
            <ProjectCard></ProjectCard>
          </div>
          <div>
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Home)