import Posts from "./components/Posts";
import Time from "./components/Time";
import Date from "./components/Date";
import Github from "./assets/github.png";

const App = () => {
  return (
    <div className="gradient-bg min-h-[100vh] text-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-10">
          <div className="flex flex-col gap-3">
            <Time />
            <Date />
          </div>
        </div>
        <div className="mt-5">
          <Posts />
        </div>
        <div className="py-5 flex justify-end">
          <a href="https://github.com/mmrakt/mimu-home">
            <img src={Github} alt="" width={32} height={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
