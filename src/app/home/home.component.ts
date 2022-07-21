import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  content="";
  clickArr:{button:string; times:number}[] = []


  toggle(value:string){
    this.content = value;
    if(!this.clickArr.find((element)=> element.button == value )){
       this.clickArr.push({button:value,times:1})
    }else{
      
      this.clickArr.forEach((element)=>{
        if(element.button == value){
          element.times++;
        }
      })
    }


    
  }
  getBgFromElement(value:string){
      if(value == 'text'){
        return 'blue';
      }else if(value == 'image'){
        return 'orange'
      }else if(value == 'video'){
        return 'goldenrod'
      }
      return 0;
  }
  getColorFromElement(value:string){
    if(value == 'text'){
      return 'white';
    }else if(value == 'image'){
      return 'purple'
    }else if(value == 'video'){
      return 'blue'
    }
    return 0;
}


  ngOnInit(): void {
  }

}
