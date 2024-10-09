import { useState, useEffect } from "react";
import "./NeonEffect.css"; // Create this CSS file

const NeonEffect = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newNode = {
        x: event.clientX,
        y: event.clientY,
        id: Date.now(), // Unique ID for each node
      };
      setNodes((prevNodes) => [...prevNodes, newNode]);
    };

    // Attach mouse move event
    document.addEventListener("mousemove", handleMouseMove);
    
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setNodes((prevNodes) => {
      const newNode = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        id: Date.now(),
      };
      return [...prevNodes, newNode];
    });
  };

  return (
    <div className="neon-container" onClick={handleClick}>
      {nodes.map((node) => (
        <div
          key={node.id}
          className="neon-node"
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default NeonEffect;
