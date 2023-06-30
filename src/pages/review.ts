import { Component } from "@angular/core"

@Component({
    selector: "review",
    template: `
    <h1> Review </h1>
    <a href="/">
        <button> ← back: Order art </button>
    </a>
    <a href="/order">
        <button> next: Ready to order → </button>
    </a>
    `
})
export class ReviewPage { }