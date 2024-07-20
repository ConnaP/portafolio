import AnimatedTextComponent from "@/components/Animateds/AnimatedTextComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import ProjectsUiUxComponent from "@/components/Projects/ProjectsUiUxComponent";
import "@/pages/css/projects.css";

const ProjectsPage = () => {
  return (
    <>
      <div className="text-4xl">
        <AnimatedTextComponent className="mb-8 mt-4" text={"PROJECTOS UX/UI"} />
      </div>
      <div className="container-projects-page">
        <ProjectsUiUxComponent />
      </div>

      <div className="text-4xl mt-5 pt-5">
        <AnimatedTextComponent
          className="mb-8 mt-4"
          text={"PROJECTOS FULL STACK"}
        />
      </div>
      <div className="container-projects-page">
        <ProjectsComponent />
      </div>
    </>
  );
};

export default ProjectsPage;
