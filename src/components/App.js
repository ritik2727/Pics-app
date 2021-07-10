import React from 'react';
import Unsplash from '../api/Unsplash';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component{
    state={image:[]};
     onSearchSubmit= async (term)=>{
        const response = await Unsplash.get('/search/photos',{
            params :{   query:term   }
        }
    )   

    this.setState({image:response.data.results});  
}


    render(){
        return (
        <div className='ui container'  style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList image={this.state.image}/>
        </div>
    );
}
}





export default App;