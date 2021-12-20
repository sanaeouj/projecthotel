import React, { Component } from "react";
import { RoomContext } from "../../store/context";
import CustomTitle from "../CustomTitle";
import CustomLoading from "../CustomLoading";
import Room from "../Room";
import { IRoomProps } from "../../Types/Types";
 
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  public render() {
      const { loading, featuredRooms } = this.context;
      
      const rooms = featuredRooms.map((room: any) => {
          return <Room key={room.id} room={room} />;
      })
      return (
          <section className="featured-rooms"> 
              <CustomTitle title="featured rooms"/>
              <div className="featured-rooms-center">
                  {loading ? <CustomLoading /> : rooms}
              </div>
          </section>
    );
  }
}
