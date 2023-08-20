package main

import (
	"fmt"
	"log"
	"github.com/gofiber/fiber/v2"
)


func main(){
	fmt.Print("the world")

	app := fiber.New()
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("Bite The Dust")
	})

	log.Fatal(app.Listen(":4000"))
}