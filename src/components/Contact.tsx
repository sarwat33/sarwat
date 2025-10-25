import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
            <span className="text-green-600">&gt;</span> contact.sh
          </h2>
          <div className="h-1 w-20 bg-green-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-900 border border-green-900/30 rounded-lg p-6 mb-6">
              <p className="text-green-600 mb-4">$ cat contact_info.txt</p>
              <div className="ml-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-green-500 mt-1" size={20} />
                  <div>
                    <p className="text-green-400 font-semibold">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-green-500/80 hover:text-green-300 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-green-500 mt-1" size={20} />
                  <div>
                    <p className="text-green-400 font-semibold">Location</p>
                    <p className="text-green-500/80">Chittagong, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-green-900/30 rounded-lg p-6">
              <p className="text-green-600 mb-4">$ echo $AVAILABILITY</p>
              <div className="ml-4 space-y-3 text-green-500/80">
                <p>
                  <span className="text-green-400">[OPEN]</span> Available for collaborations
                </p>
                <p>
                  <span className="text-green-400">[OPEN]</span> Open to project opportunities
                </p>
                <p>
                  <span className="text-green-400">[OPEN]</span> Interested in research work
                </p>
                <p className="mt-4 pt-4 border-t border-green-900/30">
                  Feel free to reach out for academic collaborations, project inquiries, or just
                  to connect!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-green-900/30 rounded-lg p-6">
            <p className="text-green-600 mb-6">$ ./send_message.sh</p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <p className="text-green-400 text-xl font-semibold mb-2">Message Sent!</p>
                <p className="text-green-500/70 text-center">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-green-500 mb-2 text-sm">
                    <span className="text-green-600">&gt;</span> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-green-900/30 rounded px-4 py-2 text-green-400 focus:outline-none focus:border-green-700/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-green-500 mb-2 text-sm">
                    <span className="text-green-600">&gt;</span> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-green-900/30 rounded px-4 py-2 text-green-400 focus:outline-none focus:border-green-700/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-green-500 mb-2 text-sm">
                    <span className="text-green-600">&gt;</span> Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-green-900/30 rounded px-4 py-2 text-green-400 focus:outline-none focus:border-green-700/50 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-green-500 mb-2 text-sm">
                    <span className="text-green-600">&gt;</span> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-green-900/30 rounded px-4 py-2 text-green-400 focus:outline-none focus:border-green-700/50 transition-colors resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-900/30 hover:bg-green-800/40 text-green-400 px-6 py-3 rounded border border-green-700/50 transition-all duration-300 hover:border-green-500 flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
