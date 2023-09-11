// Duplicate Number Detection
package main

import "fmt"

func main() {
	numbers := [6]int{1, 2, 3, 4, 5, 4}
	hashMap := make(map[int]int)

	for _, value := range numbers {
		_, exists := hashMap[value]

		if !exists {
			hashMap[value] = value
		} else {
			fmt.Printf("duplicate number detected")
			break
		}
	}
}