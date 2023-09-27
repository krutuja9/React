import { useState, useCallback, useEffect, useRef } from "react"

const App = () => {
  // Define state variables using the useState hook.
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // UseRef hook for accessing the input field element.
  const passwordRef = useRef(null)

  // Define a function for generating a password based on the settings.
  const passwrodGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '~!@#$%^&*()_+~{}()'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // Define a function for copying the generated password to the clipboard.
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 49)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // Call the password generator function whenever the dependencies change.
  useEffect(() => {
    passwrodGenerator()
  }, [length, numberAllowed, charAllowed, passwrodGenerator])

  // JSX for rendering the user interface.
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-7 pb-5 ">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef} />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-3 text-lg">
          {/* Input for setting password length */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor=""> Length:{length}</label>
          </div>

          {/* Checkbox for including numbers in the password */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="">Numbers</label>
          </div>

          {/* Checkbox for including special characters in the password */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
