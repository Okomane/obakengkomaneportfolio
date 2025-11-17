import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  // --- Replace with your actual email address ---
  const RECIPIENT_EMAIL = "obakengkomane@gmail.com"; 
  // ----------------------------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Construct the Subject Line
    const subject = encodeURIComponent(`New Contact from Portfolio: ${formData.name}`);

    // 2. Construct the Email Body
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );

    // 3. Create the mailto: URL
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    // 4. Open the user's email client
    window.location.href = mailtoLink;
    
    // Optional: Show a message indicating what happened
    toast.success('Your default email client should open now. Please press "Send" there to complete your message!');

    // 5. Clear the form after submission attempt
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-white">
          Let's Work Together
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Looking for a DevOps Engineer? Let's discuss how I can help your team.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-slate-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-slate-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm text-slate-300">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-slate-900 border-slate-700 text-white"
                      placeholder="Your company (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-slate-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-900 border-slate-700 text-white min-h-[150px]"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* ... (Contact Info Cards remain the same) ... */}
          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white mb-1">Email</h3>
                    <p className="text-slate-400 text-sm">obakengkomane@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white mb-1">Phone</h3>
                    <p className="text-slate-400 text-sm">+27 64 501 6690</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white mb-1">Location</h3>
                    <p className="text-slate-400 text-sm">Available for remote work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}