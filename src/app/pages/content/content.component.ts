import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover:String = ''
  contentTitle:string = ''
  contentDescription:string = ''
  private id:string | null= '0'

  constructor (
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const res = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = res.title
    this.photoCover = res.photo
    this.id = res.id
    this.contentDescription = res.description
  }

}
