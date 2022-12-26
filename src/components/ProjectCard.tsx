interface IProjects {
  data: {
    title: string;
    description: string;
    techStack: string[];
    isOnline: boolean;
    webLink: string;
    sourceLink: string;
  };
}

const ProjectCard = ({ data }: IProjects): JSX.Element => {
  return (
    <div className="p-8 bg-white border-[#cb3b8a] border-2 pink-shadow cursor-default flex flex-col items-stretch min-h-[355px]">
      <h1 className="font-bold text-2xl mb-4">{data.title}</h1>
      <p className="poppins">{data.description}</p>
      <div className="md:h-full flex">
        <div className="gap-8 flex self-end mt-4 md:h-auto h-[50px]">
          {data.sourceLink ? (
            <button className="hover:bg-black  flex justify-center items-center gap-4 text-xl pink-button">
              <a href={data.sourceLink} target="_blank" rel="noreferrer">
                Source
              </a>
            </button>
          ) : null}
          {data.isOnline ? (
            <button className="hover:bg-black flex justify-center items-center gap-4 text-xl pink-button">
              <a href={data.webLink} target="_blank" rel="noreferrer">
                Live Web
              </a>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
