import BodyContent from "@/components/bodyContent/BodyContent";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import TopContentBlock from "@/components/topConctentBlock/TopContentBlock";
import TopTitleBlock from "@/components/TopTitleBlock";
import getData from "./_mainDataGet/getData";

export default async function Home() {
  const data = await getData()
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <TopTitleBlock />
        <Navigation />
        <TopContentBlock data={data} />
        <BodyContent data={data} />
      </div>
      <Footer />
    </>
  );
}
