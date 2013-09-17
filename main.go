package main

import (
    "net/http"
    "html/template"
)

func handler(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("index.html")
    t.Execute(w, nil)
}

func main() {
    http.HandleFunc("/", handler)
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("/home/yutaro/jsdemos/static"))))
    http.ListenAndServe(":8080", nil)
}