import Title from "../components/Title/Title";
import { projectsData } from "../assets/projectsData";
const ProjectsView = () => {
  return (
    <div className="min-h-[85vh]">
      <Title text="Projects" />
      <div className="grid grid-cols-3 gap-4 m-4 ">
        {projectsData.map((value, i) => {
          return (
            <div
              key={i}
              className="p-8 bg-white border-[#cb3b8a] border-2 pink-shadow cursor-default flex flex-col items-stretch "
            >
              <h1 className="font-bold text-2xl mb-4">{value.title}</h1>
              <p className="poppins">{value.description}</p>
              <div className="h-full flex">
                <div className="gap-8 flex self-end mt-4">
                  <button className="hover:bg-black  flex justify-center items-center gap-4 text-xl pink-button">
                    <a href={value.sourceLink} target="_blank" rel="noreferrer">
                      Source
                    </a>
                  </button>
                  {value.isOnline ? (
                    <button className="hover:bg-black flex justify-center items-center gap-4 text-xl pink-button">
                      <a href={value.webLink} target="_blank" rel="noreferrer">
                        Live Web
                      </a>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsView;
