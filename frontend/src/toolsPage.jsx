import "./main.css";
import backIcon from "./assets/navigation/back_icon.png";
import { useNavigate } from "react-router-dom";

function ToolsPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sora flex flex-row justify-between items-center m-4">
        <div className="flex flex-row items-center gap-4">
          <div
            className="w-13 h-13 rounded-full border border-zinc-400 flex flex-row justify-center items-center cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={backIcon} alt="" />
          </div>
          <div>1st Sem - 2024</div>
        </div>
        <div className="w-13 h-13 rounded-full border border-zinc-400 flex flex-row justify-center items-center">
          S
        </div>
      </div>
      <div className="h-50 mx-4 mt-15 mb-4 rounded-md relative sora">
        <div
          className="h-50 bg-[#1f3a5f] absolute inset-0 text-white p-8 text-3xl rounded-2xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 calc(100% - 4px))" }}
          onClick={() => console.log("draw")}
        >
          Draw
        </div>
        <div
          className="h-50 bg-[#c7d1e0] absolute inset-0 rounded-2xl text-black text-3xl flex flex-row justify-end items-end p-8"
          style={{ clipPath: "polygon(100% 4px, 100% 100%, 0 100%)" }}
          onClick={() => console.log("type")}
        >
          Type
        </div>
      </div>
      <hr className="m-4 border-[#e2e4e8]" />
      <div className="mx-4  sora">
        <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-4 flex items-center my-3">
          Saved Quicknotes
        </div>
        <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-4 flex items-center my-3">
          Central
        </div>
        <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-4 flex items-center my-3">
          Calendar
        </div>
        <div className="border border-zinc-400 h-15 rounded-md cursor-pointer p-4 flex items-center my-3">
          Subjects
        </div>
      </div>
    </>
  );
}

export default ToolsPage;
