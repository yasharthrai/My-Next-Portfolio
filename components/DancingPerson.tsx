import React from 'react'

interface DancingPersonProps {
  delay?: number
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'inline'
  size?: 'sm' | 'md' | 'lg'
}

const DancingPerson: React.FC<DancingPersonProps> = ({ 
  delay = 0, 
  position = 'inline',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'w-36 h-36',
    md: 'w-60 h-60',
    lg: 'w-96 h-96',
  }

  const positionMap = {
    'top-left': 'fixed top-20 left-10 z-10',
    'top-right': 'fixed top-20 right-10 z-10',
    'bottom-left': 'fixed bottom-20 left-10 z-10',
    'bottom-right': 'fixed bottom-20 right-10 z-10',
    'inline': 'inline-block'
  }

  return (
    <div 
      className={`${positionMap[position]} ${sizeMap[size]} flex items-center justify-center`}
      style={{ animation: `dance 2s ease-in-out infinite`, animationDelay: `${delay}ms` }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-red-600"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Head */}
        <circle cx="50" cy="20" r="8" />
        
        {/* Body */}
        <line x1="50" y1="28" x2="50" y2="50" />
        
        {/* Left Arm */}node -v/
        <line 
          x1="50" 
          y1="35" 
          x2="30" 
          y2="25"
          style={{ 
            transform: 'rotate(20deg)',
            transformOrigin: '50px 35px',
            animation: `swing 1s ease-in-out infinite`
          }}
        />
        
        {/* Right Arm */}
        <line 
          x1="50" 
          y1="35" 
          x2="70" 
          y2="25"
          style={{ 
            transform: 'rotate(-20deg)',
            transformOrigin: '50px 35px',
            animation: `swing 1s ease-in-out infinite`,
            animationDirection: 'reverse'
          }}
        />
        
        {/* Left Leg */}
        <line 
          x1="50" 
          y1="50" 
          x2="40" 
          y2="70"
          style={{ 
            animation: `kick 1s ease-in-out infinite`
          }}
        />
        
        {/* Right Leg */}
        <line 
          x1="50" 
          y1="50" 
          x2="60" 
          y2="70"
          style={{ 
            animation: `kick 1s ease-in-out infinite`,
            animationDirection: 'reverse'
          }}
        />
      </svg>

      <style jsx>{`
        @keyframes dance {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(-2deg); }
          50% { transform: translateY(0px) rotate(2deg); }
          75% { transform: translateY(-8px) rotate(-2deg); }
        }

        @keyframes swing {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-30deg); }
        }

        @keyframes kick {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(45deg); }
        }
      `}</style>
    </div>
  )
}

export default DancingPerson
