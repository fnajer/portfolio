import PubNub from "pubnub";
import pubNubConfig from "./pubnub.config";

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

export class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubNubConfig);
    console.log('111', this);
    this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  }

  addListener = listenerConfig => {
    this.pubnub.addListener(listenerConfig);
  }

  publish = message => {
    this.pubnub.publish({ message, channel: MESSAGE_CHANNEL });
  }
}

const pubsub = new PubSub();

export default pubsub;