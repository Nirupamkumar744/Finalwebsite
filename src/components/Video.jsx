import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 0;
  margin: 0;

  h2 {
    font-size: 4rem;
    color: #fff;
    margin: 0;
    padding: 0;

    span {
      color: #febb12;
    }
  }

  p {
    font-size: 2rem;
    text-align: justify;
    color: #fdd788;
    margin: 40px 0 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true; // Ensure video starts muted
      video.preload = "auto"; // Preload the video for smoother playback

      const playVideo = () => {
        video.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      };

      // Wait for video to be ready, then play
      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener("canplaythrough", playVideo, { once: true });
      }

      // Ensure looping works correctly
      const onEnded = () => {
        video.currentTime = 0;
        video.play().catch((error) => {
          console.error("Autoplay failed after looping:", error);
        });
      };

      video.addEventListener("ended", onEnded);

      return () => {
        // Cleanup event listeners
        video.removeEventListener("canplaythrough", playVideo);
        video.removeEventListener("ended", onEnded);
      };
    }
  }, []);

  return (
    <Container>
      <VideoWrapper>
        <video ref={videoRef} autoPlay loop playsInline preload="auto">
          <source src="/pro.mp4" type="video/mp4" />
          <source src="/pro.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
      <TextContent>
        <h2>
          Bihar's <span>First</span> Trading <span>Floor</span>
        </h2>
        <p>
        Join Bihar’s premier stock market training center and experience live trading classes where education meets action. Learn proven strategies, trade in real-time under expert mentorship, and gain hands-on experience. Whether you're a beginner or experienced trader, our comprehensive training and supportive community will elevate your skills. Take the first step towards financial independence at the best stock market institute in Bihar. 📈 Ready to Trade Like a Pro? Contact us now to enroll!!
        </p>
      </TextContent>
    </Container>
  );
};

export default Video;
