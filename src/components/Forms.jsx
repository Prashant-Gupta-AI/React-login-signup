import React, { useState } from 'react'
// import FormItem from './FormItem';


function Forms() {
    const [itemList, setItemList] = useState([{ item: "" }]);
    const [Myform, setMyform] = useState({});

    const handleItemChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...itemList];
        list[index][name] = value;
        setItemList(list);
    };

    const handleItemRemove = (index) => {
        const list = [...itemList];
        list.splice(index, 1);
        setItemList(list);
    };

    const handleItemAdd = () => {
        setItemList([...itemList, { item: "" }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log(itemList);
        const form = itemList.map((item) => item.item);

        setMyform({
            "myField": form,
            "submit": "submit"
        })
        alert("Json response object in the console")
        console.log(Myform)

    }

    return (
        <form className="App" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="item">Item(s)</label>
                {itemList.map((singleItem, index) => (
                    <div key={index} className="items">

                        <input
                            name="item"
                            type="text"
                            id="item"
                            value={singleItem.item}
                            onChange={(e) => handleItemChange(e, index)}
                            required
                        />
                        {itemList.length !== 1 && (
                            <button
                                type="button"
                                onClick={() => handleItemRemove(index)}
                                className="remove-btn"
                            >
                                <span>Remove</span>
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={handleItemAdd}
                className="add-btn"
            >
                <span>Add a Item</span>
            </button>
            <button type='submit' >Submit</button>
            <div className="output">
                <h2>Output</h2>
                {itemList &&
                    itemList.map((singleItem, index) => (
                        <ul key={index}>
                            {singleItem.item && <li>{singleItem.item}</li>}
                        </ul>
                    ))}
            </div>
        </form>
    );
}

export default Forms;