import type { NextPage } from "next";
import Header from "./components/header/_header";
import Section from "./components/section/_section";

const Home: NextPage = () => {
  const titles: String[] = ["Bolos", "Tortas", "Salgados", "Bebidas"];
  return (
    <>
      <Header />
      <div className="pt-[7rem] space-y-64">
        {titles.map((e) => {
          return <Section title={e} />;
        })}
      </div>
    </>
  );
};

export default Home;
