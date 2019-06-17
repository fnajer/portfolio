import PubNub from "pubnub";
import pubNubConfig from "./pubnub.config";
import { createContext } from "react";

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

export class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubNubConfig);
    
    this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  }

  addListener = listenerConfig => {
    this.pubnub.addListener(listenerConfig);
  }

  publish = message => {
    this.pubnub.publish({ message, channel: MESSAGE_CHANNEL });
  }
}

export const PubSubContext = createContext();

export default PubSub;