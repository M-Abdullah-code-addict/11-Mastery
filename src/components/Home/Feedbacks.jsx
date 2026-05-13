import { Star } from "lucide-react";

function Feedbacks() {
  const feedbacks = [
    {
      id: 1,
      name: "Muhammad Afaan",
      feedback:
        "11+ Mastery helped me understand tricky maths topics really clearly. The practice papers feel just like real exam questions!",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      place: "Pakistani Student"
    },
    {
      id: 2,
      name: "Emily Johnson",
      feedback:
        "I improved a lot in English comprehension. The answer PDFs really helped me see where I was going wrong.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      place: "UK 11+ Student"
    },
    {
      id: 3,
      name: "Muhammad Ismail",
      feedback:
        "The mock tests are brilliant. They made me feel confident before my grammar school entrance exam.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      place: "Pakistani Student"
    },
    {
      id: 4,
      name: "Ambar",
      feedback:
        "Everything is well organised and easy to follow. It really helped me stay consistent with my revision.",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      place: "Pakistani Student"
    },
    {
      id: 5,
      name: "Jack Taylor",
      feedback:
        "I like how the practice papers are structured. It feels like real exam preparation every time I practice.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      place: "UK 11+ Student"
    },
    {
      id: 6,
      name: "Amelia Davis",
      feedback:
        "Very helpful platform for 11+ preparation. The step-by-step answers made difficult questions easy to understand.",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      place: "UK 11+ Student"
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-20 px-6 sm:px-10 lg:px-20">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Trusted by UK Students for
          <span className="text-orange-400"> 11+ Success</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base sm:text-lg">
          Real feedback from students preparing for UK grammar school entrance exams.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {feedbacks.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 border border-white/10 hover:border-orange-400/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-xl"
          >

            {/* Stars */}
            <div className="flex gap-1 text-orange-400 mb-4">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            {/* Feedback */}
            <p className="text-gray-300 leading-relaxed mb-6">
              “{item.feedback}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-400/30"
              />

              <div>
                <h4 className="text-white font-semibold">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {item.place}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedbacks;