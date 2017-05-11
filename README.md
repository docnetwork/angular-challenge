## Fibonacci's Button
![fib](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/220px-Fibonacci_spiral_34.svg.png)

The Fibonacci Sequence is an integer sequence commonly used in places where increasing sequences are needed, like login throttling or coding interview questions :smile:. Formally it's defined as:

```
fib(n) = fib(n-1) + fib(n-2)
```

For this exercise we'll use the following base cases:
```
fib(0) = 0
fib(1) = 1
```


### What do I do?

This is a simple test of basic CS fundamentals as well as basic Angular knowledge. The spec is as follows:

- [ ] A single page that contains two buttons, `Reset` and `Next Fib`, as well as the current value of the sequence interpolated above it, starting at 0.
- [ ] When the `Next Fib` button is clicked, we will update the view to display the next step of the sequence.
- [ ] Clicking the `Reset` button will reset the sequence to the base case
- The buttons and text should be styled similarly to the screenshot below:
![screen](screenshot.png)

### For consideration:

- Don't worry too much about dependency management. Including angular in a `<script>` tag is fine for this example.
- Performance is important here. Make sure to watch how frequently you're evaluating a `fib()` function such that you're only running it as needed.
- Update the last section of this `README.md` with any thoughts or explanations you may have.
- You can choose to use recursion or iteration for your implementation, but please let us know why you chose the one you did in the README.

### Extra Credit

- Two `Next Fib` buttons, one that uses an iterative Fibonacci algorithm, and another that uses a recursive one, labeled appropriately.
- Automated tests included for the project. Use your framework of choice for testing and include dependencies such that we can run the tests here.


### Solution Discussion:
I've offered three functions to calculate the Fibonacci sequence incrementally. All three share a single controller/state, so you can use them interchangeably.

#### Custom Function (nickFib)
This function uses `lastFib` and `thisFib` to calculate the next number in the sequence, rather than doing so with a loop or recursion. Iteration and recursion are pretty heavy solutions for this problem, since we're only incrementing the number on a button click rather than accepting a user argument. Because we're always starting from 0, we can just cache the last two values and ad them to get the new one, improving performance.

#### Iterative Function (iterativeFib)
The iterative method uses a `while` loop and checks it agains `nFib`, which refers to which number of the sequence we want. Each time we run this or any of these function, we increment `nFib` to maintain consistency across all implementations.

#### Recursive Function (recursiveFib)
While this function could be more concise than the way I've written it here, that's due to the fact that I wanted to keep compatability across all implementations. Because of this, I have to calculate the sequence recursively for both `thisFib` and `lastFib` on each call. If we were to settle on a single implementation, its performance could be improved.
