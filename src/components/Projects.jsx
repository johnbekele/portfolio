import EachProject from './EachProject';
import FolderProject from './FolderProject';
import BookMemo from '../assets/projects/BookMemo.png';
import GeezOS from '../assets/projects/GeezOS.png';
import WorkerDay from '../assets/projects/WorkerDay.png';
import './Projects.css';

const Projects = () => {
    let isLeft = true;
    const projects = [
        {
            projectImage: BookMemo,
            projectTitle: 'Book and Memories - Book Sharing Social Media App',
            
            projectDescription: 'An App where people can share their experiences with books, discover new reads, and connect with others who share similar interests. ',
            projectTechStack: ['React', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Talwind', 'AWS EC2','Vercel','gemini AI'],
            githubRepo: 'https://github.com/johnbekele/Book-and-Memories',
            otherLink: 'https://book-and-memories.vercel.app/'
        },
        {
            projectImage: GeezOS,
            projectTitle: 'Geez Network Scanning Tool',
            projectDescription: ' is a security assessment tool designed for macOS. It provides a simple interface for scanning IP addresses and websites, displaying results in a terminal-style output window.',
            projectTechStack: ['Electron js', 'NodeJS', 'Bash', 'PWD', 'Mongoose', 'Talwind',"CSS"],
            githubRepo: 'https://github.com/johnbekele/Book-and-Memories',
            otherLink: 'https://book-and-memories.vercel.app/'
        },
        {
            projectImage: WorkerDay,
            projectTitle: 'Worker Day - Employee Management System',
            projectDescription: ' is a full-stack web application designed as a User Management Dashboard. It provides a platform for managing user profiles, tracking performance, handling attendance, and managing role-based access.',
            projectTechStack: ['React', 'NodeJS', 'Express', 'Postgres', 'Sequalize', 'Talwind', 'AWS EC2','AWS RDS','Vercel'],
            githubRepo: 'https://github.com/johnbekele/WorkerDay-Frontend.git',
            otherLink: 'https://book-and-memories.vercel.app/'
        },
       
    ]
    const folderProjects = [
        {
            projectTitle: 'Swift News Search',
            projectDescription: ' is a web application designed to help users search, filter, and analyze news articles using AI-driven insights. ',
            projectTechStack: ['Express', 'NodeJS', 'Postgress', 'SQL', 'Gemini AI ', 'EJS','CSS ','render'],
            githubRepo: 'https://github.com/johnbekele/Geez-Offensive-Security-Scanner.git',
            otherLink: ''
        },
        {
            projectTitle: 'TemariGo',
            projectDescription: 'Udemy Clone learing androide Application .',
            projectTechStack: ['React Native ', 'Vite ', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'],
            githubRepo: 'https://github.com/johnbekele/TemariGo.git',
            otherLink: ''
        },
        {
            projectTitle: 'After-connection-tool',
            projectDescription: 'script is designed to securely remove traces of SSH/SCP activities from a system, targeting both Linux/macOS and Windows operating systems.',
            projectTechStack: ['Python', 'Bash', 'PowerShell'],
            githubRepo: 'https://github.com/johnbekele/After-connection-tool.git',
            otherLink: ''
        },
       
    ]
    return (
        <div id='projects' className='sectionContainer projectContainer'>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <h2 className='sectionTitle' style={{marginRight: '40px'}}> <span className='linkText'> 03. </span> Projects </h2>
                <div className='horizontalLine' style={{width: '60%'}}></div>
            </div>
            <br></br>
            <div>
                {
                    projects.map((project, index) => {
                        isLeft = !isLeft;
                        return <EachProject projectAlignment={isLeft} projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectTechStack={project.projectTechStack} projectGithubRepo={project.githubRepo} projectOtherLink={project.otherLink} key={index} />
                    })
                }
            </div>
            <div className='folderProjects'>
                <h1 style={{color: 'var(--gentle-blue)', marginBottom: '20px', marginLeft: '-55px'}}> Other Noteworthy Projects </h1>
                <div className='folderProjectsGrid'>
                    {
                        folderProjects.map((project, index) => {
                            return <FolderProject projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectTechStack={project.projectTechStack} projectGithubRepo={project.githubRepo} projectOtherLink={project.otherLink} key={index} />
                        })
                    }
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
                <a href='https://github.com/johnbekele' target='_blank' rel='noreferrer'>
                    <button className='outlinedBtn cta'> Check out more projects </button>
                </a>
            </div>

        </div>
    );
}

export default Projects;