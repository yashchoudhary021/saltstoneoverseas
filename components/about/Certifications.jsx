"use client";

import { useState } from "react";
import Image from "next/image";

export default function Certifications() {

  const certifications = [
    {
      title: "Importer Exporter Code (IEC)",
      image: "/certifications/IEC.png",
    },
    {
      title: "ISO 22000:2018 – Food Safety Management System",
      image: "/certifications/ISO-22000-2018.png",
    },
    {
      title: "ISO 9001:2015 – Quality Management System",
      image: "/certifications/ISO-9001-2015.png",
    },
    {
      title: "HACCP Certification",
      image: "/certifications/HACCP.png",
    },
    {
      title: "FSSC 22000:2018 – Food Safety System",
      image: "/certifications/FSSC-22000-2018.png",
    },
  ];

  return (
    <section className="py-24 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1d3e68] mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-gray-600">
            We adhere to internationally recognized standards and regulatory frameworks.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border"
            >
              {/* Image preview */}
              <div className="relative h-44 bg-gray-100 rounded mb-6 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#1d3e68] text-center">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
