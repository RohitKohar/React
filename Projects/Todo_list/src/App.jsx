function App() {
  return (
    <center class="todo-container">
      <h1>TODO LIST</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div class="col-4">
            <input type="date" placeholder="" />
            </div>
          <div class="col-2">
          <button class="btn btn-primary" type="submit">Add</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Dairy Milk
          </div>
          <div class="col-4">
            2078-12-12
            </div>
          <div class="col-2">
          <button class="btn btn-primary" type="submit">Delete</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Biscuits
          </div>
          <div class="col-4">
            2081-12-12
            </div>
          <div class="col-2">
          <button class="btn btn-primary" type="submit">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
