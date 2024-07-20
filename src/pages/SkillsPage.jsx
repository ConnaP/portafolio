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
              "¡Hola! Soy Constanza Palavecino, diseñadora UI/UX y desarrolladora full stack. Me encanta crear experiencias digitales que sean intuitivas y atractivas para los usuarios. Combino mis habilidades en diseño y desarrollo para ofrecer soluciones completas, desde la idea inicial hasta el producto final."
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
