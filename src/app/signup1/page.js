// "use client";

// export default function Signup() {

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
//       <form
//         action="https://formsubmit.co/YOUR_BOSS_EMAIL@gmail.com"
//         method="POST"
//         className="bg-white p-6 rounded-xl shadow-md w-[350px]"
//       >

//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Sign Up
//         </h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           required
//           className="w-full mb-3 p-2 border rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           className="w-full mb-3 p-2 border rounded"
//         />

//         {/* redirect after submit */}
//         <input type="hidden" name="_next" value="http://localhost:3000/verify" />

//         <input type="hidden" name="_captcha" value="false" />

//         <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
//           Sign Up
//         </button>

//       </form>

//     </div>
//   );
// }





// "use client";

// export default function Signup() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">

//       <form
//         action="https://formsubmit.co/meenupal2881@gmail.com"
//         method="POST"
//         encType="multipart/form-data"
//         className="bg-white p-6 rounded-xl shadow-md w-[400px]"
//       >

//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Influencer Signup
//         </h2>

//         <input name="name" placeholder="Name" required className="w-full mb-3 p-2 border rounded" />

//         <input name="phone" placeholder="Phone Number" required className="w-full mb-3 p-2 border rounded" />

//         <input type="email" name="email" placeholder="Email" required className="w-full mb-3 p-2 border rounded" />

//         <input name="followers" placeholder="Followers Count" required className="w-full mb-3 p-2 border rounded" />

//         <textarea name="references" placeholder="References (links / details)" className="w-full mb-3 p-2 border rounded"></textarea>

//         <input type="file" name="file" className="w-full mb-3" />

//         {/* redirect */}
//         <input type="hidden" name="_next" value="http://localhost:3000/verify" />
//         <input type="hidden" name="_captcha" value="false" />

//         <button className="w-full bg-blue-600 text-white p-2 rounded">
//           Submit
//         </button>

//       </form>

//     </div>
//   );
// }



"use client";
import { useState } from "react";

export default function Signup() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const followers = form.followers.value;
    const references = form.references.value;

    const message = `New Influencer Signup:
Name: ${name}
Phone: ${phone}
Email: ${email}
Followers: ${followers}
References: ${references}`;

    window.open(
      `https://wa.me/918077961710?text=${encodeURIComponent(message)}`
    );

    setSuccess(true);
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-[#003C78]/20 via-white to-[#ED580A]/20">

      <div className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-xl w-[380px] border border-white">

        <h2 className="text-3xl font-bold mb-6 text-center text-[#003C78]">
          Influencer Signup
        </h2>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="👤 Full Name" required
            className="w-full mb-3 p-3 rounded-lg border focus:ring-2 focus:ring-[#ED580A]" />

          <input name="phone" placeholder="📱 Phone Number" required
            className="w-full mb-3 p-3 rounded-lg border focus:ring-2 focus:ring-[#ED580A]" />

          <input type="email" name="email" placeholder="📧 Email Address" required
            className="w-full mb-3 p-3 rounded-lg border focus:ring-2 focus:ring-[#ED580A]" />

          <input name="followers" placeholder="👥 Followers Count" required
            className="w-full mb-3 p-3 rounded-lg border focus:ring-2 focus:ring-[#ED580A]" />

          <textarea name="references" placeholder="🔗 References / Links"
            className="w-full mb-3 p-3 rounded-lg border focus:ring-2 focus:ring-[#ED580A]"></textarea>

          <input type="file" className="w-full mb-4" />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#003C78] to-[#ED580A] text-white font-semibold p-3 rounded-lg hover:opacity-90 transition"
          >
            Submit 🚀
          </button>

        </form>

        {/* ✅ Success Message */}
        {success && (
          <div className="mt-5 text-center">
            <p className="text-green-600 font-semibold text-lg">
              ✅ Submitted Successfully!
            </p>

            <button
              onClick={() =>
                window.open("https://wa.me/918077961710")
              }
              className="mt-3 bg-[#003C78] text-white px-4 py-2 rounded-lg hover:bg-[#002a55] transition"
            >
              Continue on WhatsApp 💬
            </button>
          </div>
        )}

      </div>

    </div>
  );
}