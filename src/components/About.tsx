import station from "../assets/images/station.jpg";

function About() {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-slate-300 p-6 md:p-12 h-auto md:h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold leading-tight mb-8 text-center">
          About CA Hydrogen Station Locator Application
        </h2>

        <div className="mb-8">
          <img
            src={station}
            alt="Hydrogen Imagery"
            className="w-full rounded-md object-cover h-70"
          />
        </div>

        <h2 className="text-2xl font-semibold leading-tight mb-4">
          Discover our Core Features
        </h2>

        <ul className="list-disc list-inside pl-5 mb-8">
          <li className="mb-2">
            <strong>Real-time Status Updates:</strong> Stay updated with the
            latest status from every Hydrogen station in Calfornia.
          </li>
          <li className="mb-2">
            <strong>Interactive Map Experience:</strong> Explore and locate
            hydrogen stations with our user-friendly mapbox interface.
          </li>
          <li className="mb-2">
            <strong>Comprehensive Station Listings:</strong> Dive into detailed
            information of each station, including their precise addresses and how much Hydrogen is available.
          </li>
          <li className="mb-2">
            <strong>Personalized Proximity Sorting:</strong> Enjoy the
            convenience of seeing stations sorted by their closeness to your
            current location.
          </li>
          <li className="mb-2">
            <strong>Flexible Filtering:</strong> Need a specific location? Just
            filter the stations using street, zipcode, or name of the station.
          </li>
        </ul>

        <p className="mb-6">
          This application is driven by the vision of promoting
          clean and sustainable energy solutions. Our platform serves as a
          bridge connecting consumers with the nearest hydrogen stations,
          ensuring convenience and efficiency in their journey towards a greener
          tomorrow. 
        </p>

        <p>
          Your feedback is our stepping stone to improvement. If you have any
          suggestions or experiences to share, please don't hesitate to reach
          out!
        </p>
      </div>
      <section className="p-8" id="contact">
        <h2 className="text-2xl font-bold mb-12 text-center">
          Contact <span className="text-indigo-500">Me!</span>
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="thankyou.html"
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <input name="bot-field" className="hidden" />
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center mb-4">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                className="p-4 w-full md:w-full m-1 bg-white text-black border rounded-md shadow-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="p-4 w-full md:w-full m-1 bg-white text-black border rounded-md shadow-md"
              />
            </div>
            <div className="flex flex-wrap justify-center mb-4 ml-2">
              <input
                type="text"
                placeholder="Mobile Number"
                name="number"
                className="p-4 w-full md:w-full m-1 bg-white text-black border rounded-md shadow-md"
              />
              <input
                type="text"
                placeholder="Email Subject"
                name="subject"
                required
                className="p-4 w-full md:w-full m-1 bg-white text-black border rounded-md shadow-md"
              />
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-2 w-full m-1 bg-white text-black border rounded-md shadow-md resize-none centered"
          ></textarea>
          <button
            type="submit"
            value="Send Message"
            className="mt-8 p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default About;
