## Description
This program was created as a developer coding test requested by a company I'm being recruited to.

It accepts an ongoing series of user-supplied numbers as inputs and outputs notifications when certain conditions are met. It operates as follows:

1. On startup, the program prompts the user for the number of seconds (X) between outputting the frequency of each number to the screen.
2. Every X seconds the program displays, in frequency, descending order, the list of numbers and their frequency.
3. If the user enters 'halt' the timer pauses.
4. If the user enters 'resume' the timer resumes.
5. If the user enters a number that is one of the first 1000 Fibonacci numbers, the system alerts "FIB"
6. If the user enters 'quit', the application outputs the numbers and their frequency, a farewell message, and finally terminate.

## Example
Please input the number of time in seconds between emitting numbers and their frequency

15

```>>``` Please enter the first number

10

```>>``` Please enter the next number

10

```>>``` Please enter the next number

8

```>>``` FIB

```>>``` Please enter the next number

```>>``` 10:2, 8:1

halt

```>>``` timer halted

resume

```>>``` timer resumed

8

```>>``` FIB

```>>``` Please enter the next number

33

```>>``` Please enter the next number

```>>``` 10:2, 8:2, 33:1

quit

```>>``` 10:2, 8:2, 33:1

```>>``` Thanks for playing, press ENTER to exit.

## Run the application
`
node dist/index.js
`
or
`
npm run-script run
`

## Run tests
`
npm run-script test
`

## Run in development mode
`
npm run-script nodemon
`

## Comments
### Map vs Binary Search Tree
It was assumed that the user inputs numbers more often then the frequencies are printed out.
This allows to use a map for constant-time insertions and makes printing out O(nlogn) due to sorting.

An opposite assumption would lead to using a Binary Search Tree.
That would speed up printing out to O(n), but slow down inserting to log(n).

### setInterval() vs setTimeout()
If the logic, for example calculating large Fibonacci numbers on the go rather then precomputing it,
could take longer than the interval time specified in setInterval(), it would be advised to
recursively call a named function setTimeout(). That would avoid preventing the request from finishing in its allotted time. Although it wouldn't guarantee execution on a fixed time, it would guarantee completion of the previous invocation before recursing.

## Questions 1
You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL). Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?

I would need to create a new listener in ```index.ts``` that would be passed in to ```App```, for instance, ```object.addEventListener("onchange", myScript);``` for a web-based app. No restructure needed as long as TypeScript is accepted.

## Questions 2
You now need to make your application 'production-ready' and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.

I would first create a set of guidelines to specify what it means for my application to be 'production-ready', automate these processes and then evangelise about them.

A simplified set of guidelines could look like this:

1. Have a reasonable test coverage with regards to unit end end-to-end tests.
2. Have a continuous integration, for example, BitBucket/GitLab on Jenkins/Travis.
3. Have a Platform as a Service (docker) to be able to deliver the app in containers.
4. Deploy the docker containers to the cloud, for example using AWS EC2 which provides elastic web-scale computing, reliability and security.

## Questions 3
What did you think about this coding test - is there anything you’d suggest in order to improve it?

Thank you for the challenge. I enjoyed it as it has quite a few components and leaves room for assumptions. I would put more attention to test algorithms and data structures skills. One way to do it would be to change the Fibonacci part to calculate something else where a brute-force solution wouldn't be a feasible option. For example, printing the smallest missing positive integer where the algorithm should run in O(n) time and uses constant extra space (https://leetcode.com/problems/first-missing-positive/).

The example of the problem shows two lines where the count of 10 is 3, but I think it should be 2:

```>>``` 10:3, 8:2, 33:1

And the following line should be probably split into two:

```>>``` Please enter the next number >> 10:2, 8:1
