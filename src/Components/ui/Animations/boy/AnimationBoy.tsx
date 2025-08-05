import React, { useEffect, useRef } from 'react';

const AnimationBoy: React.FC = () => {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pupilStartPoint: number = -10;
    const pupilRangeX: number = 20;
    const pupilRangeY: number = 15;

    // Mouse position variables
    const mouseXStartPoint: number = 0;
    const mouseXEndPoint: number = window.innerWidth;
    const mouseYEndPoint: number = window.innerHeight;
    const mouseXRange: number = mouseXEndPoint - mouseXStartPoint;

    const handleMouseMove = (event: MouseEvent): void => {
      const currentXPosition: number = event.clientX - mouseXStartPoint;
      const fracXValue: number = currentXPosition / mouseXRange;

      const currentYPosition: number = event.clientY;
      const fracYValue: number = currentYPosition / mouseYEndPoint;

      // Calculate pupil positions
      const pupilXCurrentPosition: number = pupilStartPoint + (fracXValue * pupilRangeX);
      const pupilYCurrentPosition: number = pupilStartPoint + (fracYValue * pupilRangeY);

      // Move both pupils
      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
      }
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Embedded Styles */}
      <style>{`
        /* Animation Boy Component Styles - Avatar Only */
        .animation-boy {
          width: 100%;
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .animation-boy-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        /* Avatar Styles */
        .animation-boy-avatar-container {
          width: 220px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animation-boy-avatar-img {
          width: 100%;
          z-index: 2;
        }

        .animation-boy-avatar-face {
          position: absolute;
          width: 100%;
          height: 97%;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding-left: 5px;
        }

        .animation-boy-avatar-eye {
          width: 50px;
          height: 50px;
          background-color: rgb(223, 210, 210);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .animation-boy-pupil {
          width: 20px;
          height: 20px;
          background-color: black;
          border-radius: 50%;
          border: 5px solid rgb(65, 51, 51);
          filter: blur(0.6px);
          transition: transform 0.1s ease;
        }

        .animation-boy-right-eye {
          box-shadow: 15px 15px 5px rgba(0, 0, 0, 0.233) inset,
                      10px 10px 5px rgba(41, 33, 33, 0.644) inset;
        }

        .animation-boy-left-eye {
          box-shadow: -10px -15px 5px rgba(0, 0, 0, 0.349) inset;
        }

        .animation-boy-avatar-eye::before {
          position: absolute;
          content: "";
          width: 2px;
          height: 5px;
          border-radius: 50%;
          background-color: rgba(214, 214, 214, 0.726);
          z-index: 2;
          filter: blur(0.2px);
          left: 15px;
          transform: rotate(45deg);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .animation-boy {
            height: 250px;
          }
          
          .animation-boy-avatar-container {
            width: 180px;
          }
        }

        @media (max-width: 480px) {
          .animation-boy {
            height: 200px;
          }
          
          .animation-boy-avatar-container {
            width: 150px;
          }
          
          .animation-boy-avatar-eye {
            width: 40px;
            height: 40px;
          }
          
          .animation-boy-pupil {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      {/* Animation Boy Component */}
      <div id="animation-boy" className="animation-boy">
        <div className="animation-boy-content">
          <div className="animation-boy-avatar-container">
            <img 
              src="src\assets\nav-img\boy.png" 
              alt="Sagar Avatar" 
              className="animation-boy-avatar-img" 
            />
            <div className="animation-boy-avatar-face">
              <div className="animation-boy-avatar-eye animation-boy-left-eye">
                <div 
                  ref={leftPupilRef}
                  className="animation-boy-pupil"
                ></div>
              </div>
              <div className="animation-boy-avatar-eye animation-boy-right-eye">
                <div 
                  ref={rightPupilRef}
                  className="animation-boy-pupil"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationBoy;