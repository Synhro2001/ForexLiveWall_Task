import SearchButton from "../search-button/search-button";
import CurrencyLiveWall from "../currency-live-wall/currency-live-wall";
import ForexService  from "../services/forex-service";

import React, {useState, useEffect, Fragment} from 'react'

import "./input-form.css"

const regex = new RegExp(/^[a-zA-Z]{3,6}\/?[a-zA-Z]{3}$/gm);

const InputForm = () => { 

  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [templateUpdate, setTemplateUpdate] = useState([]);
  const [allResources, setAllResources] = useState([]);
  const [openDropDown, setOpenDropDown] = useState(true);
  
  const forexService = new ForexService();

  const updateData = () => {

    setValue(inputValue)
    
    if(regex.test(value)) {
      forexService.getCurrency(value.toLowerCase().replace('/', '')).then((res) => {
        setTemplateUpdate(res)
        
      });
      
    } else return null;
    
  };

  const getTicker = () => {
    forexService.getAllCurrency().then((allRes) => {
      setAllResources(allRes);
    });
  };

  const [intervalId, setIntervalId] = useState(0)

  useEffect(() => {

    if(intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    let interlId = setInterval(() => {
      updateData()
    }, 5000);

    setIntervalId(interlId);

  }, [value]);

  useEffect(() => {
    getTicker();
  }, []);

  const filteredTicker =  allResources.filter(elem => elem.ticker.indexOf(inputValue) !== -1);  

  const onInputValueChange = e => {
   
    setInputValue(e.target.value.toUpperCase())
    
  };

  const ItemClick = (e) => {
    setInputValue(e.target.textContent.toUpperCase())
    setOpenDropDown(false)
  };

  const inputClickItem = () => {
    setOpenDropDown(true)
    
  };

  return (
    <Fragment>
      <div className="row g-0">
        <div className="col-8">
        <input 
          type="text"
          value={inputValue}
          className="form-control shadow-none"
          placeholder="Search currency (EUR/USD)"
          onChange={onInputValueChange}
          onClick={inputClickItem}
          />
        </div>
        <div className="col-4">
        <SearchButton
            updateDate = {updateData}
          />
        </div>
        <ul className="drop-down col-7">
          { 
              inputValue && openDropDown ?
              filteredTicker.map((res, key) => {
                return (
                  <li key={key} className="drop-down-item" onClick={ItemClick} > 
                  {res.ticker}
                  
                  </li>

                )
              }) : null
          }
          
        </ul>
       </div>
       <div className="col">
       <div className="col-12">
       <div className="currency-wall-container">
       <CurrencyLiveWall  
        templateUpdate = {templateUpdate}
      />
       </div>
       </div>
      </div>
    </Fragment>
  )
   
}

export default InputForm;


