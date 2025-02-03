import Banner from "@/components/home/banner/Banner";
import Card from "@/components/home/card/Card";
import { MSG } from "@/constants/MSG";

const Home = () => {
  return (
    <main className="w-screnn max-w-full">
      <Banner />

      <section className="max-w-screen-2xl w-full m-auto py-40 grid grid-cols-4 gap-8">
        {MSG.COMPONENTS.HOME.CARD.map((card, i) => (
          <Card {...card} key={i}/>
        ))}
      </section>
    </main>
  );
};

export default Home;
