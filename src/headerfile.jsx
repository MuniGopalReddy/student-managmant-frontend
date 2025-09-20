function headerfile(){
    return (
        <>
          <div className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
              {/* Logo / Title */}
              <h1 className="text-2xl font-bold tracking-wide">
                Student Management Portal
              </h1>
    
              {/* Navigation */}
              <ul className="flex space-x-6 text-lg font-medium">
                <li className="hover:text-yellow-300 cursor-pointer">Home</li>
                <li className="hover:text-yellow-300 cursor-pointer">Login</li>
                <li className="hover:text-yellow-300 cursor-pointer">About</li>
              </ul>
            </div>
          </div>
        </>
      );
}
export default headerfile;