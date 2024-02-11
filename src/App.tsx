import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh] text-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-2xl">15:00</div>
        <Posts />
      </div>
    </div>
  );
};

export default App;
