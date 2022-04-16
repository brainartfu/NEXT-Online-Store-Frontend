/// <reference types="cypress" />

context("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("should display welcome message", () => {
		cy.get("title").contains("Welcome");
	});
});
