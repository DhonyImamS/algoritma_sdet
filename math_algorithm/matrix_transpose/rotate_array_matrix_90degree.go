// transpose array dimension cube
package main

import "fmt"

func rotateArr90Deg(arrIn [3][3]int) [][]int {
	arr1, arr2, arr3 := arrIn[0], arrIn[1], arrIn[2]

	var arrA, arrB, arrC []int
	var result [][]int

	// rotating 90 degree
	arrA = append(arrA, []int{arr3[0], arr2[0], arr1[0]}...)
	arrB = append(arrB, []int{arr3[1], arr2[1], arr1[1]}...)
	arrC = append(arrC, []int{arr3[2], arr2[2], arr1[2]}...)

	result = append(result, arrA)
	result = append(result, arrB)
	result = append(result, arrC)

	return result
}

func main() {
	nums2DArr := [3][3]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}

	fmt.Println(rotateArr90Deg(nums2DArr))
}