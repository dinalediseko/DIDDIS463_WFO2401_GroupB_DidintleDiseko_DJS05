# DJS05

This repository contains JavaScript code for managing the state of a Tally App using a Redux.

## How to Run the Code

To run the code, simply open the provided HTML file (`index.html`) in a web browser. Open the browser's developer console to view the results of the state management scenarios.

## Overview

The code implements a simple Tally App state management system using a Redux. It includes the following components:

1. Action Types: Constants representing different types of actions (`ADD`, `SUBTRACT`, `RESET`).
2. Action Creators: Functions for creating action objects corresponding to different actions (`add()`, `subtract()`, `reset()`).
3. Store Class: A class representing the state management store, including methods for getting the current state and dispatching actions (`Store` class).
4. Reducer Function: A function that defines how the state is updated in response to actions (`counterReducer` function).

The code also includes a function `runScenarios()` to execute and test different state management scenarios, logging the results to the console.

## Approach

1. **Setting Up Initial State**: The initial state of the Tally App is defined with a count of 0.
2. **Defining Actions and Reducer**: Actions such as "ADD", "SUBTRACT", and "RESET" are defined along with a reducer function that updates the state based on these actions.
3. **Store Implementation**: A simple store class is implemented to manage the state and handle action dispatching.
4. **Testing Scenarios**: The code includes a function `runScenarios()` to execute and test different scenarios such as initial state verification, incrementing/decrementing the counter, and resetting the counter.

## Challenges Faced and Overcome

1. **Understanding Redux Concepts**: Initially, understanding Redux concepts such as actions, reducers, and stores was challenging. I overcame this by studying documentation, tutorials, and example codes to gain a clear understanding.
2. **Implementing the Store Class**: Implementing a simple store class to manage the state and handle action dispatching required careful consideration of state mutation and immutability. I addressed this challenge by thoroughly understanding how Redux manages state updates and applying similar principles in my implementation.
3. **Testing Scenarios**: Ensuring that all scenarios were tested effectively without overlapping or conflicting actions required careful planning and execution. I addressed this challenge by designing clear test cases for each scenario and verifying the results through console logging.
