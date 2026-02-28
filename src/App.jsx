import { useState } from 'react'

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const [demoMode, setDemoMode] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  const features = [
    {id: 1, icon: '🎤', title: 'Presentation Coach', score: '78%', subtitle: 'Eye:68% Body:72%', color: 'pink', demo: 'Live Camera Analysis + body language analysis+ prouncation of words + fumblng of words analysis'},
    {id: 2, icon: '🗣️', title: 'English Fluency', score: '82 WPM', subtitle: 'Clarity: High', color: 'blue', demo: 'Speech Recognition'},
    {id: 3, icon: '📺', title: 'YouTube Analyzer', score: '85%', subtitle: 'Smart Analysis', color: 'green', demo: 'Topic-wise relevent Videos + seperate video +suggest video +channels'}, // ← **नवीन!**
    {id: 4, icon: '🚀', title: 'Career Predictor', score: '₹22LPA', subtitle: 'Digital Marketing', color: 'orange', demo: 'AI Job Matching'},
    {id: 5, icon: '⏰', title: 'Task Manager', score: '16/20', subtitle: 'Pomodoro Active', color: 'yellow', demo: 'Smart Scheduling'},
    {id: 6, icon: '📚', title: 'Study Planner', score: '4.2 GPA', subtitle: '45 Notes Stored', color: 'indigo', demo: 'photo Notes + smart study store'},
    {id: 7, icon: '💼', title: 'Job Ready Score', score: '92%', subtitle: 'Interview Prep', color: 'purple', demo: 'Mock Interview AI+ Live mistake fix +improved answer'}
  ]

  const handleCardClick = (feature) => {
    setActiveCard(feature)
    setDemoMode(true)
    
    // Simulate API call
    setTimeout(() => {
      alert(`🔥 ${feature.title}\n📊 Live Analysis Started:\n${feature.demo}`)
      setDemoMode(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/50 to-purple-900/50 p-4 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Backend Status + Demo Mode */}
        <div className={`mb-8 p-4 rounded-2xl backdrop-blur-lg border ${demoMode ? 'border-yellow-400 bg-yellow-500/20' : 'border-green-400/50 bg-green-500/20'}`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${demoMode ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
              <span className={`font-mono font-bold ${demoMode ? 'text-yellow-400' : 'text-green-400'}`}>
                {demoMode ? `🎬 LIVE: ${activeCard?.title}` : 'Backend Active'}
              </span>
            </div>
            <div className="text-sm opacity-80 font-mono">
              7 APIs Active | Real-time Analysis
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl mb-6">
            🧠 StudentMaster AI
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
            **Click any card for LIVE AI Demo** | 7-in-1 Solution |
          </p>
        </div>

        {/* 3D Brain */}
        <div className="flex justify-center mb-20">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full shadow-2xl animate-pulse"></div>
            <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 mx-auto bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl animate-ping"></div>
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold bg-black/40 rounded-full backdrop-blur-sm px-4">
              78% BRAIN HEALTH
            </div>
          </div>
        </div>

        {/* 7 CLICKABLE + HOVER Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id}
              onClick={() => handleCardClick(feature)}
              onMouseEnter={() => setHoveredCard(feature)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border-2 border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer h-48 md:h-52 flex flex-col justify-between active:scale-95 overflow-hidden"
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform z-10 relative">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3 z-10 relative">{feature.title}</h3>
              
              {/* Score */}
              <p className="text-xl md:text-2xl font-black mb-2 text-white drop-shadow-lg z-10 relative">
                {feature.score}
              </p>
              
              {/* Subtitle */}
              <p className="text-sm opacity-80 z-10 relative">{feature.subtitle}</p>
              
              {/* Click Prompt */}
              <div className="mt-2 p-2 bg-black/30 rounded-xl text-xs font-mono text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all z-10 relative">
                👆 Click for demo
              </div>
              
              {/* VIDEO ANALYSIS Hover Popup */}
              {hoveredCard === feature && feature.id === 3 && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-md flex items-center justify-center rounded-3xl z-20 p-2">
                  <div className="text-center text-sm space-y-1">
                    <div className="text-cyan-300 font-bold">📊 Smart Analysis</div>
                    <div className="text-gray-300">✅ Views + Engagement</div>
                    <div className="text-gray-300">✅ +ve/-ve Comments</div>
                    <div className="text-green-400 font-bold mt-1">85% Useful ✓</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clean Footer */}
        <div className="text-center p-8 bg-white/5 rounded-3xl backdrop-blur-lg border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm opacity-70 max-w-4xl mx-auto">
            <div>✅ 7-in-1 AI Solution</div>
            <div>✅ Smart Video Analysis</div>
            <div>✅ Real-time Feedback</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
