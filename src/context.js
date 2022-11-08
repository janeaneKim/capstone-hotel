import React, {Component} from 'react';
import items from './data';

const RoomContext= React.createContext();
//provider + consumer needed

class RoomProvider extends Component{
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms: [],
        loading:true //loading flag inimportant for local
    }
    //getData function for remote api
    componentDidMount() {
        // this.getData();
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        //
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize
        });
    } 

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
      
            let room = { ...item.fields, images, id };
            return room;
          });
          return tempItems;
    }

    getRoom = (slug)=> {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug===slug);
        return room;
    };
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);
        this.setState(
            {
              [name]: value
            },
            this.filterRooms
          );
    };

    render(){
        return (
            <RoomContext.Provider value = {{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};