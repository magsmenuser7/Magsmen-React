import { useParams } from "react-router-dom";
import { newsletters } from "../data/newsletters";
import { useEffect } from "react";

const NewsletterViewer = () => {
  const { slug } = useParams();

  const newsletter = newsletters.find((n) => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!newsletter) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black text-xl">
        Page not found
      </div>
    );
  }

  const pdfUrl = encodeURI(newsletter.pdf);

  const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // ✅ Most reliable iOS solution
  useEffect(() => {
    if (isIOS) {
      window.location.replace(pdfUrl);
    }
  }, [isIOS, pdfUrl]);

  // ✅ Loader while redirecting
  if (isIOS) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black text-lg">
        Opening PDF...
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <iframe
        key={slug}
        src={pdfUrl}
        title={newsletter.title}
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default NewsletterViewer;




// import { useParams } from "react-router-dom";
// import { newsletters } from "../data/newsletters";
// import { useEffect } from "react";

// const NewsletterViewer = () => {
//   const { slug } = useParams();

  
//   const newsletter = newsletters.find(n => n.slug === slug);

 
//   console.log("URL slug:", slug);
//   console.log("Available newsletters:", newsletters.map(n => n.slug));

  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

 
//   if (!newsletter) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-black text-xl">
//         Page not found
//       </div>
//     );
//   }

 
//   const pdfUrl = encodeURI(newsletter.pdf);

//   return (
//     <div className="min-h-screen">
//       <iframe
//         key={slug}                 
//         src={pdfUrl}
//         title={newsletter.title}
//         className="w-full h-screen"
//         loading="lazy"
//         allow="fullscreen"
//       />
//     </div>
//   );
// };

// export default NewsletterViewer;
