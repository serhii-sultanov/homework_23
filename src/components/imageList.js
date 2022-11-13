import { useState, useEffect } from "react";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((photos) => {
        setImages([...photos, ...photos]);
        setLoading(false);
      });
  }, [page]);

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="heading" style={{}}>
        Image Gallery
      </h1>
      <div className="container">
        {images.map(({ id, download_url, author }) => (
          <div key={id} className="image-box">
            <img className="image" src={download_url} alt={author}></img>
          </div>
        ))}
      </div>
      <button onClick={handleClick} className="btn">
        Show More
      </button>
    </>
  );
};

export default ImageList;
