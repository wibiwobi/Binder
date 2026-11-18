import "./main.css";

function SemesterPage() {
  return (
    <>
      <div className="mx-4 mt-4 mb-15 sora">
        <div className="flex flex-row justify-between items-center">
          <div className="text-[15px] text-[#55606f]">
            Another day another grind...
          </div>
          <div className="w-16 h-16 rounded-full bg-amber-400"></div>
        </div>
        <div className="sora-bold text-[25px]">Welcome back, chris</div>
      </div>
      <div className="m-3 sora overflow-y-auto h-110 p-2">
        <div className="my-10">
          <div className="text-[#55606f] text-right mb-1 ">2024</div>
          <div className="flex flex-col gap-2 sora">
            <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-5">
              1st Sem
            </div>
            <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-5">
              2nd Sem
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-[#55606f] text-right mb-1 ">2024</div>
          <div className="flex flex-col gap-2 sora">
            <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-5">
              1st Sem
            </div>
            <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-5">
              2nd Sem
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-[#55606f] text-right mb-1 ">2024</div>
          <div className="flex flex-col gap-2 sora">
            <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-5">
              1st Sem
            </div>
            <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-5">
              2nd Sem
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SemesterPage;
