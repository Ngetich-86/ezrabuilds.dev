"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import contactData from "../../../data/contact.json";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Message sent! (This is a demo)");
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss new opportunities? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-slate-900">Email</h3>
                                    <a href={`mailto:${contactData.email}`} className="text-slate-600 hover:text-primary transition-colors">
                                        {contactData.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-slate-900">Phone</h3>
                                    <a href={`tel:${contactData.phone}`} className="text-slate-600 hover:text-primary transition-colors">
                                        {contactData.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-slate-900">Location</h3>
                                    <p className="text-slate-600">{contactData.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
