import useFetch from './Hooks/useFetch'
import { useParams, Link, useLocation, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './Hooks/ThemeContext';

const CountryDet = () => {
    const { id } = useParams()
    const { data: res, isPending, error} = useFetch("https://restcountries.com/v3.1/name/" + id);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    let history = useHistory()
    const [data, setData] = useState(null);

    useEffect(() => {
        if(res) {
            setData(res[0])
        }

    }, [res])

     

    
    const goHomeBtn = () => history.push('/')

    return ( 
        <div className="grid py-24 country-details h-screen" style={{backgroundColor: theme.bg}}>
            {
                 data ? (
                    <div className='mx-5 grid gap-5'>
                        <div className="flex items-center w-24">
                            <span className={`w-10 h-10 flex items-center justify-end gibo`} style={{backgroundColor: theme.ui}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>                      
                            </span>
                                <button onClick={goHomeBtn} className={`w-14 h-10 rounded-sm text-start p-2 gibo`} id="back" style={{backgroundColor: theme.ui}}>Back</button>                        
                        </div>
                        <div className="grid md:grid-cols-2 items-center gap-10">
                            <div className="">
                                <img src={data.flags.png} alt="" className="w-full h-full"/>
                            </div>
                            <div>
                                <h2 className="mb-7 font-bold text-xl">{data.name.common}</h2>
                                <div className="grid md:grid-cols-2 gap-5 md:gap-9 justify-between">
                                    <div>
                                        <h5 className="font-semibold pb-2">Native Name: <span className="font-light">Belgie</span></h5>
                                        <h5 className="font-semibold pb-2">Population: <span className="font-light">{data.population}</span></h5>
                                        <h5 className="font-semibold pb-2">Region: <span className="font-light">{data.region}</span></h5>
                                        <h5 className="font-semibold pb-2">Sub Region: <span className="font-light">{data.subregion}</span></h5>
                                        <h5 className="font-semibold pb-2">Capital: <span className="font-light">{data.capital}</span></h5>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold pb-2">Top Level Domain: <span className="font-light">{data.tld[0]}</span></h5>
                                        <h5 className="font-semibold pb-2">Currencies: <span className="font-light">{Object.values(data.currencies).map(currency=> currency.name +' , ' + currency.symbol)}</span></h5>
                                        <h5 className="font-semibold pb-2">Languages: <span className="font-light">{Object.values(data.languages).map(lang => lang +', ')}</span></h5>
                                    </div>
                                </div>
                                <div className="mt-10 flex flex-col md:flex-row gap-0 libs">
                                    <div className="mb-5">
                                        <h5 className="mr-4 font-semibold">Border Countries:</h5>
                                    </div>
                                    <div className="grid grid-cols-3 mb-4 gap-3 gibs">
                                            {
                                            data.borders ?
                                            data.borders.map(bord => <div className="flex items-center justify-center px-3 rounded-sm font-light text-center gibo" style={{backgroundColor: theme.ui}}>{bord}</div>)
                                            : null                                
                                            }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : "loading"
            }
        </div> 
            
    

           
    );
}
 
export default CountryDet;