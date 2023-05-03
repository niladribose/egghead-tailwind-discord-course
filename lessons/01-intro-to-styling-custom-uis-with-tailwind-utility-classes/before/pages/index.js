export default function Home() {
  return (
    <div
      className="bg-gray-700 text-white min-h-screen flex 
  items-center justify-center"
    >
      <div className="max-w-lg">
        <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <img className="w-10 h-10 rounded-full mr-4" src="/adamwathan.jpeg" />
          <div>
            <p className="flex items-baseline ">
              <span className="text-green-500 mr-2 text-sm font-medium">
                NiladriBose
              </span>
              <span className="text-xs text-gray-500">01/15/2023</span>
            </p>
            <p className="text-gray-300 flex">
              You should never use something like leading relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger
            </p>
          </div>
        </div>
        <div className="mt-1  hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            You should never use something like leading relaxed with a big font
            size, it goes against all typography best practices. Line height
            should decrease as font size gets bigger
          </p>
        </div>
      </div>
    </div>
  );
}
