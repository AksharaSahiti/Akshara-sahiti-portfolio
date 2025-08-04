
import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="mb-6 text-center">
        Feel free to reach me via email at{' '}
        <a className="text-blue-600 underline" href="mailto:aksharaofc@gmail.com">
          aksharaofc@gmail.com
        </a>
      </p>
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="border rounded p-2"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          rows={5}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      <div className="mt-8 text-center space-x-4">
        <a
          href="https://www.linkedin.com/in/akshara-sahiti/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AksharaSahiti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
  