import PubNub from "pubnub";
import pubNubConfig from "./pubnub.config";

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

const pubnub = new PubNub(pubNubConfig);

pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

pubnub.addListener({
  message: messageObject => console.log(messageObject),
});

setTimeout(() => {
  pubnub.publish({
    message: 'hi',
    channel: MESSAGE_CHANNEL,
  });
}, 500);