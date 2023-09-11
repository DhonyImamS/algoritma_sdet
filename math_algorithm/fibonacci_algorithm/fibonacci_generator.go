package main

import "fmt"

// fibonacci adalah sebuah fungsi yang mengembalikan sebuah fungsi yang
// mengembalikan sebuah integer.

func fibonacci() func() int {
	intNums := [2]int{0, 0}
	numShift := 0
	
	return func() int {
		
		if numShift == 1 {
			intNums[1] = 1
		}
			
		newVal := intNums[0] + intNums[1]
		
		if numShift != 1 {
			intNums[0], intNums[1] = intNums[1], newVal // Swap values
		}
		
		numShift += 1;

		return newVal
	}
}

func main() {
	f := fibonacci();
	
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}