import type { NextPage } from "next";
import Header from "./components/header/_header";
import Section from "./components/section/_section";
import { data } from "./utils/data";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="pt-[7rem] space-y-10">
        {data.sections.map((e) => {
          return <Section title={e} />;
        })}
      </div>
    </>
  );
};

export default Home;
