import React from 'react'

export default function Search() {
    return (
        <section className="homepage-search">
            <form className="homepage-search-form">
                <h2 className="homepage-search-title">Find plants</h2>
                <input type="text" placeholder="Search..." className="homepage-search-box"></input>
                <button type="submit" className="btn-secondary">Search</button>
                {/* 
                <ul className="homepage-search-checkboxes">
                    <li className="checkbox-item">
                        <label htmlFor="native">Native</label>
                        <input type="checkbox" name="native"></input>
                    </li>
                    <li className="checkbox-item">
                        <label htmlFor="native">Native</label>
                        <input type="checkbox" name="native"></input>
                    </li>
                    <li className="checkbox-item">
                        <label htmlFor="native">Native</label>
                        <input type="checkbox" name="native"></input>
                    </li>
                    <li className="checkbox-item">
                        <label htmlFor="native">Native</label>
                        <input type="checkbox" name="native"></input>
                    </li>
                </ul> */}

            </form>
        </section>
    )
}
