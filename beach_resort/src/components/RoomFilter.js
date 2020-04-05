import React, { Component } from 'react'
import { useContext } from 'react';
import { RoomContext, RoomConsumer } from '../context';
import Title from './Title';
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {

        handleChange, type,
        capacity,
        price,
        minPrice,
        maxSize,
        maxPrice,
        minSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, "type");// prendo tutti i valori di type differenti e li metto in un array
    // add all

    types = ["all", ...types];

    types = types.map((item, index) => {
        return (<option value={item} key={index}>{item}</option>)
    })
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (

        <div>
            <section className="filter-container">
                <Title title="search rooms" />
                <form className="filter-form">
                    {/*select type*/}
                    <div className="form-group">
                        <label htmlFor="type" >room type</label>
                        <select name="type" id="type" value={type} className="form-control"
                            onChange={handleChange} >
                            {types}
                        </select>

                    </div>
                    {/* end select type*/}
                    {/*select guest*/}
                    <div className="form-group">
                        <label htmlFor="capacity" >Guest</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control"
                            onChange={handleChange} >
                            {people}
                        </select>

                    </div>
                    {/* end select guest*/}
                    {/* select price*/}
                    <div className="form-group">
                        <label htmlFor="price">

                            room price ${price}

                        </label>
                        <input type="range" name="price" min={minPrice}
                            max={maxPrice} id="price" value={price}
                            onChange={handleChange} className="form-control" />


                    </div>
                    {/* end price*/}
                    {/* start size*/}
                    <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size" value={minSize}
                                onChange={handleChange} className="size-input" />
                            <input type="number" name="maxSize" id="size" value={maxSize}
                                onChange={handleChange} className="size-input" />

                        </div>


                    </div>
                    {/* end size*/}
                    {/* extras*/}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>


                        </div>
                        <div className="single-extra">

                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>


                    </div>
                </form>

            </section>
        </div>



    )


}
