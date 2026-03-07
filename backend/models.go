package main

type Service struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Title string `json:"title"`
	Desc  string `json:"desc"`
	Img   string `json:"img"`
}

type Tech struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Name  string `json:"name"`
	Color string `json:"color"`
	Icon  string `json:"icon"`
}

type About struct {
	ID         uint   `json:"id" gorm:"primaryKey"`
	MainImg    string `json:"main_img"`
	Headline   string `json:"headline"`
	Gallery1   string `json:"gallery1"`
	Gallery2   string `json:"gallery2"`
	Gallery3   string `json:"gallery3"`
	StoryPart1 string `json:"story_part1"`
	MidImg     string `json:"mid_img"`
	StoryPart2 string `json:"story_part2"`
	Email      string `json:"email"`
}

type Project struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Title       string `json:"title"`
	Category    string `json:"category"` // Web, Juegos, IA, etc.
	Tags        string `json:"tags"`     // Lo guardaremos como "IA,Juego,Abstracto"
	Image       string `json:"image"`
	Description string `json:"description"`
	Frontend    string `json:"frontend"`
	Logic       string `json:"logic"`
	Status      string `json:"status"`
	Link        string `json:"link"`
}
