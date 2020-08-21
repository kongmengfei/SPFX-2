import * as React from 'react';
import styles from './VideoSolution.module.scss';
import { IVideoSolutionProps } from './IVideoSolutionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from 'sp-pnp-js'
import { ClassFeatureVideo } from './FeatureVideoClass';
import { ISPListFeatureVideoItem } from './IFeatureVideo';
import { TextField, DefaultButton, PrimaryButton, Stack, IStackTokens, IIconProps } from 'office-ui-fabric-react/lib/';
import { Carousel, Image, Video } from '@fluentui/react-northstar';
import CarouselExample from './CarouselExample';

export default class VideoSolution extends React.Component<IVideoSolutionProps, any> {
   sc:string="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
  public constructor(props:IVideoSolutionProps,any)
  {
    super(props);
    this.state={
      items:[]
    }
  }


  public componentDidMount()
  {
    
    this._getListCustomerData();
    debugger;
  }
  private async _getListCustomerData()
  {
     let list= await pnp.sp.web.lists.getByTitle(`FeatureVideo`).items.getAll()
     console.log(list)
     let items: ISPListFeatureVideoItem[] = [];
     list.forEach(element => {
      items.push({ Title:element.Title,
        URL:element.URL.Url,
        Description:element.Description });
    });
    this.setState({  items });
  }

  public render(): React.ReactElement<IVideoSolutionProps> {
    return (
      <>
      {/* <Player>
      <source src="https://rajaniket-my.sharepoint.com/:v:/g/personal/prerak_rajaniket_onmicrosoft_com/Ecfbb0vI3RBLmow6cFAKypEB8FR8T2_99RgAGPc_r4ACMA?e=Iv4MBh" />
    </Player> */}
      <h1> ddd </h1>

      {console.log(this.state.items)}

      
      <form>
        <ol>
       {
         this.state.items.map(x=>
          {
            {console.log(x)}
            debugger;
        return(
              <li>
              <p>{x.Description}</p>
              <Video src={this.sc} />
                </li>
              )
          }
            
          
         )
       }
       </ol>
       <Video src={this.sc}/>       
      </form>
      <CarouselExample/>
      </>
    );
  }
}
