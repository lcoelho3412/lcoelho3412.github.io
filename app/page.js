import Image from "next/image";
import Header from "./header";
import Photo from "../public/genericGuy.jpg";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mainpage">
        <div>Hello.</div>
        <div>I am </div>
        <div>Leandro</div>
      </div>
    </main>
  );
}
