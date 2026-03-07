package main

import (
	"log"

	"gorm.io/gorm"
)

func SeedData(db *gorm.DB) {
	// Seed de Servicios
	var serviceCount int64
	db.Model(&Service{}).Count(&serviceCount)
	if serviceCount == 0 {
		services := []Service{
			{
				Title: "DESARROLLO DE APIS Y BACKEND",
				Desc:  "Diseño y construyo el 'cerebro' de tu aplicación. Creo sistemas robustos.",
				Img:   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "ADMINISTRACIÓN DE SERVIDORES LINUX",
				Desc:  "La estabilidad es innegociable. Configuración y optimización operativa 24/7.",
				Img:   "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop",
			},
			{
				Title: "CONSULTORÍA Y ESTRATEGIA IT",
				Desc:  "Análisis de necesidades y diseño de hoja de ruta técnica para tu negocio.",
				Img:   "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
			},
		}
		db.Create(&services)
		log.Println("✅ Seed: Servicios insertados")
	}

	var techCount int64
	db.Model(&Tech{}).Count(&techCount)
	if techCount == 0 {
		techs := []Tech{
			{Name: "Go", Color: "text-blue-400", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"},
			{Name: "JavaScript", Color: "text-yellow-400", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
			{Name: "Python", Color: "text-blue-500", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
			{Name: "Linux", Color: "text-black", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
			{Name: "Ubuntu", Color: "text-orange-500", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"},
			{Name: "Debian", Color: "text-red-500", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"},
			{Name: "PostgreSQL", Color: "text-blue-600", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
			{Name: "Git", Color: "text-red-500", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
		}
		db.Create(&techs)
		log.Println("✅ Seed: Tecnologías insertadas")
	}

	var aboutCount int64
	db.Model(&About{}).Count(&aboutCount)
	if aboutCount == 0 {
		about := About{
			MainImg:    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
			Headline:   "Llegué al desarrollo de software casi por accidente, y ahora no me imagino haciendo otra cosa.",
			Gallery1:   "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000",
			Gallery2:   "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000",
			Gallery3:   "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000",
			StoryPart1: "Mi aventura en el desarrollo comenzó en la UNEG. No estaba especialmente apasionado, hasta que empecé a programar y descubrí lo mucho que me gustaba resolver problemas lógicos y crear cosas desde cero.",
			MidImg:     "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070",
			StoryPart2: "A pesar de no ser los mejores inicios, lo más importante que aprendí fue a aprender. Y así es como fui creando mi portafolio, a base de internet, interés y mucho café.",
			Email:      "veastudilloviloria@gmail.com",
		}
		db.Create(&about)
		log.Println("✅ Seed: Información 'About' insertada")
	}

	var projectCount int64
	db.Model(&Project{}).Count(&projectCount)
	if projectCount == 0 {
		projects := []Project{
			{
				Title:       "COLOR WARS",
				Category:    "Juegos",
				Tags:        "Juego de mesa,IA,Abstracto",
				Image:       "http://localhost:8080/assets/colorwars.png",
				Description: "Un juego de estrategia inspirado en 'Chain Reaction'...",
				Frontend:    "React, Tailwind CSS",
				Logic:       "Algoritmo Minimax para la IA",
				Status:      "Completado",
				Link:        "#",
			},
			{
				Title:       "DASHBOARD FINANCIERO",
				Category:    "Web",
				Tags:        "Fintech,Dashboard,React",
				Image:       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
				Description: "Sistema de gestión administrativa para control de gastos e ingresos con gráficos en tiempo real.",
				Frontend:    "Vue.js",
				Logic:       "Node.js Backend",
				Status:      "En desarrollo",
				Link:        "#",
			},
		}
		db.Create(&projects)
	}

}
