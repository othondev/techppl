import FibonacciFinder from "../../src/service/fibonacciFinder";
var TIMER = 2;
beforeEach(function () {
    jest.useFakeTimers();
});
afterEach(function () {
    jest.restoreAllMocks();
});
test("should send output when add number", function () {
    var callbackMock = jest.fn();
    var fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);
    fibonacciFinder.addNumber(10);
    expect(callbackMock).toHaveBeenCalledWith("Number 10 added");
});
test("should send output when timer launches", function () {
    var callbackMock = jest.fn();
    var fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);
    expect(callbackMock).not.toBeCalled();
    jest.advanceTimersByTime(TIMER * 1000);
    expect(callbackMock).toHaveBeenCalledWith("");
    fibonacciFinder.addNumber(13);
    jest.advanceTimersByTime(TIMER * 1000);
    expect(callbackMock).toHaveBeenLastCalledWith(" 13:1 ");
});
test("should pause and resume", function () {
    var callbackMock = jest.fn();
    var fibonacciFinder = new FibonacciFinder(TIMER, callbackMock);
    expect(callbackMock).not.toBeCalled();
    fibonacciFinder.pauseTimer();
    expect(clearInterval).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(10 * TIMER * 1000);
    expect(callbackMock).toHaveBeenCalledTimes(0);
    fibonacciFinder.resumeTimer();
    jest.advanceTimersByTime(TIMER * 1000);
    expect(callbackMock).toHaveBeenCalledTimes(1);
});
