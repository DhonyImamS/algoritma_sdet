// Decoder String
package main

import (
	"fmt"
	"strconv"
	"strings"
)

type MemObj struct {
	Count int
}

func main() {
	var encoderStr string

	str := "helloWhole"
	charArray := strings.Split(str, "")
	hashMap := make(map[string]MemObj)

	for _, value := range charArray {
		_, exists := hashMap[value]

		if !exists {
			hashMap[value] = MemObj{1}
		} else {
			data := hashMap[value]
			data.Count = data.Count + 1

			hashMap[value] = data
		}
	}

	fmt.Println(hashMap)

	// convert back to string encoder
	for _, value := range charArray {
		_, exists := hashMap[value]

		if exists {
			encoderStr = encoderStr + value + strconv.Itoa(hashMap[value].Count)

			delete(hashMap, value)
		}

	}

	fmt.Println(encoderStr)
}