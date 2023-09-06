/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name) return;
    const newItem = { name, quantity, checked: false, id: uuid() };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div className="input">
        <input
          type="text"
          placeholder="nama barang"
          value={name}
          onInput={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="jumlah"
          onInput={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
