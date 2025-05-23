export default function ExperienceSection() {
  return (
    <section className="relative bg-white py-16">
      {/* Background layer */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gray-100 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Experiences Shared by Our Clients
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            The team at QR GEN provided unparalleled support throughout our project.
            Their expertise and dedication were evident from day one.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
          {/* Main Image */}
          <img
            src="/images/enter.jpg"
            alt="Experience Showcase"
            className="rounded-xl shadow-lg w-full max-w-full"
          />

          {/* Testimonial */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            QR GEN is a tool that revolutionized our marketing campaigns. The real-time tracking is a game-changer, and managing event check-ins has never been easier with dynamic QR codes that are incredibly efficient.
          </p>

          {/* Profile */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/img1.jpg"
              alt="User Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Jane Doe</h4>
              <p className="text-sm text-gray-500">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
