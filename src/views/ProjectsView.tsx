import Title from "../components/Title/Title";
import { projectsData } from "../assets/projectsData";
import ProjectCard from "../components/ProjectCard";


const ProjectsView = () => {
  return (
    <div className="min-h-[85vh]">
      <Title text="Projects" />
      <div className="grid grid-cols-3 gap-8 m-4 ">
        {projectsData.map((value, i) => {
          return <ProjectCard key={i} data={value} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsView;
