import { useState } from "react";
import { searchIcon } from "../../assets";
import Modal from "./Modal";

interface AutocompleteSearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

const Search: React.FC<AutocompleteSearchBarProps> = ({ query, setQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex rounded-full md:mx-7 md:flex-grow md:bg-primary-100 md:px-4 md:py-3 lg:mx-10">
        <img
          src={searchIcon}
          alt="search-icon"
          className="h-6 w-6 cursor-pointer md:opacity-40"
          onClick={() => setIsModalOpen(true)}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-2 hidden w-full bg-transparent text-base outline-none md:block"
          placeholder="Search for Products"
        />
      </div>

      <Modal open={isModalOpen}>
        <div className="flex w-full max-w-2xl items-center rounded-lg bg-primary-100 px-4 py-3">
          <img
            src={searchIcon}
            alt="search-icon"
            className="opacity:40 mr-2 h-6 w-6"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-primary-100 px-4 py-2 outline-none"
            placeholder="Search for Products"
          />
          <button
            className="ml-2 text-gray-500"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Search;
