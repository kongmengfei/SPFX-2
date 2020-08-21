import { ISPListFeatureVideoItem } from "./IFeatureVideo";

export class  ClassFeatureVideo{
  public  Title:string;
  public  URL:string;
   public Description:string;
    
    constructor(item: ISPListFeatureVideoItem) {
      this.Title = item.Title;
      this.URL = item.URL;
      this.Description = item.Description;
  }
}