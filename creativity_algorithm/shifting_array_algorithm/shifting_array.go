// Shifting Array in Golang
package main

import "fmt"

func shiftingArr(inputArr []int) []int {
	var tempValue int

	for i := len(inputArr) - 1; i > 0; i-- {
		tempValue = inputArr[i]

		inputArr[i] = inputArr[i-1]
		inputArr[i-1] = tempValue

	}

	return inputArr
}

func main() {
	originalArr := []int{1, 2, 3, 4, 5}

	for i := 0; i < len(originalArr); i++ {
		fmt.Println(shiftingArr(originalArr))
	}

}
