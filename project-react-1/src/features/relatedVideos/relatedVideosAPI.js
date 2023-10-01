import axios from "../../utils/axios";

// query can be done - ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5

// it means javascript and react tags' videos will appear and id_ne means id not equal(ne) will be 4 i.e. id 4 video will be omitted and limit 5 means 5 videos only appear.

// let tags = ["javascript", "react", "tips"];

export const getRelatedVideos = async ({ tags, id }) => {
  // query limit
  const limit = 5;
  // query string
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const response = await axios.get(`/videos?${queryString}`);

  return response.data;
};

// getRelatedVideos(tags, 1);
