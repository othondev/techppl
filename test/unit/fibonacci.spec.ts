import FibonacciFinder from "../../src/service/fibonacciFinder";

const TIMER = 2;

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks()
});

test("should send output when add number", () => {
  const callbackMock = jest.fn();
  const fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);

  fibonacciFinder.addNumber(10);
  expect(callbackMock).toHaveBeenCalledWith("Number 10 added");
});

test("should send output when timer launches", () => {
  const callbackMock = jest.fn();
  const fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);

  expect(callbackMock).not.toBeCalled();
  jest.advanceTimersByTime(TIMER * 1000);
  expect(callbackMock).toHaveBeenCalledWith("");

  fibonacciFinder.addNumber(13);
  jest.advanceTimersByTime(TIMER * 1000);
  expect(callbackMock).toHaveBeenLastCalledWith(" 13:1 ");
});

test("should pause and resume", () => {
  const callbackMock = jest.fn();
  const fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);

  expect(callbackMock).not.toBeCalled();
  fibonacciFinder.pauseTimer();
  expect(clearInterval).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(10*TIMER * 1000);
  expect(callbackMock).toHaveBeenCalledTimes(0)

  fibonacciFinder.resumeTimer();
  jest.advanceTimersByTime(TIMER * 1000);
  expect(callbackMock).toHaveBeenCalledTimes(1)
});

test("should identify fibonacci number", () => {
  const callbackMock = jest.fn();
  const fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);

  fibonacciFinder.addNumber(1)
  expect(callbackMock).toHaveBeenCalledWith("Number 1 added =>FIB<=");

  fibonacciFinder.addNumber(2)
  expect(callbackMock).toHaveBeenCalledWith("Number 2 added =>FIB<=");

  fibonacciFinder.addNumber(5)
  expect(callbackMock).toHaveBeenCalledWith("Number 5 added =>FIB<=");

  fibonacciFinder.addNumber(377)
  expect(callbackMock).toHaveBeenCalledWith("Number 377 added =>FIB<=");

})

