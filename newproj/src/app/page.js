import Note from "./note.js";
export default function Home() {
  return <div className="flex items-center flex-col w-screen h-screen bg-amber-200">
    <div className="width-[50%] height-[20%] p-4">Pin Board</div>
    <div className="min-w-[80%] min-h-[80%] bg-amber-300 relative">
      <Note/>
    </div>
  </div>
}
