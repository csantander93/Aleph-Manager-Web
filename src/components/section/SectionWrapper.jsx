import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './SectionWrapper.css';

const SectionWrapper = ({ children, id }) => {
  const sectionRef = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  // Combina las refs
  useEffect(() => {
    if (sectionRef.current) {
      inViewRef(sectionRef.current);
    }
  }, [inViewRef]);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`section-wrapper ${inView ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;