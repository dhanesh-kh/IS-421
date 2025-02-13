import React from "react";

export default function MeetOurTeam() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12">
      <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150" // Placeholder image
            alt="Team Member 1"
          />
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">CEO & Founder</p>
          <p className="text-gray-500 mt-2">
            John is passionate about building innovative solutions and leading our team to success.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150" // Placeholder image
            alt="Team Member 2"
          />
          <h2 className="text-xl font-semibold">Jane Smith</h2>
          <p className="text-gray-600">CTO</p>
          <p className="text-gray-500 mt-2">
            Jane is a tech enthusiast with a knack for solving complex problems and driving innovation.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150" // Placeholder image
            alt="Team Member 3"
          />
          <h2 className="text-xl font-semibold">Mike Johnson</h2>
          <p className="text-gray-600">Lead Developer</p>
          <p className="text-gray-500 mt-2">
            Mike loves coding and ensures our products are built with the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
}