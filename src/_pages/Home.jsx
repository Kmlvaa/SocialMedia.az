import CreatePostSec from "../_components/HomePageSections/CreatePostSec";
import StorySec from "../_components/HomePageSections/StorySec";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="w-2/3 mr-5">
        <div className="Story-section">
          <StorySec />
        </div>
        <div className="Create-post-section">
          <CreatePostSec />
        </div>
        <div className="Posts-section"></div>
      </div>

      <div className="w-1/3 border border-white h-screen"></div>
    </div>
  )
}
