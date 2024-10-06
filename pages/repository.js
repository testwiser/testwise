import Layout from '../components/Layout';
import SidebarMenu from '../components/SideBar';

import Project from "./project"
import FolderTree from "../components/repository/FolderTree";

const Repository = () => {
    return (
        <Layout>
        <div className='flex items-stretch'>
        <SidebarMenu>
        </SidebarMenu>
        <FolderTree></FolderTree>


        </div>
    </Layout>

    )
}

export default Repository