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