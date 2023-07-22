import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2> Resort | Hotel Room Booking</h2>
      <p>
        &copy; <span>{year}</span> RoyalResort.com -  Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hemantbhargav"
        >
          Hemant Bhargava
        </a>
      </p>
    </footer>
  );
}
