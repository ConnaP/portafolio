import AnimatedSkillsComponent from "@/components/Animateds/AnimatedSkillsComponent";
import AnimatedTextComponent from "@/components/Animateds/AnimatedTextComponent";
import "@/pages/css/skills.css";

const SkillsPage = () => {
  return (
    <>
      <div className="container-all-skills px-2">
        <div className="text-4xl">
          <AnimatedTextComponent className="mb-4 mt-4" text={"SKILLS"} />
        </div>
        <div className="text-1xl text-skills">
          <AnimatedTextComponent
            className="mb-4 mt-4"
            text={
              "¡Hola! Soy una desarrolladora full stack apasionada por la creación de soluciones tecnológicas innovadoras que impulsan el mundo digital. Mi enfoque se centra en el desarrollo de aplicaciones web completas, desde la interfaz de usuario hasta el servidor y la base de datos."
            }
          />
        </div>
        <div className="container-p">
          <div className="container-skills">
            <AnimatedSkillsComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
