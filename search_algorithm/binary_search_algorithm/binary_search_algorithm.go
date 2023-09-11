// Binary Search from sorted Array to find number
package main

import "fmt"

func binarySearchNum(num int, sourceArr []int) string {

	startIndex := 0
	endIndex := len(sourceArr) - 1

	for startIndex <= endIndex {
		medianIndex := startIndex + (endIndex-startIndex)/2
		comparableValue := sourceArr[medianIndex]

		if num == comparableValue {
			return strconv.Itoa(medianIndex)
		} else if num < comparableValue {
			endIndex = medianIndex - 1
		} else {
			startIndex = medianIndex + 1
		}
	}

	return "not found"
}

