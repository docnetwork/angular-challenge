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
**Overall**
I decided to bring in ui-router and put the iterative and recursive solutions on their own states. I also included a third, simple solution. Utilized Jasmine for testing. Should be able to do npm install to get it and run with command 'jasmine' at the root of the project. This is going to sound bad, but I've actually never written any tests before. Starting out coding I did a bunch of small projects so I was like 'why worry about tests since its a small project? I'll learn some of that testing stuff later...'. Then, at my current job we unfortunately don't utilize any testing on our frontend code. Learning a testing framework has been on my TODO list for a while, so I figured this coding challenge would be a nice opportunity to get my feet wet. I probably didn't structure or implement it anywhere near the most efficient way...but I think I did aiight for a first try :p This is also going to sound bad, but I've never really worried too much about writing the most optimally performant code. Again, starting out coding small projects I always thought 'this is such a small project...why worry about a few extra milliseconds here and there? I'll learn some of that performance stuff later...'. Also again, at my current job there is a tendency to prioritize speed of development over quality of development, so oftentimes performance optimization doesn't really get as much proactive consideration as it probably should. By virtue of this coding challenge I was compelled to do some researching on performance. In fact, I found some article that compared the performance of iterative vs recursive for a fibonacci sequence function. 'Twas some interesting stuff and I've got some mental notes for things I should consider in my future development :)

**Simple**
Based on the requirements, the sequence will always start with 0 as the first value, which means we know that 1 is always the second value at the start. Thus, you can set up two variables to store the previous two numbers in the sequence. We also know the next number in the sequence is the sum of the previous two numbers. Therefore, when `Next Fib` button is clicked you have the previous two numbers stored in variables and can simply add them to get the next number, then update the variables to the new previous two numbers in sequence values. This is the simplest solution because there is no iteration or recursive.ness going on. However, it is limited because you need to progress in sequence and couldn't jump ahead to find any value you wanted.

**Iterative**
This solution took me a while to figure out. The main benefit of this method over the simple implementation is that you can find any fibonacci number without having known the previous 2 or next 2 numbers. From performance research I noticed this was the more performant option compared to recursive, so I'd choose to implement this solution.

**Recursive**
To be honest, I had to search on the Google to find this solution. I'm familiar with the concept of recursion and how it works, but I haven't yet encountered a scenario out in the wild where I would need to use it. Anyways, from that Google.ing I learned that recursion in this scenario is not the most optimally performant. In terms of lines of code it looks super sweet, short and clean, but likely wouldn't be the best solution to implement if you desire optimized performance.
