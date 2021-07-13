import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//globally define getByTestId
let getByTestId;

// run this before each test (otherwise, define const { getByTestId } = render(<Counter />); at beginning of each test)
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0");
})

test("input contains initial value of 1", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
})

test("add button renders with +", () => {
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
})

test("subtract button renders with -", () => {
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-");
})

test("changing value of input works correctly", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })
  
  expect(inputEl.value).toBe("5");
})

test("click on plus btn adds 1 to counter", () => {
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("1");
  
})

test("click on subtract btn subtracts 1 from counter", () => {
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("-1")
})

test("change input value then click on plus btn works correctly", () => {
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("5");
  
})

test("change input value then click on subtract btn works correctly", () => {
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("-5");
  
})

test("adding and then subtracting leads to the correct counter number", () => {
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "10"
    }
  })

  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  fireEvent.click(subtractBtnEl)
  fireEvent.click(subtractBtnEl)

  expect(counterEl.textContent).toBe("20")
})

test("counter contains correct className", () => {
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50"
    }
  });

  fireEvent.click(addBtnEl)

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl)

  expect(counterEl.className).toBe("green")

   fireEvent.click(addBtnEl)

  expect(counterEl.className).toBe("green")

  fireEvent.click(subtractBtnEl)

  expect(counterEl.className).toBe("green")

  fireEvent.click(subtractBtnEl)

  expect(counterEl.className).toBe("")

  fireEvent.click(subtractBtnEl)
  fireEvent.click(subtractBtnEl)
  fireEvent.click(subtractBtnEl)
  fireEvent.click(subtractBtnEl)

  expect(counterEl.className).toBe("red")
})

