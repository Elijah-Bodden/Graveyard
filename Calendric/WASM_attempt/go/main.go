package main

import (
	"fmt"
	"runtime"
	"errors"
)

const platform = runtime.GOOS

func main() {  
    fmt.Println("Go WASM")
	if (DBWrite([5]string{"tesat", "a", "b", "c", "d"})) {
		fmt.Println("GOOD")
	}
}

func DBWrite(arr [5]string) (bool) {
	return (arr[0] == "test")
}

func createDB() {

}

func openDB() {

}

//Check if we have an existing local database
func DBExists() {

}

//Get the data from the local database if it exists, otherwise create a new empty database
func enterDB() {

}

type database interface {
	//Are we able to open this system's database or do we need to initialize one?
	exists() bool
	//!update to actual data type
	//Dump the contents of the database, recieve an error if !exists()
	open() (string, error)
	//Create a database if one doesn't already exist. Returns false if we already have a database.
	create() (bool, error)
}

type jsDatabase struct {
	name string
}

func (db jsDatabase) exists() bool {

}

func 