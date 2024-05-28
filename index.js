// Define action types
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

// Define action creators
function add() {
  return { type: ADD };
}

function subtract() {
  return { type: SUBTRACT };
}

function reset() {
  return { type: RESET };
}

// Define a simple store
class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  // Method to get the current state
  getState() {
    return this.state;
  }

  // Method to dispatch an action
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

// Define a reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Function to run scenarios
function runScenarios() {
  // Scenario 1: Initial State Verification
  const store1 = new Store(counterReducer, { count: 0 });
  console.log("Scenario 1: Initial State -", store1.getState());

  // Scenario 2: Incrementing the Counter
  const store2 = new Store(counterReducer, { count: 0 });
  store2.dispatch(add());
  store2.dispatch(add());
  console.log("Scenario 2: After Incrementing the Counter -", store2.getState());

  // Scenario 3: Decrementing the Counter
  const store3 = new Store(counterReducer, { count: 2 });
  store3.dispatch(subtract());
  console.log("Scenario 3: After Decrementing the Counter -", store3.getState());

  // Scenario 4: Resetting the Counter
  const store4 = new Store(counterReducer, { count: 1 });
  store4.dispatch(reset());
  console.log("Scenario 4: After Resetting the Counter -", store4.getState());
}

// Run the scenarios
runScenarios();
