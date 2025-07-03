import CreatePostSec from "../_components/HomePageSections/CreatePostSec";
import PostsSec from "../_components/HomePageSections/PostsSec";
import SideSec from "../_components/HomePageSections/SideSec";
import StorySec from "../_components/HomePageSections/StorySec";

export default function Home() {
  return (
    <div className="flex flex-row ">
      <div className="w-2/3 mr-5 p-5">
        <div className="Story-section">
          <StorySec />
        </div>
        <div className="Create-post-section">
          <CreatePostSec />
        </div>
        <div className="w-full h-px bg-custom-gray1"></div>
        <div className="Posts-section">
          <PostsSec />
        </div>
      </div>
      <div className="w-1/3 h-auto p-5 border border-[#1a1a1a] border-l-custom-gray1">
        <SideSec />
      </div>
    </div>
  )
}
