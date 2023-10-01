import AnimatedButtonComponent from "@/components/Animateds/AnimatedButtonComponent";
import AnimatedImageComponent from "@/components/Animateds/AnimatedImageComponent";
import AnimatedTextComponent from "@/components/Animateds/AnimatedTextComponent";

const HomePage = () => {
  return (
    <div className="w-full h-full px-32">
      <main className="flex items-center justify-between w-full ">
        <AnimatedImageComponent
          className="w-1/2"
          heightIamge={550}
          urlImage="/assets/avatar.jpeg"
          widthImage={350}
        />
        <div className="w-1/2 text-4xl">
          <AnimatedTextComponent
            className="mb-4"
            text={"Constanza Palavecino"}
          />
          <AnimatedTextComponent
            className="mb-4"
            text={"FULL STACK DEVELOPER"}
          />
          <AnimatedButtonComponent
            textButton="Curriculum"
            className="
              flex 
              items-center 
              justify-center 
              bg-slate-800 
              text-slate-100 
              p-2 
              rounded-lg 
              text-lg 
              hover:bg-slate-100 
              hover:text-slate-900"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
