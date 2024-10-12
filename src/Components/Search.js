import React from "react";
import { useState } from "react";
import { Card, Input } from "antd";

function Search({ filterFood }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log("in search handler");
        filterFood(e.target.value);
    }
    return (
        <Card >
            <Input type="text" placeholder="Search Food" value={searchTerm} onChange={handleSearch}></Input>
        </Card>
    );
};

export default Search;