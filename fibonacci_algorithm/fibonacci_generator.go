package main

import "fmt"

type Memorize struct {
	Min int
	Max int
}

// fibonacci adalah sebuah fungsi yang mengembalikan sebuah fungsi yang mengembalikan sebuah integer.
func fibonacci() func(int, *Memorize) int {
	return func(index int, ctx *Memorize) int {
		result := 0
		
		if index < 2 {
			result = index
		} else { 
			result = ctx.Min + ctx.Max
			//Swap Memorize
			ctx.Min = ctx.Max
			ctx.Max = result
		}
		
		return result
	}
}

func main() {
	context := &Memorize{0,1}
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f(i, context))
	}
}
