import React, { useEffect, useRef } from "react";

const ImageLoad = ({ src, onImageLoad, ...props }) => {
  const imgRef = useRef(null); // akses DOM elemen <img>

  useEffect(() => {
    const img = imgRef.current;

    if (!img) return;

    if (img.complete) {
      // Jika gambar sudah dimuat dari cache
      onImageLoad();
    } else {
      // Jika belum, tambahkan listener
      img.addEventListener("load", onImageLoad);
    }

    // Bersihkan event listener saat komponen unmount
    return () => {
      img.removeEventListener("load", onImageLoad);
    };
  }, [src]);

  return <img ref={imgRef} src={src} {...props} />;
};

export default ImageLoad;
