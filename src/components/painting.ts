import { Component, Input } from "@angular/core"

@Component({
    selector: "painting",
    template: `<img src={{src}} alt={{title}}>`
})
export class Painting {
    @Input() title: string = "Untitled Painting"
    @Input() src: string = "https://gifdb.com/images/high/bob-ross-painting-a-landscape-a47rklycj8e21goq.webp"
}