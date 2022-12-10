import { useState, useEffect } from "react";

import axios from "../helpers/axios";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`?page=${page}&limit=10`).then((photos) => {
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
            <img className="image" src={download_url} alt={author} />
          </div>
        ))}
      </div>
      <button type="button" onClick={handleClick} className="btn">
        Show More
      </button>
    </>
  );
};

export default ImageList;
