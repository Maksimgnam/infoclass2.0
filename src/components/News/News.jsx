import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import news from '../../../newsData/newsData.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const News = ({ isTheme }) => {
    const [searchName, setSearchName] = useState('');
    

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(searchName.toLowerCase())
    
    )
    const reservedNews = filteredNews.reverse()
    
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='w-full h-auto  ' style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',
            padding: '5px',
        }}>
            <div className='w-full h-14 flex justify-between items-center p-7 '>
                <Link to="/">
                    <button className='w-9 h-9 bg-black rounded-md text-lg text-white '>

                        {`<`}


                    </button>
                </Link>
                <h2 className='text-2xl font-medium  title  pl-16 '>Новини</h2>
                
  
  
                        <div className='flex'>

                      
                      
                          <input
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                type="text"
                                placeholder='Пошук новин...'
                                className='w-52 h-9 text-lg placeholder:text-lg  bg-transparent rounded-s  shadow-input  outline-none pl-2'
                            />
                            <div className='w-9 h-9 bg-button rounded-e flex items-center justify-center '>
                            <img className='w-5 h-5' src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
                            </div>
                              </div>

          

            

            </div>
            {
                news.length > 0 ? (
                    <div className='w-full h-auto '>


                        {reservedNews.length > 0 ? (
                            <div className='w-full  h-auto flex flex-wrap justify-center   pl-5 '>
                                {reservedNews.map((item, index) => (
                                    <div data-aos="fade-up" key={index} className='w-auto min-w-news-card max-w-news-card min-h-96 h-auto  rounded-xl flex flex-col justify-center items-center m-3 pt-2'>
                                  
                                            <img className='w-11/12 h-96 rounded' src={item.image} alt="" />
                                     
                                        <div className='w-11/12 h-auto  pt-3'>
                                            <div className=' w-full h-auto flex items-center justify-between'>
                                                <h2 className='sm:text-3xl text-3xl  font-medium'>{item.title}</h2>
                                            </div>
                                            <div className='w-full h-auto pt-2'>
                                                <p className='text-lg  font-medium'>{item.description}</p>
                                            </div>
                                            
                                            <div className='w-full h-12 flex flex-col justify-between mt-1'>
                                            { item.doc && <a href={item.doc} download={item.doc} className='text-md      text-emerald-500 font-medium'>Презентація 1</a>
                                                
                                            }
                                             { item.doc && <a href={item.doc} download={item.doc2} className='text-md      text-emerald-500 font-medium'>Презентація 2</a>
                                                
                                            }
                                            </div>
                                            <div className='w-full h-auto pt-1 flex justify-end pr-2'>
                                                <p className='text-lg  font-medium'>{item.createdDate}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='w-full h-loader text-3xl font-mono text-gray-500 flex items-center justify-center'>Не знайдено</div>
                        )}
                    </div >
                ) : (
                    <div className='w-full h-loader  text-3xl font-mono text-gray-500 flex items-center justify-center'>Під'єднання...</div>
                )
            }


        </div >
    );
};

export default News;
