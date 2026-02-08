export default function TrustGrid() {
  return (
    <section className="relative pt-20 pb-0">
      
      <div className="bg-[#eceff1] shadow-[0_25px_60px_rgba(0,0,0,0.08)] py-28">
        
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-[1fr_auto_1fr] items-center">
            
            {/* Left Side */}
            <div className="text-center md:text-right pr-20">
              <h2 className="text-4xl md:text-4xl font-bold text-[#1d3e68] leading-snug">
                Organized Trade And<br/> Export Capabilities
              </h2>
            </div>

            {/* Center Divider */}
            <div className="hidden md:block w-px h-32 bg-[#1d3e68]/30"></div>

            {/* Right Side */}
            <div className="pl-20 text-center md:text-left mt-6 md:mt-0 max-w-lg">
              <p className="text-gray-600 text-md leading-relaxed">
                SaltStone Overseas operates with focused expertise in commodity trading 
                and strategic sourcing, managing organized domestic supply and international 
                export operations through well-defined processes, reliable partner networks, 
                and consistent execution.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
