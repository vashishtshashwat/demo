import { useState, useRef, useEffect } from "react";




function App() {




  const [d1, setD1] = useState("");
  
  
  const [d2, setD2] = useState("");
  
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");
  const [message, setMessage] = useState("");

  const r1 = useRef("");
  const r2 = useRef("");
  const r3 = useRef("")
  const r4 = useRef("");


const handleKeyDown = (e, setFunc, prevRef) => {
    if (e.key === "Backspace" && !e.target.value && prevRef) {
      setFunc(""); // clear previous value
      prevRef.current.focus(); // move focus backward
    }
  };

  
  useEffect(() => {
    if (d1&&d2&&d3&&d4){
      const otp = d1 + d2 + d3 + d4;
      if (otp === "2025") {
        setMessage("OTP Verified Successfully!");
      } else {
        setMessage("Invalid OTP!");
      }
    }
  }, [d1, d2, d3, d4]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>demo OTP</h2>

      <input type="text" maxLength={1} value={d1} onChange={(e) => {
          setD1(e.target.value);
          if (e.target.value) r2.current.focus();
        }}
        onKeyDown={(e) => handleKeyDown(e, setD1, null)}
        ref={r1}/>
      <input type="text" maxLength={1} value={d2}onChange={(e) => {
          setD2(e.target.value);
          if (e.target.value) r3.current.focus();
        }}
        onKeyDown={(e) => handleKeyDown(e, setD1, r1)}
        ref={r2}/>
      <input type="text" maxLength={1} value={d3} onChange={(e) => {
        setD3(e.target.value);
          if (e.target.value) r4.current.focus();}}
          onKeyDown={(e) => handleKeyDown(e, setD2, r2)}
        ref={r3}/>
      <input type="text" maxLength={1} value={d4}
        onChange={(e) => setD4(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, setD3, r3)}
        ref={r4}/>

      <p>{message}</p>
    </div>
  );
}

export default App;
