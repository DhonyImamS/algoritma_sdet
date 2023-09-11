// Merge n Sort Algorithm
package main

import (
	"fmt"
	"math"
)

func merge(array1 []int, array2 []int) []int {

	totalLen := len(array1) + len(array2)
	leftPointer, rightPointer := 0, 0

	var arrayResult []int

	for index := 0; index < totalLen; index++ {
		if leftPointer == len(array1) {
			arrayResult = append(arrayResult, array2[rightPointer])
			rightPointer += 1
		} else if rightPointer == len(array2) {
			arrayResult = append(arrayResult, array1[leftPointer])
			leftPointer += 1
		} else if array1[leftPointer] <= array2[rightPointer] {
			arrayResult = append(arrayResult, array1[leftPointer])
			leftPointer += 1
		} else if array1[leftPointer] > array2[rightPointer] {
			arrayResult = append(arrayResult, array2[rightPointer])
			rightPointer += 1
		}

		// fmt.Println(arrayResult, leftPointer, rightPointer)
	}

	return arrayResult
}

func mergeSort(ints []int) []int {
	// divider
	if len(ints) == 1 {
		return ints
	}

	median := int(math.Floor(float64(len(ints)) / 2))
	arr := ints
	arr2 := ints

	sliceArr := arr[:median]
	sliceArr2 := arr2[median:]

	return merge(mergeSort(sliceArr), mergeSort(sliceArr2))
}

func main() {
	numbers := []int{1, 2, 6, 3, 5, 4, 2}

	result := mergeSort(numbers)
	fmt.Println(result)
}
