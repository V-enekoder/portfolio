package main

// Service representa los servicios que ofreces
type Service struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Title string `json:"title"`
	Desc  string `json:"desc"`
	Img   string `json:"img"`
}

// Project representa los trabajos de tu portafolio
type Project struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Title string `json:"title"`
	Tag   string `json:"tag"`
	Img   string `json:"img"`
	Link  string `json:"link"`
}
