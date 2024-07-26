import React from "react";

export default function GoogleMap({lat, lang}) {
  
  return (
    <div className="mb-8">
      {" "}
      <iframe
        src={
          "https://maps.google.com/maps?q=" +
          lat +
          "," +
          lang +
          "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
        id="map"
        className="w-full min-h-96"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

