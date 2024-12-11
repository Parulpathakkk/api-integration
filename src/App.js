import Header from "./Components/Header";
import HeadingSection from "./Components/HeadingSection";
import TableSection from "./Components/TableSection";
function App() {
  return (
    <main className="flex">
      <div className="bg-[#1C2536] hidden md:block md:w-[15cqw] xl:min-h-screen"></div>
      <div className="md:py-[1cqw] md:px-[2cqw] w-full p-[4cqw]">
        <Header/>
        <HeadingSection/>

       <TableSection/>
      </div>
    </main>
  );
}

export default App;
