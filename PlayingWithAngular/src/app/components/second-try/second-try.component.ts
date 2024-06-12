import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageModel } from './image-model';

@Component({
  selector: 'app-second-try',
  templateUrl: './second-try.component.html',
  styleUrl: './second-try.component.css'
})
export class SecondTryComponent implements ImageModel, OnInit {

  placeholderImageModels1: ImageModel[] = []
  placeholderImageModels2: ImageModel[] = []

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

  imageCLicked(x: any) {
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
    this.placeholderImageModels1 = this.imgs.map(stringURL => ({
      imageUrl: stringURL,
      caption: "",
      counter: 0
    }))
    this.placeholderImageModels2 = JSON.parse(JSON.stringify(this.placeholderImageModels1))
    //above json copy is possible becasue of js array structure
    /*
    myInventories: Inventory[] = [
    {
      url: '/assets/fruits/apple.png',
      name: "Apple"
    },
    {
      url: '/assets/fruits/blueberries.png',
      name: "Blueberries"
    },
    {
      url: '/assets/fruits/celery.png',
      name: "Celery"
      },
    ]       
    */
  }

  increasingCounterInArray1(index: any) {
    this.placeholderImageModels1[index].counter++
    console.info("Structural Directive Click")
  }

  increasingCounterInArray2(index: any) {
    this.placeholderImageModels2[index].counter++
    console.info("New Control Flow Click")
  }

}
