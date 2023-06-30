import { Component } from "@angular/core"

@Component({
    selector: "home",
    template: `
    <h1> Order Art </h1>
    <a href="/review">
        <button> next: Review and shipping → </button>
    </a>
    `
})
export class HomePage { }