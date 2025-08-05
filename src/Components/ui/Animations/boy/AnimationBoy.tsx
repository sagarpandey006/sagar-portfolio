import React, { useEffect, useRef } from 'react';
import './AnimationBoy.css';
import boyImage from '../../../../assets/nav-img/avatar-sagar.png';

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
      {/* Animation Boy Component */}
      <div id="animation-boy" className="animation-boy">
        <div className="animation-boy-content">
          <div className="animation-boy-avatar-container">
            <img 
              src={boyImage}
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