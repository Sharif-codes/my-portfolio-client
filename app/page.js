import Navbar from "./shared/nav/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex flex-col lg:flex-row mt-10 ">
        <div className="border flex-auto">first box</div>
        <div className="border flex-auto">second box</div>
      </div>
      
    </div>
  );
}
