import Random from "./Components/Random";
import Tag from "./Components/Tag"
export default function APP(){
  return (

      <div className="w-full h-screen flex flex-col bg-blue-300  items-center overflow-x-hidden">
          <h1 className=" bg-white rounded-md font-bold w-11/12 mt-[40px] ml-[15px] px-10 py-2 text-center text-4xl">RANDOM  GIFS</h1>

          <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
            <Random/>
            <Tag/>
          </div>

      </div>

  );
}
