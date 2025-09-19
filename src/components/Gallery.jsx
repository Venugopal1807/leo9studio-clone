import React from "react";

const works = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];

export default function Gallery() {
  return (
    <section id="work" className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Our Work
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 bg-pink-100 dark:bg-pink-900 rounded-xl shadow">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
          
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <b>Client: RIGI</b> 
            <br />
            Collaborating with Rigi, our team of UI and UX designers, along with front-end web developers, transformed their vision into reality. From a user-friendly interface to seamless functionality, we brought Rigi's innovative website to life.
          </p>
        </div>
        <div className="p-6 bg-indigo-100 dark:bg-indigo-900 rounded-xl shadow">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <b>Client: BMW</b>
            <br />
            BMW Connect makes your on-the-go lifestyle effortless. Optimised for 2014 and newer vehicles, the app learns your preferences over time.
          </p>
        </div>
        <div className="p-6 bg-purple-100 dark:bg-purple-900 rounded-xl shadow">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <b>Client: Nirmal Bang</b>
            <br />
            Nirmal Bang is one of the leading stock broking companies in India, caters to retail and institutional clients by offering them a range of financial products and services..
          </p>
        </div>
      </div>
    </section>
  );
}
