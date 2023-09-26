import Layout from "@/components/Layout";
import Contador from "@/components/Contador";
import Carousel from "@/components/Carousel";

export default function Home() {
  const images = [
    "/assets/card/apple.png",
    "/assets/card/discord.png",
    "/assets/card/facebook.png",
    "/assets/card/instagram.png",
    "/assets/card/rappi.png",
    "/assets/card/spotify.png",
    "/assets/card/pinterest.png",
    "/assets/card/twitter.png",
    "/assets/card/whatsapp.png",
    "/assets/card/youtube.png",
  ];

  return (
    <>
      <Layout>
        <div>
          <Contador />
          <Carousel images={images}/>
        </div>
      </Layout>
    </>
  );
}
