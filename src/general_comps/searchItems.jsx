import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';


const SearchItems = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort"
                options={[
                    {value: 'name', name: 'By name'},
                    {value: 'info', name: 'By description'},
                    {value: 'category_url', name: 'By category'},
                    {value: 'price', name: 'By price'},
                ]}
            />
        </div>
    );
};

export default SearchItems;