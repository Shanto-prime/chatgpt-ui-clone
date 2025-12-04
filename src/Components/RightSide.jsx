import Welcome from "../Partials/Welcome";

export default function RightSide() {
  return (
    <>
      <div className="flex-1 bg-[#212121] overflow-y-auto text-white">
        <div className="flex flex-col h-full">
          <Welcome />
          <textarea name="userInput" id=""></textarea>
        </div>
      </div>
    </>
  );
}
