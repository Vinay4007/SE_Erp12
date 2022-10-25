
// Object used to represent Menu-content-item 
// locationtxt string  
// 
export class MenuContentItem
{
    constructor(locationText,menuContentName){
        this.locationText = locationText;
        this.menuContentName = menuContentName;
    }

}

export class Menu {

    constructor(menuName,menuContentArray){
        this.menuName = menuName;
        this.menuContentArray = menuContentArray;
    }

    AddContent(menuContent) {
        this.menuContentArray.push(menuContent)
    }

    RemoveContent(menuContent){
        let index= this.menuContentArray.indexOf(menuContent)
        this.menuContentArray.splice(index)
    }
}
