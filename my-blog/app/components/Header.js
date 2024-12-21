export default function Header() {
    return (
      <header className="bg-white shadow-lg ">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    
          <h1 className="text-2xl font-bold text-gray-700">Blog</h1>
          <div className="bg-white shadow-lg rounded-full px-4">
            <nav className="flex flex-wrap justify-center items-center space-x-4 mt-2 mb-2">
            <a className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-gray-200 focus:bg-gray-300" href="#">Home</a>
            <a className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-gray-200 focus:bg-gray-300" href="#">About</a>
            <a className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-gray-200 focus:bg-gray-300" href="#">Services</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  
 
  