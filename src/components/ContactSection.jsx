import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Github } from "lucide-react";

export const ContactSection = () => {

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

          {/* Contact Information */}
          <div className="mx-auto max-w-3xl p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
              <span className="inline-block w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary mr-2 align-middle"></span>
              Contact Details
            </h3>

            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
              <div className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                <div className="p-2 rounded-full bg-primary/10 text-primary mb-1">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:codewithkinu@gmail.com"
                  className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                >
                  jaiswalvishalkr@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                <div className="p-2 rounded-full bg-primary/10 text-primary mb-1">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+9199XXXXXXXX"
                  className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                >
                  +91 99XXXXXXXX
                </a>
              </div>

              <div className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                <div className="p-2 rounded-full bg-primary/10 text-primary mb-1">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                <span className="text-sm sm:text-base font-medium">
                  Rajkot, Gujarat, India
                </span>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <h4 className="font-medium mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground text-center">Find me on</h4>
              <div className="flex justify-center gap-2 sm:gap-3">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    url: "",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/vishalkrjaiswal",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    url: "",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>

          
        </div>
      </div>
    </section>
  );
};