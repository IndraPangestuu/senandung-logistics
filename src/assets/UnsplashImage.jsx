import { useEffect, useState } from "react";

function UnsplashImage({ keyword = "logistic", width = 1920, height = 1080 }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        );
        const data = await res.json();
        const customUrl = `${data.urls.raw}&w=${width}&h=${height}`;
        setImageUrl(customUrl);
      } catch (error) {
        console.error("Error fetching image from Unsplash:", error);
      }
    };

    fetchImage();
  }, [keyword, width, height]);

  if (!imageUrl) return <p>Loading image...</p>;

  return (
    <img
      src={imageUrl}
      alt={keyword}
      width="100%"
      style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
    />
  );
}

export default UnsplashImage;