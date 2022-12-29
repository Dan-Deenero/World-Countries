import {  Link } from 'react-router-dom'
const Countries = ({country, theme}) => {
    

    
    return ( 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-10 gap-5 mt-8">
            {country.map((count, index) =>(
                <div className="rounded-lg overflow-hidden shadow-md milo" style={{backgroundColor: theme.ui}}>
                    <Link to={`/CountryDet/${count.name.common}`} key={index}>
                            <img src={count.flags.png} alt={count.name.common} className="w-full h-32 sm:h-48 object-cover"/>
                            <div className="rounded-lg p-5">
                                <h2 className="font-bold text-lg mb-2">{count.name.common}</h2>
                                <h5 className="font-semibold pb-1">Population: <span className="font-light">{count.population}</span></h5>
                                <h5 className="font-semibold pb-1">Region: <span className="font-light">{count.region}</span></h5>
                                <h5 className="font-semibold pb-1">Capital: <span className="font-light">{count.capital}</span></h5>
                            </div>
                    </Link>
                </div>
            ))}
        </div>
     );
    //  {`/country/${country.id}`}
}
 
export default Countries;