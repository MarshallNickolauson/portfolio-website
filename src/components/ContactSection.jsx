import React, { useState } from 'react'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id='contact'>
            <div className="container mx-auto mt-10 mb-60">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="mt-4 text-mainOrange text-5xl font-roboto font-bold tracking-wider text-center px-2">Contact Me</h2>
                    <p className="font-ropa text-white tracking-wider text-2xl w-11/12 mx-auto pb-2">
                        I'm available for freelance work, collaborations, or just to say hello!
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Name'
                                required
                                className="w-11/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-transparent border border-gray-600 text-gray-200 text-xl"
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                required
                                className="w-11/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-transparent border border-gray-600 text-gray-200 text-xl"
                            />
                        </div>

                        <div className="mb-6">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Message'
                                required
                                rows="4"
                                className="w-11/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-transparent border border-gray-600 text-gray-200 text-xl"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-11/12 py-3 bg-mainOrange text-white font-semibold rounded-lg shadow-md hover:bg-mainOrangeDark focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Email and Social Links */}
                    <div className="text-lg mb-6 flex flex-row justify-center space-x-2">
                        <p className='text-white'>Or reach me directly at:</p>
                        <a href="mailto:hello@yourname.com" className="text-mainOrange hover:underline">
                            hello@yourname.com
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/marshall-nickolauson-3a7b04274/" className="text-gray-300 hover:text-gray-400">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.11 18.22h-3.33v-8.89h3.33v8.89zm-1.67-10.22c-1.11 0-2-.89-2-2 0-1.11.89-2 2-2s2 .89 2 2c0 1.11-.89 2-2 2zm12.22 10.22h-3.33v-4.67c0-1.11-.89-2-2-2s-2 .89-2 2v4.67h-3.33v-8.89h3.33v1.33c.44-.67 1.56-1.33 2.78-1.33 2.22 0 4 1.78 4 4v5.89z" />
                            </svg>
                        </a>
                        <a href="https://github.com/MarshallNickolauson" className="text-gray-300 hover:text-gray-400">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5a11.5 11.5 0 00-3.634 22.416c.574.106.782-.25.782-.555v-2.217c-3.172.692-3.837-1.525-3.837-1.525-.523-1.332-1.28-1.689-1.28-1.689-1.046-.713.08-.698.08-.698 1.155.082 1.76 1.185 1.76 1.185 1.025 1.76 2.692 1.252 3.35.957.106-.741.4-1.252.73-1.54-2.535-.287-5.2-1.268-5.2-5.634 0-1.246.444-2.265 1.176-3.063-.118-.289-.51-1.45.116-3.021 0 0 .956-.307 3.134 1.172a10.72 10.72 0 015.706 0c2.178-1.478 3.134-1.172 3.134-1.172.626 1.571.236 2.732.118 3.021.732.798 1.176 1.817 1.176 3.063 0 4.377-2.671 5.34-5.215 5.624.412.355.784 1.069.784 2.157v3.193c0 .307.21.67.786.555a11.5 11.5 0 00-3.636-22.416z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
