import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-['Inter']">
      {/* CTA */}
      <div className="relative py-12 px-6 bg-gradient-to-r from-[#1F5A7A] via-[#3A8FB7] to-[#6BAF45] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 font-['Poppins']">
              Ready to Build Something{" "}
              <span className="drop-shadow-[0_0_20px_rgba(107,175,69,0.5)]">
                Extraordinary?
              </span>
            </h2>
            <p className="text-white/70 text-sm max-w-md">
              Partner with us to transform your digital vision into reality.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg text-white font-semibold text-sm backdrop-blur-md border border-white/30 bg-white/15 hover:bg-white/25 transition font-['Poppins']"
            >
              View Our Work
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-lg font-semibold text-sm bg-white text-[#1F5A7A] hover:bg-[#6BAF45] hover:text-white transition shadow-lg font-['Poppins']"
            >
              Get a Free Quote →
            </a>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="bg-[#0B1F2A] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-r from-[#1F5A7A] to-[#3A8FB7] rounded-lg flex items-center justify-center text-white font-bold">
                N
              </div>
              <div>
                <span className="text-white font-bold font-['Poppins']">
                  NextGen<span className="text-[#6BAF45]">.</span>
                </span>
                <div className="text-white/40 text-xs">PrimeWay Solutions</div>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-5">
              We craft cutting-edge digital solutions that empower businesses.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#6BAF45] border border-[#6BAF45]/30 px-2 py-1 rounded">
              <span className="w-2 h-2 bg-[#6BAF45] rounded-full animate-pulse"></span>
              Available for Projects
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider font-['Poppins']">
              Our Services
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                "Toll Management",
                "Road & Highway Projects",
                "Smart Infrastructurex",
              ].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-[#6BAF45] transition">
                    › {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider font-['Poppins']">
              Company
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {["About", "Projects", "Contact"].map((c) => (
                <li key={c}>
                  <a href="#" className="hover:text-[#6BAF45] transition">
                    › {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider font-['Poppins']">
              Newsletter
            </h4>

            {subscribed ? (
              <p className="text-[#6BAF45] text-sm">
                ✅ Thanks! You're subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe}>
                <p className="text-white/40 text-xs mb-3">
                  Get updates in your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-l-md outline-none focus:border-[#3A8FB7]"
                    required
                  />
                  <button className="px-4 bg-gradient-to-r from-[#1F5A7A] to-[#3A8FB7] text-white text-sm font-semibold rounded-r-md">
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#070F14] py-5 px-6 text-xs text-white/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p>
            © {currentYear}{" "}
            <span className="text-[#3A8FB7] font-['Poppins']">
              NextGen PrimeWay
            </span>
          </p>

          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="hover:text-[#6BAF45]">
                {l}
              </a>
            ))}
          </div>

          <p>
            Made with <span className="text-red-500">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
