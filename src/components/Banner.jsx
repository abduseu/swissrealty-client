import { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import CardAll from './CardAll';
import useAxios from '../hooks/useAxios';

const Banner = () => {
    const allProperties = useAxios('/properties');
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (search === '') {
            setFiltered([]);
        } else {
            const filtProps = allProperties.filter(x => x.verification === 'verified' && x.location.toLowerCase().includes(search.toLowerCase()));
            setFiltered(filtProps);
        }
    }, [allProperties, search]);

    const handleChange = (e) => setSearch(e.target.value);

    return (
        <div>
            <div className="rounded-lg lg:flex flex-col lg:justify-around lg:items-center bg-banner overflow-hidden">
                <div className="font-black leading-snug p-10 text-5xl md:text-6xl md:pt-20 md:leading-snug">
                    <h2 className="text-center">Swiss <span><ReactTyped strings={["Excellence", "Precision"]} typeSpeed={100} backSpeed={50} loop /></span> <br /> in Realty</h2>
                </div>
                <div className="theme-shadow bg-white my-14 rounded-3xl mx-auto">
                    <div>
                        <div className="p-5 md:px-16 gap-5 w-full lg:flex justify-between items-center">
                            <div className="md:flex my-5 gap-5">
                                <div className="flex flex-col w-96">
                                    <label htmlFor="location" className="prim text-lg font-semibold">Location:</label>
                                    <input type="text" name="location" placeholder="Location" id="location" className='input-success' value={search} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="btn-prim hover:bg-orange-600 btn-wide btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {search !== '' && filtered.length > 0 && (
                <div>
                    <div className="py-10 md:py-20 px-4 md:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                            {filtered.map(x => (
                                <CardAll key={x._id} obj={x} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
