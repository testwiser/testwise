import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image'
import withAuth from '../withAuth'
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import styles from '../styles/components/Layout.module.css';
import stylesHome from '../styles/pages/Home.module.css';
import { useUserContext } from '../UserProvider';
import { FaPlus } from "react-icons/fa6";


const Home = () => {
  const { user } = useUserContext()
  return (
    <Layout>
      <Head>
        <title>Dashboard - TestWise</title>
      </Head>


      <div className='pb-20 pt-10 pl-5'>
        <h2 className={stylesHome.title}>Dashboard</h2>
        <p className={stylesHome['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello-message">
            👋
          </span>
        </p>

      </div>
      <div className='float-right mr-10'>
        <button className="btn">
          Add Project
          <div className='right-0'>
            <a>
              <FaPlus/>
            </a>
          </div>
        </button>
      </div>
      <div className='shadow-[rgba(0,0,0,0.1)_0px_2px_0px_0px]'>
      <p className='pt-15 pb-5 pl-5 font-bold text-2xl underline-offset-1'>Projects:</p>
      </div>
      <div className='pt-10'>
        <div className='flex flex-row'>
          <Link href="/project" passHref>
            <a>
              <ProjectCard  ></ProjectCard>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Home)