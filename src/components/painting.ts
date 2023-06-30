import { Component, Input } from "@angular/core"

@Component({
    selector: "painting",
    template: `<img src={{src}} alt={{title}} height="30%" width="30%">`
})
export class Painting {
    @Input() title: string = "Untitled Painting"
    @Input() src: string = "https://gifdb.com/images/high/bob-ross-painting-a-landscape-a47rklycj8e21goq.webp"
}