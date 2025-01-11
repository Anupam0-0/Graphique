import heroImage from "../../assets/heroImage.jpg";

const Secondary = () => {
  return (
    <div className="bg-[#F9F7EE] h-fit">
      <main className="bg-slate-950 rounded-t-3xl h-[140vh] w-full pt-40 px-4 lg:px-16">
        {/* MAIN  */}
        <h1 className="w-full text-center  text-6xl text-slate-50 font-bold">A fresh take on editing your graphics</h1>
        <div className="w-full flex py-10 justify-center gap-8">
          <div className="px-4 py-1 bg-text-50 font-medium text-slate-950 border bg-slate-50 border-slate-50 hover:bg-slate-950 hover:text-slate-50 rounded-3xl coursor-pointer  " >Drawing</div>
          <div className="px-4 py-1 bg-text-50 font-medium text-slate-950 border bg-slate-50 border-slate-50 hover:bg-slate-950 hover:text-slate-50 rounded-3xl coursor-pointer  " >Graphics</div>
          <div className="px-4 py-1 bg-text-50 font-medium text-slate-950 border bg-slate-50 border-slate-50 hover:bg-slate-950 hover:text-slate-50 rounded-3xl coursor-pointer hover:cursor-pointer " >Editing</div>
        </div>
        <div className="w-full text-center text-slate-50 text-xl ">
        Create stunning designs effortlessly with a reliable, <br /> feature-packed Canva clone built with pure TypeScript
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <img
            src={heroImage}
            alt="Description of image"
            className="rounded-xl w-[70vw]"
          />
        </div>
      </main>
    </div>
  );
};

export default Secondary;
