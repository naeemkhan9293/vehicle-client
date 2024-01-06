import Image from "next/image";
import ImageSlider from "./imageSlider/ImageSlider";
import Card from "./cards/Card";

export default function Home() {
  return (
    <main>
      <ImageSlider data={{ images: "./mvac.jpg", category: "category" }} />
      <section className="home-container text-gray-600 body-font flex overflow-x-scroll scroll-smooth snap-mandatory snap-x ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
