import { useEffect, useState, useContext } from 'react';
import Countries from './Countries';
import { ThemeContext } from './Hooks/ThemeContext';
import useFetch from './Hooks/useFetch';

const Home = ({}) => {
    const {data: result, isPending, error} = useFetch("https://restcountries.com/v3.1/all")
    const [data, setData] = useState([]);
    const {isLightTheme, light, dark, toogleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    

    const [top, setTop] = useState("hidden")

    useEffect(() => {
        if(result) {
            setData(result)
        }
    }, [result])



    const handleClick = () =>{
        if(top === "hidden"){
            setTop("block")
        }else{
            setTop("hidden")
        }
    }

    const SearchCountry = term =>{
        if(term === "") {
            setData(result || [])
            return
        }
        
        fetch(`https://restcountries.com/v3.1/name/${term}`).then(async (res) => {
            if(res.status === 200) {
                const data = await res.json()
                setData(data)
            }
        });
        
    }

    const filterByRegion = region =>{
        fetch(`https://restcountries.com/v3.1/region/${region}`).then(async (res) => {
            if(res.status === 200) {
                const data = await res.json()
                setData(data)
            }
        });
    }

    return ( 

            <main className={` px-14 w-full h-screen py-24`} style={{backgroundColor: theme.bg, color: theme.syntax}}>    
                <div className="">
                    <div className="flex flex-col lg:flex-row justify-between my-9 ">
                        <div className=" mb-5 flex items-center shadow-lg w-60">
                            <span className={`w-12 lg:w-24 h-14 flex justify-center items-center rounded-l-lg gibo`} style={{backgroundColor: theme.ui}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>                          
                            </span>
                            <input onChange={(e) => SearchCountry(e.target.value)} type="text" placeholder="search for a country..." className={`w-80 lg:w-96 h-14 rounded-r-lg gibo focus:outline-none`} style={{backgroundColor: theme.ui}}/>
                        </div>
                        <div>
                            <div  onClick={handleClick} className={`rounded-md mb-2 w-48 h-10 flex items-center justify-between shadow-lg px-5 gibo cursor-pointer`} id="filt" style={{backgroundColor: theme.ui}}>
                                <p className="text-sm">Filter by Region</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-6 font-bold">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>                          
                            </div>
                            <div className={`rounded-md mb-10 w-48 p-2 ${top} items-center shadow-lg px-5 absolute cursor-pointer gibo`} id="filtd" style={{backgroundColor: theme.ui}}>
                                <ul className="text-sm" >
                                    <li className="pb-2 cursor-pointer" onClick={e => filterByRegion(e.target.innerText)}>Africa</li>
                                    <li className="pb-2 cursor-pointer" onClick={e => filterByRegion(e.target.innerText)}>America</li>
                                    <li className="pb-2 cursor-pointer" onClick={e => filterByRegion(e.target.innerText)}>Asia</li>
                                    <li className="pb-2 cursor-pointer" onClick={e => filterByRegion(e.target.innerText)}>Europe</li>
                                    <li className="pb-2 cursor-pointer" onClick={e => filterByRegion(e.target.innerText)}>Oceania</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="country-list">
                        {error && <div>{error}</div>}
                        {isPending && <div>Loadin...</div>}
                        {data &&  <Countries country={data} theme={theme} onClick={handleClick}/>}                  
                    </div>
                </div>
            </main>
     );
}
 
export default Home;