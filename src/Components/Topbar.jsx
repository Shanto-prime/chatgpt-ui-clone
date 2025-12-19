import DownArrowSVG from "../Partials/DownArrowSVG";
import GroupChatSVG from "../Partials/GroupChatSVG";
import UserPlusSVG from "../Partials/UserPlusSVG";

export default function Topbar() {
  const handleCross = () => {
    document.getElementById("upgrade").style.display = "none";
  };
  return (
    <div className="absolute top-0 left-0 right-0 border-b border-[#424242]">
      <div className="flex items-center justify-between p-4 relative">
        <div className="flex items-center gap-2">
          <h2 className=" text-2xl">ChatGPT</h2>
          <DownArrowSVG />
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center cursor-pointer tooltip tooltip-bottom w-11 h-11 hover:bg-[#454545] rounded-full transition-all duration-300"
            data-tip="Start A Group Chat"
          >
            <UserPlusSVG />
          </div>
          <div
            className="flex items-center justify-center cursor-pointer tooltip tooltip-bottom w-11 h-11 hover:bg-[#454545] rounded-full transition-all duration-300"
            data-tip="Turn On Temporary Chat"
          >
            <GroupChatSVG />
          </div>
        </div>
        <div className="hidden">
          <div>share</div>
          <div>add people</div>
          <div>---</div>
        </div>
        <span id="upgrade" className="absolute top-4 right-1/2">
          <div className="inline-flex items-center gap-1 rounded-full text-sm font-medium py-2 pe-2 bg-[#F1F1FB] text-[#5D5BD0] hover:bg-[#E4E4F6] dark:bg-[#373669] dark:text-[#DCDBF6] dark:hover:bg-[#414071]">
            <button
              type="button"
              className="flex items-center gap-1 bg-transparent ps-2.5 text-current focus:outline-none pe-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-sm"
              >
                <path
                  d="M8.11523 3.19409C9.15589 2.15344 10.844 2.15363 11.8848 3.19409L16.8057 8.11499C17.8462 9.15575 17.8463 10.8438 16.8057 11.8845L11.8848 16.8054C10.8441 17.8461 9.156 17.846 8.11523 16.8054L3.19434 11.8845C2.15387 10.8438 2.15369 9.15564 3.19434 8.11499L8.11523 3.19409ZM7.96582 7.49976C7.78889 7.49965 7.6396 7.63263 7.61914 7.80835C7.49243 8.90693 6.87202 9.52734 5.77344 9.65405C5.59772 9.67451 5.46474 9.8238 5.46484 10.0007C5.46517 10.1777 5.59859 10.3264 5.77441 10.3464C6.85731 10.4691 7.52042 11.0831 7.61816 12.1824C7.63414 12.3623 7.78525 12.4999 7.96582 12.4998C8.14634 12.4994 8.29693 12.3613 8.3125 12.1814C8.40645 11.0979 9.06302 10.4414 10.1465 10.3474C10.3264 10.3318 10.4645 10.1813 10.4648 10.0007C10.465 9.82016 10.3273 9.66905 10.1475 9.65308C9.04822 9.55533 8.4342 8.89222 8.31152 7.80933C8.29153 7.6335 8.14276 7.50008 7.96582 7.49976Z"
                  fill="#5856D6"
                ></path>
              </svg>
              Upgrade to Go
            </button>
            <button
              type="button"
              className="ms-0 flex h-4 w-4 items-center justify-center rounded-full text-[black] hover:bg-[#E4E4F6] dark:text-[white] dark:hover:bg-[#414071] transform transition-all duration-200 ease-out pointer-events-auto visible translate-x-0 opacity-100"
              aria-label="Dismiss upgrade reminder"
              tabIndex="0"
              onClick={handleCross}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                color="text-token-text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}
