import AnimatedSkillsComponent from "@/components/Animateds/AnimatedSkillsComponent";
import AnimatedTextComponent from "@/components/Animateds/AnimatedTextComponent";
import "@/pages/css/skills.css";

const SkillsPage = () => {
  return (
    <>
      <div className="text-4xl">
        <AnimatedTextComponent className="mb-4 mt-4" text={"SKILLS"} />
      </div>
      <div className="container-p">
        <div className="container-skills">
          <AnimatedSkillsComponent />
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
