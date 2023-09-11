// Sort DESC from ASC Array
package main

import (
	"fmt"
)

func descSorted(inputArr []int) []int {
	isOdd := len(inputArr) % 2
	medianIndex := (len(inputArr) - 1) / 2
	lastIndex := len(inputArr) - 1

	if isOdd == 0 {
		medianIndex += 1
	}

	for i := 0; i < medianIndex; i++ {
		tempVal := inputArr[i]

		//swap
		inputArr[i] = inputArr[lastIndex]
		inputArr[lastIndex] = tempVal

		lastIndex = lastIndex - 1
	}

	return inputArr

}

func main() {
	ascSortedArr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}

	fmt.Println(descSorted(ascSortedArr))

}
