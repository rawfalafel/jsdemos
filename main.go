package main

import (
    "net/http"
    "io/ioutil"
)

func handler(w http.ResponseWriter, r *http.Request) {
    o, _ := ioutil.ReadFile("layout.html")
    w.Write(o)
}

func main() {
    http.Handle("/", http.FileServer(http.Dir("/home/yutaro/jsdemos")))
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("/home/yutaro/jsdemos/static"))))
    http.ListenAndServe(":8080", nil)
}