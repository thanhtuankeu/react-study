import image from "../img/dO26hGo.jpg";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { FetchUser } from "./custom-hook/FetchUser";

const TestPage = () => {
  const { error, data, loading } = FetchUser("https://60628a920133350017fd120b.mockapi.io/api/vi/login");

  async function fetchPosts() {
    const { data } = await axios.get(
      "https://60628a920133350017fd120b.mockapi.io/api/vi/login"
    );
    return data;
  }

  return (
    <div>
      <header className="bg-green-300 p-4">
        <nav className="flex flex-row justify-between items-center text-white">
          <div className="text-4xl">My page</div>
          <div>
            <a href="a" className="ml-8">
              About
            </a>
            <a href="b" className="ml-8">
              Contact
            </a>
            <a href="b" className="ml-8">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-4">
          <div className="container mx-auto flex flex-row justify-between items-center ">
            <div className="flex flex-col ">
              <h1 className="text-5xl mb-12 font-bold">Main header</h1>
              <p className="mb-10">I'm creator of this page </p>
              <a
                href="a"
                className="bg-pink-400 rounded py-2 px-4 hover:bg-pink-500 max-w-sm cursor-pointer text-white items-center"
              >
                Click this link!
              </a>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </main>
    </div>
  );
};

export default TestPage;
