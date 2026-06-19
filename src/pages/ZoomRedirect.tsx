import { useEffect } from "react";

export default function ZoomRedirect() {
  useEffect(() => {
    window.location.href =
      "https://us06web.zoom.us/j/88646287578?pwd=ipDVLZjq4rFsQXHMc26vkHRe6EJ5pa.1";
  }, []);

  return <div></div>;
}