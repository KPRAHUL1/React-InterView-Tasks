import { useState } from "react";

// ✅ Complete the custom hook below
function useToggle(initialValue = false) {
  // your code here
  const [isOn, setIsOn] = useState(initialValue);
    const toggle = () => {
        setIsOn(prev => !prev);
    };
    return [isOn, toggle];
}

export default function Toggle() {
  // ✅ Use the custom hook inside this component
 const [isOn, toggle] = useToggle(false);

  return (
    /* your toggle function for the onClick method */
    <div className="flex justify-center items-center justify-items-end h-screen">
         <button data-testid="toggle-button" className="bg-blue-400 text-white p-2 px-2 rounded-xl" onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
    </div>
   
  );
}
//onClick={()=>useToggle(toggle(true))}