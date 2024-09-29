import Movies from "../../components/Movies";
import Layout from "../../layout";

const Home = () => {
  return (
    <Layout>
      <section className="py-2 h-full w-full flex flex-col">
        <Movies />
      </section>
    </Layout>
  );
};

export default Home;
