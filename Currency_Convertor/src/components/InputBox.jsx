import { useId, useState,useEffect } from "react"


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Proptypes validation

  
  const amountInputId = useId()
  const [localAmount, setLocalAmount] = useState(amount);
  const [localSelectCurrency, setLocalSelectCurrency] = useState(selectCurrency);
  
  // Update local state when props change
  useEffect(() => {
    setLocalAmount(amount);
    setLocalSelectCurrency(selectCurrency);
  }, [amount, selectCurrency]);


  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={localAmount}
          onChange={(e) => {
            setLocalAmount(Number(e.target.value)); // Update localAmount
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w.full">Currency Type</p>

        <select className="rounded-lg px-1 py-1 bg-gray-100 
        cursor-pointer outline-none"
          value={localSelectCurrency}
          onChange={(e) => {
            setLocalSelectCurrency(e.target.value); // Update localSelectCurrency
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}



        </select>
      </div>
    </div>
  )
}

export default InputBox

