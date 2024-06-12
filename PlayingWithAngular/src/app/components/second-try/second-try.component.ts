import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageModel } from './image-model';

@Component({
  selector: 'app-second-try',
  templateUrl: './second-try.component.html',
  styleUrl: './second-try.component.css'
})
export class SecondTryComponent implements ImageModel, OnInit{

  placeholderImageModels: ImageModel[] = []

  @Input()
  imageUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BTfoQbp1iY97aDvdt8fo5kVMco5Id2awqA&s"

  @Input()
  caption: string = "My picture"

  @Output()
  onFigureClicked = new Subject<string>()

  showIOSample: boolean = false;

  clickShowIOSample() {
    this.showIOSample = !this.showIOSample
  }

  counter: number = 0

  imageCLicked(x : any) {
    console.info(">>>>Image Component Clicked", x)
    this.counter++

    //trigger event
    this.onFigureClicked.next(this.caption)
  }

  imgs: string[] = [
    "https://preview.redd.it/fern-pout-frieren-v0-wrlt93gqgbrb1.gif?format=png8&s=2175a9636376cc49a77c79759227ce5993166056",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrhq19X8nJ1SDkjIsPfqW0e8NcsTl5wWZNQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrCPPLiWnsFe-sBROioN1V1JdRi3SdMUxWQ&s"
  ]

  handleClick(text: string) {
    console.info(">>>>>> image clicked: ", text)
  }

  ngOnInit(): void {
    this.placeholderImageModels = this.imgs.map(stringURL => ({
      imageUrl: stringURL,
      caption: "",
      counter: 0
    }))
  }

  increasingCounterInArray(index: any) {
    this.placeholderImageModels[index].counter++
  }

}
