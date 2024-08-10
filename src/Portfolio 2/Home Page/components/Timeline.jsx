import { useState, useEffect, forwardRef } from 'react';

const Timeline = forwardRef(({ darkTheme, scrollContainerRef }, ref) => {
  const [ballPosition, setBallPosition] = useState(0);

  const sections = [
    { name: "Bio", ref: ref.bio },
    { name: "Skills", ref: ref.skills },
    { name: "Certificates", ref: ref.certificates },
    // Uncomment if needed
    // { name: "Contributions", ref: ref.contributions },
    // { name: "Experience", ref: ref.experience },
    { name: "Projects", ref: ref.projects },
    { name: "Connect", ref: ref.connect },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return; // Ensure scrollContainerRef is not null

      const scrollContainer = scrollContainerRef.current;
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrollPercentage = scrollTop / scrollHeight;

      const timeline = document.getElementById('timeline');
      const timelineHeight = timeline ? timeline.offsetHeight : 0;

      setBallPosition(scrollPercentage * timelineHeight);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
    
  }, [scrollContainerRef]);

  return (
    <div id="timeline" className={`fixed flex flex-col justify-around h-lvh mx-4 border-l-4 ${darkTheme ? "border-gray-700" : "border-gray-200"}`}>
      <div style={{ top: `${ballPosition}px` }} className="absolute -left-[10px] bg-blue-600 w-4 h-4 rounded-full" />
      
      {sections.map((section, index) => (
        <button key={index} onClick={() => section.ref.current.scrollIntoView({ behavior: 'smooth' })} className="relative flex group">
          <div className={`relative -left-[6px] w-2 h-2 rounded-full ${darkTheme ? "bg-gray-400" : "bg-gray-400"} flex items-center justify-center`} />

          <div className={`hidden group-hover:grid place-content-center absolute left-2 -top-2 underline text-blue-500 text-sm ${darkTheme ? "bg-gray-800" : "bg-white"} w-24 h-10 rounded-lg shadow-lg`}>
            Go to {section.name}
          </div>
        </button>
      ))}
    </div>
  );
});

export default Timeline;