import React from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
const RelatedVideoList = () => {
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* single related video */}
      <RelatedVideoListItem />
    </div>
  );
};

export default RelatedVideoList;
