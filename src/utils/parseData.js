import { convertRawtostring } from "./convertRawtoString";
import { parseVideoDuration } from "./parseVideoDuration";
import { timeSince } from "./timeSince";
const apiKey = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];
    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(
      //Todo
      `https://youtube.googleapis.com/youtube/v3/channels?&part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${apiKey}`
    );
    // console.log(channelsData);

    const parsedChannelData = [];
    channelsData.forEach((channelData) =>
      parsedChannelData.push({
        id: channelData.id,
        image: channelData.snippet.thumbnails.default.url,
      })
    );

    const {
      data: { items: videoData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${apiKey}`
    );
    // console.log(videoData);

    const parseData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelData.find(
        (data) => data.id === item.snippet.channelId
      );
      if (channelImage) {
        parseData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.medium.url,
          videoLink: `https://wwww.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videoData[index].contentDetails.duration
          ),
          videoViews: convertRawtostring(videoData[index].statistics.viewCount),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });
    return parseData;
  } catch (error) {
    console.log(error);
  }
};
