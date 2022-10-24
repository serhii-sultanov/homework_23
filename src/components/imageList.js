import { useState, useEffect } from "react";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [shown, setShown] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${shown}&limit=10`)
      .then((response) => response.json())
      .then((photos) => {
        setImages([...photos, ...photos]);
        setLoading(false);
      });
  }, [shown]);

  const handleClick = () => {
    setShown(shown + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 style={{ fontSize: "48px", textAlign: "center" }}>Image Gallery</h1>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map(({ id, download_url, author }) => (
          <div key={id} style={{ width: "500px", margin: "20px" }}>
            <img
              src={download_url}
              alt={author}
              style={{ width: "100%" }}
            ></img>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
        style={{
          margin: "0 auto 30px",
          display: "block",
          padding: "15px 20px",
          backgroundColor: "#24a0ed",
          borderRadius: "20px",
          fontSize: "24px",
          color: "white",
          border: "none",
        }}
      >
        Show More
      </button>
    </>
  );
};

export default ImageList;
