const Footer=()=>{
    return (
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 5.924a8.897 8.897 0 01-2.529.693 4.415 4.415 0 001.937-2.436 8.893 8.893 0 01-2.806 1.07 4.403 4.403 0 00-7.498 4.013A12.486 12.486 0 013.176 4.295a4.41 4.41 0 001.361 5.872 4.39 4.39 0 01-1.996-.551v.056a4.404 4.404 0 003.531 4.311 4.421 4.421 0 01-1.993.076 4.408 4.408 0 004.115 3.06A8.818 8.818 0 012 19.539a12.425 12.425 0 006.732 1.972c8.084 0 12.51-6.7 12.51-12.508 0-.19-.004-.379-.013-.566a8.936 8.936 0 002.193-2.275z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 5.794 2.591 5.794 5.796 0 3.205-2.59 5.796-5.794 5.796S6.206 11.164 6.206 7.959C6.206 4.755 8.796 2.163 12 2.163zm0-2.163C8.052 0 4.667 3.383 4.667 7.959c0 4.576 3.385 7.959 7.333 7.959 3.95 0 7.334-3.383 7.334-7.959C19.334 3.383 15.95 0 12 0zm6.719 24h-13.44C2.437 24 0 21.563 0 18.719V11.28c0-2.844 2.437-5.28 5.28-5.28h13.44c2.843 0 5.28 2.436 5.28 5.28v7.439c0 2.844-2.437 5.28-5.28 5.28zm-8.623-6.288h4.807c.299 0 .544-.245.544-.544v-4.896c0-.299-.245-.544-.544-.544H10.08c-.299 0-.544.245-.544.544v4.896c0 .299.245.544.544.544z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;