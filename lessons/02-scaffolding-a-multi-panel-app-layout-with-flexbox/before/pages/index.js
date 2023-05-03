export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col overflow-y-scroll ">
        <div className="px-4 h-12 shadow-md flex items-center flex-shrink-0">
          {" "}
          Tailwind CSS
        </div>
        {[...Array(40)].map((_, i) => (
          <div className="p-3 flex-1">Channels</div>
        ))}
      </div>

      <div className="bg-gray-600 flex-1 flex flex-col overflow-y-scroll">
        <div className="px-4 h-12 shadow-md flex items-center">general</div>
        {[...Array(40)].map((_, i) => (
          <div className="p-3 flex-1">
            Messages {i} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </div>
        ))}
      </div>
    </div>
  );
}
