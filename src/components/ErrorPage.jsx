import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log(error.data)

  return (
    <>
      <div className="flex items-center justify-center  h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              {/* <h1 className="font-bold text-blue-600 text-9xl">404</h1> */}
              <img className="object-contain w-[600px] h-[500px]" src='https://i.ibb.co/k4LpWyy/3828537.jpg' alt="" />
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page{" "}
                {error.statusText ? error.statusText : 'sorry not found'}
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                {error.data? error.data : 'The page you’re looking for doesn’t exist.'}
              </p>
              <Link
                to="/"
                className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
              >
                Go home
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}