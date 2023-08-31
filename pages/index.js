import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image'
import withAuth from '../withAuth'
import ProjectCard from '../components/ProjectCard';


const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard - TestWise</title>
      </Head>
      <div className='float-right mr-10'>
          <button className="btn">
                New Project
                <div className='right-0'>
                  <a>
                    <Image
                      src='/undraw_circled-plus.svg'
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </button>
          </div>
          <p className='pt-15 pb-10 pl-5 font-bold text-2xl underline-offset-1'>Projects:</p>
        <div>
          <div className='flex flex-row'>
            <ProjectCard></ProjectCard>
          </div>
        </div>
    </Layout>
  );
}

export default withAuth(Home)