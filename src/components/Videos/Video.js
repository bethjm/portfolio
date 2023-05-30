const src = "https://www.youtube.com/watch?v=hMgJNbKhi3E";

const YoutubeVideo = () => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
