// swap code using 2 variable
package main

import "fmt"

func main() {
	a, b := 10, 11

	a = a + b
	b = a - b
	a = a - b

	fmt.Println(a)
	fmt.Println(b)
}