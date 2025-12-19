import { useRef, useState } from "react";
import AttachmentSVG from "../Partials/AttachmentSVG";
import DeepSearchSVG from "../Partials/DeepSearchSVG";
import ImageSVG from "../Partials/ImageSVG";
import SearchResult from "../Partials/SearchResult";
import ShoppingSearchSVG from "../Partials/ShoppingSearchSVG";
import ThinkingSVG from "../Partials/ThinkingSVG";
import UploadSVG from "../Partials/UploadSVG";
import Welcome from "../Partials/Welcome";
import Topbar from "./Topbar";

export default function RightSide() {
  const hiddenTextRef = useRef(null);
  const editableRef = useRef(null);
  const [hasText, setHasText] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [query, setQuery] = useState("");
  const handleInput = () => {
    const el = editableRef.current;
    if (el.innerText.trim() === "") {
      el.innerHTML = "";
      setHasText(false);
    } else {
      setHasText(true);
    }
    hiddenTextRef.current.value = el.innerText;
  };
  const runSearch = () => {
    const text = editableRef.current.innerText.trim();
    console.log(editableRef.current.innerText.trim());
    if (text !== "") {
      setQuery(text);
      setIsEnter(true);
      editableRef.current.innerText = "";
      setHasText(false);
      hiddenTextRef.current.value = "";
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSearch();
    }
  };

  const handleSearchClick = () => {
    runSearch();
  };

  return (
    <>
      <div className="flex-1 bg-[#212121] text-white flex flex-col">
        <div className="relative h-20">
          <Topbar />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-y-auto">
          <div className=" overflow-y-auto px-8">
            <div className="text-center">
              {!isEnter && <Welcome />}
              {isEnter && <SearchResult query={query} />}
            </div>
          </div>
          {/* user input */}
          <div className="mx-12 flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-center mx-auto rounded-[28px] w-full bg-[#303030] p-3">
              <div className="dropdown">
                <div
                  data-tip="Add files and more"
                  className="tooltip tooltip-bottom flex items-center justify-center w-11 h-11 hover:bg-[#454545] rounded-full transition-all duration-300 cursor-pointer  "
                >
                  <button className="flex flex-1 items-center justify-center cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon cursor-pointer"
                    >
                      <path d="M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z"></path>
                    </svg>
                  </button>
                </div>
                <ul className="dropdown-content menu text-base p-2 tooShadow  bg-[#303030] rounded-box w-72 z-10">
                  <li className="hover:bg-[#ffffff1a]">
                    <div className="flex items-center justify-between gap-2 group">
                      <div className="flex items-center gap-2">
                        <AttachmentSVG />
                        <span>Add Photos & File</span>
                      </div>
                      <div className="text-[#aeaeae] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        CTRL + U
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ImageSVG />
                        <span>Create Image</span>
                      </div>
                      <div className="text-[#aeaeae]"></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ThinkingSVG />
                        <span>Thinking</span>
                      </div>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <DeepSearchSVG />
                        <span>Deep Research</span>
                      </div>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ShoppingSearchSVG />
                        <span>Shopping</span>
                      </div>
                      <div></div>
                    </div>
                  </li>
                  <li className="dropdown dropdown-hover dropdown-right dropdown-center">
                    <div tabIndex={0} role="button" className="">
                      More &gt;
                    </div>
                    <ul
                      className="dropdown-content menu p-2 ms-0 tooShadow bg-[#303030] text-base rounded-box w-52 z-20"
                      tabIndex={0}
                    >
                      <li>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <ShoppingSearchSVG />
                            <span>Study and learn</span>
                          </div>
                          <div></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <ShoppingSearchSVG />
                            <span>Web search</span>
                          </div>
                          <div></div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <ShoppingSearchSVG />
                            <span>Canvas</span>
                          </div>
                          <div></div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex-1 mx-3">
                <textarea
                  className=" hidden text-white w-full border-none outline-none"
                  name="userInput"
                  id="userInput"
                  rows="1"
                  placeholder="Ask anything"
                  ref={hiddenTextRef}
                ></textarea>
                <p
                  ref={editableRef}
                  className="userInput text-white w-full text-left outline-none whitespace-pre-wrap wrap-break-word leading-6 max-h-[120px] overflow-y-auto"
                  contentEditable
                  onInput={handleInput}
                  placeholder="Ask anything"
                  onKeyDown={handleSearch}
                ></p>
              </div>
              <div className="flex items-center justify-center mx-auto rounded-[28px] ">
                <div
                  data-tip="Dictate"
                  className="flex items-center justify-center w-11 h-11 hover:bg-[#454545] rounded-full transition-all duration-300 cursor-pointer tooltip tooltip-bottom"
                >
                  <button type="button" className="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label=""
                      className="icon"
                      fontSize="inherit"
                    >
                      <path d="M15.7806 10.1963C16.1326 10.3011 16.3336 10.6714 16.2288 11.0234L16.1487 11.2725C15.3429 13.6262 13.2236 15.3697 10.6644 15.6299L10.6653 16.835H12.0833L12.2171 16.8486C12.5202 16.9106 12.7484 17.1786 12.7484 17.5C12.7484 17.8214 12.5202 18.0894 12.2171 18.1514L12.0833 18.165H7.91632C7.5492 18.1649 7.25128 17.8672 7.25128 17.5C7.25128 17.1328 7.5492 16.8351 7.91632 16.835H9.33527L9.33429 15.6299C6.775 15.3697 4.6558 13.6262 3.84992 11.2725L3.76984 11.0234L3.74445 10.8906C3.71751 10.5825 3.91011 10.2879 4.21808 10.1963C4.52615 10.1047 4.84769 10.2466 4.99347 10.5195L5.04523 10.6436L5.10871 10.8418C5.8047 12.8745 7.73211 14.335 9.99933 14.335C12.3396 14.3349 14.3179 12.7789 14.9534 10.6436L15.0052 10.5195C15.151 10.2466 15.4725 10.1046 15.7806 10.1963ZM12.2513 5.41699C12.2513 4.17354 11.2437 3.16521 10.0003 3.16504C8.75675 3.16504 7.74835 4.17343 7.74835 5.41699V9.16699C7.74853 10.4104 8.75685 11.418 10.0003 11.418C11.2436 11.4178 12.2511 10.4103 12.2513 9.16699V5.41699ZM13.5814 9.16699C13.5812 11.1448 11.9781 12.7479 10.0003 12.748C8.02232 12.748 6.41845 11.1449 6.41828 9.16699V5.41699C6.41828 3.43889 8.02221 1.83496 10.0003 1.83496C11.9783 1.83514 13.5814 3.439 13.5814 5.41699V9.16699Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {!hasText && (
                <div
                  data-tip="Use Voice mode"
                  className=" tooltip tooltip-bottom flex items-center justify-center w-11 h-11 bg-[#0169cc] hover:bg-[#0e579d] rounded-full transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full flex items-center justify-center cursor-pointer">
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.91667 3.33331C8.60702 3.33331 9.16667 3.89296 9.16667 4.58331V15.4166C9.16667 16.107 8.60702 16.6666 7.91667 16.6666C7.22631 16.6666 6.66667 16.107 6.66667 15.4166V4.58331C6.66667 3.89296 7.22631 3.33331 7.91667 3.33331ZM12.0833 5.83331C12.7737 5.83331 13.3333 6.39296 13.3333 7.08331V12.9166C13.3333 13.607 12.7737 14.1666 12.0833 14.1666C11.393 14.1666 10.8333 13.607 10.8333 12.9166V7.08331C10.8333 6.39296 11.393 5.83331 12.0833 5.83331ZM3.75 7.49998C4.44036 7.49998 5 8.05962 5 8.74998V11.25C5 11.9403 4.44036 12.5 3.75 12.5C3.05964 12.5 2.5 11.9403 2.5 11.25V8.74998C2.5 8.05962 3.05964 7.49998 3.75 7.49998ZM16.25 7.49998C16.9404 7.49998 17.5 8.05962 17.5 8.74998V11.25C17.5 11.9403 16.9404 12.5 16.25 12.5C15.5596 12.5 15 11.9403 15 11.25V8.74998C15 8.05962 15.5596 7.49998 16.25 7.49998Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {hasText && (
                <button
                  onClick={handleSearchClick}
                  data-tip="Ask To AI"
                  className="tooltip tooltip-bottom flex items-center justify-center w-11 h-11 bg-[#0169cc] hover:bg-[#0e579d] rounded-full transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full flex items-center justify-center cursor-pointer">
                    <div>
                      <UploadSVG />
                    </div>
                  </div>
                </button>
              )}
            </div>
            {isEnter && (
              <span>ChatGPT can make mistakes. Check important info.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
