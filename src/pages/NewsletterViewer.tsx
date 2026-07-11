import { useParams } from "react-router-dom";
import { newsletters } from "../data/newsletters";
import { useEffect } from "react";

// ============ ADDED ============
import { useState, type FormEvent } from "react";
import { LayoutDashboard, Mail, AlertCircle, Loader2, ChevronRight } from "lucide-react";
import emailjs from "@emailjs/browser";

interface UserData {
  email: string;
}
// ============ END ADDED ============

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

  // ============ ADDED: AUTH STATE ============
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUsers = (): UserData[] => {
    return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  };

  const saveUser = (user: UserData): void => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const findUser = (email: string): UserData | undefined => {
    return getUsers().find((u) => u.email === email);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string)?.trim();

    if (!email) {
      setError('Please enter your email address.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    const existingUser = findUser(email);

    try {
      await emailjs.send(
        'service_9gmlg2q',
        'template_p0q050i',
        { email },
        '-ePIcI6qQCURx5hAM'
      );

      if (existingUser) {
        setSuccessMessage('Welcome back.');
        setTimeout(() => setIsLoggedIn(true), 800);
      } else {
        saveUser({ email });
        setSuccessMessage('Registered successfully.');
        setTimeout(() => setIsLoggedIn(true), 1000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        className="relative min-h-screen bg-cover 
                   bg-[position:90%_center] 
                   md:bg-center 
                   flex items-center justify-center md:justify-end 
                   p-4 md:p-6 font-sans"
        style={{
          backgroundImage: `url('/assets/bg-for-lock.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative w-full max-w-md mr-0 md:mr-28">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">

            <div className="flex flex-col items-center mb-8 text-center">
              <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-[#1E293B]">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-bold text-[#1E293B] uppercase">
                Newsletter Access
              </h1>
              <p className="text-slate-500 text-sm mt-2">
                Enter your email to view "{newsletter.title}"
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E293B]/20"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="text-green-600 bg-green-50 p-3 rounded-xl text-xs">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1E293B] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Access Newsletter
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // ============ END ADDED ============

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

//   const newsletter = newsletters.find((n) => n.slug === slug);

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

//   const isIOS =
//     typeof navigator !== "undefined" &&
//     /iPad|iPhone|iPod/.test(navigator.userAgent);

//   // ✅ Most reliable iOS solution
//   useEffect(() => {
//     if (isIOS) {
//       window.location.replace(pdfUrl);
//     }
//   }, [isIOS, pdfUrl]);

//   // ✅ Loader while redirecting
//   if (isIOS) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-black text-lg">
//         Opening PDF...
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-screen">
//       <iframe
//         key={slug}
//         src={pdfUrl}
//         title={newsletter.title}
//         className="w-full h-full border-0"
//       />
//     </div>
//   );
// };

// export default NewsletterViewer;


