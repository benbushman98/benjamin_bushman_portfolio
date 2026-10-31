import { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";

export const ImgSideBar = ({ img }: { img: string }) => {
  return <img src={img} alt="Project Image" />;
};

interface PlayingProps {
  playing: number | null;
}

export const VideoSideBar = ({ playing }: PlayingProps) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (playing == null) {
      vidRef.current?.pause();
    }
  }, [playing]);

  return (
    <video
      ref={vidRef}
      src="img/projects/video.mp4"
      id="video"
      className="responsive-video"
      controls
      autoPlay={false}
      poster="img/projects/project-6.jpg"
    />
  );
};
export const YoutubeSideBar = ({ playing }: PlayingProps) => {
  useEffect(() => {
    const youtubeVideo =
      document.querySelector<HTMLIFrameElement>(".youtube-video");
    if (playing == null) {
      youtubeVideo?.contentWindow?.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*"
      );
    }
  }, [playing]);
  return (
    <div className="videocontainer">
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"
      />
    </div>
  );
};

export const SliderSideBar = () => {
  return (
    <div
      id="slider"
      className="carousel slide portfolio-slider"
      data-ride="carousel"
    >
      {/* The slideshow */}
      <Carousel
        className="carousel-inner"
        prevIcon={
          <a className="carousel-control-prev" href="#slider" data-slide="prev">
            <span className="fa fa-chevron-left carousel-controls" />
          </a>
        }
        nextIcon={
          <a className="carousel-control-next" href="#slider" data-slide="next">
            <span className="fa fa-chevron-right carousel-controls" />
          </a>
        }
        prevLabel=""
        nextLabel=""
        indicators={false}
      >
        <Carousel.Item className="carousel-item" interval={1000}>
          <img src="img/projects/project-8.jpg" alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img src="img/projects/project-7.jpg" alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img src="img/projects/project-5.jpg" alt="slide 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
