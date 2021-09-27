const InputGroupText = (props) => {
  const handleName = (ev) => {
    props.setName(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        Escribe un nombre:
      </label>
      <input
        className="input-text"
        type="text"
        name="name"
        id="name"
        placeholder="María García"
        //value={name} si no comento esta línea me da error
        onChange={handleName}
      />
    </div>
  );
};

export default InputGroupText;
