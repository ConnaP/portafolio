import AnimatedTextComponent from "@/components/Animateds/AnimatedTextComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import "@/pages/css/projects.css";

const ProjectsPage = () => {
  return (
    <>
     <div className="text-4xl">
        <AnimatedTextComponent className="mb-8 mt-4" text={"PROJECTS"} />
      </div>
      <div className="container-projects-page">
        <ProjectsComponent />
      </div>
    </>
  );
};

export default ProjectsPage;
