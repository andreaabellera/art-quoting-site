import { Component } from "@angular/core"

@Component({
    selector: "order",
    template: `
    <h1> Ready to Order </h1>
    <a href="/review">
        <button> ← back: Review and shipping </button>
    </a>
    `
})
export class OrderPage { }