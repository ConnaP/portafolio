import AnimatedButtonComponent from "@/components/Animateds/AnimatedButtonComponent";
import AnimatedImageComponent from "@/components/Animateds/AnimatedImageComponent";
import AnimatedTextComponent from "@/components/Animateds/AnimatedTextComponent";

import '@/pages/css/home.css'

const HomePage = () => {
  return (
    <div className="w-full h-full pl-6 pr-20">
      <main className="flex items-center justify-between w-full container-home">
        <AnimatedImageComponent
          heightIamge={600}
          urlImage="/assets/foto.png"
          widthImage={500}
        />
        <div className="text-1xl description">
          <AnimatedTextComponent
            className="mb-4"
            text={"¡Hola! Soy Constanza Palavecino, diseñadora UX/UI y desarrolladora full stack. Me encanta crear experiencias digitales que sean intuitivas y atractivas para los usuarios. Combino mis habilidades en diseño y desarrollo para ofrecer soluciones completas, desde la idea inicial hasta el producto final."}
          />
          <AnimatedTextComponent
            className="mb-4 capitalize font-bold"
            text={"UI/UX - FULL STACK"}
          />
          
          {/* <AnimatedButtonComponent
            textButton="Curriculum"
            className="
              flex 
              items-center 
              justify-center
              color-btn
              text-slate-100 
              p-2 
              rounded-lg 
              text-lg 
              hover:text-slate-900
              "
          /> */}
          
        </div>
      </main>
    </div>
  );
};

export default HomePage;
