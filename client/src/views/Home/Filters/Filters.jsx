import style from './Filters.module.css'
import { useState } from 'react';


const Filters = () => {
    const { filterState, setFilterState } = useState({
        name: "",
    });

    const handleInputChange = (event) => {
        // destructura el evento con las props name o value
        const { name, value } = event.target;
        
        //para poder modificar el estado
        setFilterState({...filterState, [name]: value });

    };
    
    return (
        <div className={style.contPrincipal} >

            <div className={style.filters} >
                <div className={style.seasonstile} >
                    <h2>Filtra por continete</h2>
                </div>
                <div className={style.radioinputs}>
		            <label>
		            	<input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="All"
                            onChange={handleInputChange}  
                        />
		            		<span className={style.radiotile}>
		            			<span className={style.radioicon}>
		            			</span>
		            			<h4 className={style.radiolabel}>All</h4>
		            		</span>
		            </label>
		            <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="North America" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>North America</h4>
		            	</span>
		            </label>
		            <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="South America" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>South America</h4>
		            	</span>
		            </label>
                    <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="Africa" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Africa</h4>
		            	</span>
		            </label>
                    <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="Asia" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Asia</h4>
		            	</span>
		            </label>
                    <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="Europe" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Europe</h4>
		            	</span>
		            </label>
                    <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="Oceania" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Oceania</h4>
		            	</span>
		            </label>
                    <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="continent" 
                            value="Antarctica" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Antarctica</h4>
		            	</span>
		            </label>
                </div>


            <div className={style.filters}>
                <div className={style.seasonstile} >
                    <h2>Filtra por actividad:</h2>
                </div>
                <div className={style.seasonstile} >
                    <select className={style.select} >
                        <option value="selected">Selecciona una actividad</option>
                        <option value="asc">Aqui van las actividades</option>
                    </select>
                </div>
            </div>
            <div className={style.filters}>
                <div className={style.seasonstile} >
                    <h2>Ordena:</h2>
                </div>
                <div className={style.seasonstile} >
                    <select className={style.select} >
                        <option value="selected">Por Nombre</option>
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                    </select>
                </div>
                <div className={style.seasonstile} >
                    <select className={style.select} >
                        <option value="selected">Por Poblacion</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>
            </div>
            </div>
        </div>
    )
 }

 export default Filters;