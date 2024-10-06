function AddLocation() {
    function handleAddLocation(event) {
      event.preventDefault();
      const text = event.target.elements.addLocation.value;
      const Location = {
        id: 4,
        text,
        done: false
      };
    }
  
    return (
      <form onSubmit={handleAddLocation}>
        <input name="addLocation" placeholder="Add Location" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  