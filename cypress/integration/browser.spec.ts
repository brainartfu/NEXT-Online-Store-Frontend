/// <reference types="cypress" />

describe("Nav Menus", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	// For desktop view
	context("720p resolution", () => {
		beforeEach(() => {
			/**
			 * Run these tests as if in a desktop browser,
			 * with a 720p monitor
			 */
			cy.viewport(1280, 720);
		});
		describe("When you visit home", () => {
			it("Should visit home page", () => {
				cy.visit("/");
			});
			describe("nav", () => {
				it("Should navigate to About page", () => {
					cy.get('a[href*="about"]').click();
					cy.url().should("include", "/about");
				});
			});
		});
	});
	context("iphone-5 resolution", () => {
		beforeEach(() => {
			/**
			 * Run these tests as if in a desktop browser,
			 * with a 720p monitor
			 */
			cy.viewport("iphone-5");
		});
		describe("When you visit mobile home", () => {
			it("Should visit home page", () => {
				cy.visit("/");
			});
			describe("nav", () => {
				it("Should navigate to About page", () => {
					cy.get('a[href*="about"]').click();
					cy.url().should("include", "/about");
				});
			});
		});
	});
});
