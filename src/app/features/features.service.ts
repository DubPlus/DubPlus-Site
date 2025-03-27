import { Injectable } from '@angular/core';
import { Feature } from './feature';

@Injectable()
export class FeaturesService {

  constructor() { }

  // hard-coded for now, maybe pull from somewhere in future
  getFeatures(): Feature[] {
    let features: Feature[] = [];

    features.push(new Feature('AutoVote', 'Automatically updub songs at the beginning of every song. This boosts your dub count, and keeps you involved with the room!'));
    features.push(new Feature('AFK Auto-respond', 'Set a custom message when someone messages you to let them know that you are away from keyboard'));
    features.push(new Feature('Emotes', 'Send and display your favorite Twitch and BetterTV emotes in chat'));
    features.push(new Feature('AutoComplete Emoji', 'Use our custom autocomplete menu to finish those pesky Twitch emotes that escape your brain... or if you\'re just too lazy to type it out. We don\'t judge!'));
    features.push(new Feature('Custom Mentions', 'Set custom words and phrases to play your notification sound when they are said in chat'));
    features.push(new Feature('Chat Cleaner', 'Automatically only keep a designated amount of chat items while clearing older ones, keeping CPU stress down', ));
    features.push(new Feature('Notify on Mentions', 'Use your browsers built in popup notifications to subtly let you know you are being notified when your tab isn\'t active. A brief text will also display letting you know what the notification pertains'));
    features.push(new Feature('Notify on PM', 'Notify when you receive a PM, and actually be able to respond in a proper manner!', ));
    features.push(new Feature('DJ Notification', 'Notify when you are coming up to DJ! Customizable setting for when to notify based on your position in the queue', ));
    features.push(new Feature('SpaceBar Mute', 'Tap your spacebar to mute the music playing'));
    features.push(new Feature('Warn on navigation', 'Display a warning message before close QueUp! Don\'t lose your place in queue ever again'));
    features.push(new Feature('Dubvote Info on Hover', 'Know who voted what on the current song when you hover over the dub vote and grab buttons. *Grabs are only able to be displayed when you are in the room when they occur'));
    features.push(new Feature('Dubvote Info in Chat', 'Display a chat message of who voted what on the current song'));
    features.push(new Feature('FullScreen', 'Show the current video in fullscreen'));
    features.push(new Feature('Split Chat', 'Give a nice style in between each chat message so you can distinguish between them'));
    features.push(new Feature('Hide Elements', 'Hide multiple areas of QueUp when you don\'t need them or if you\'re at work and don\'t want the boss seeing. You are able to hide all of the following separately and together: Chat, Video, Avatars, and Background'));
    features.push(new Feature('Show Timestamps', 'Permanently display the timestamps on chat messages'));
    features.push(new Feature('Community Theme', 'Communities are able to set an Official Dub+ Theme for their room. Turning this feature on gives you a nice welcome and different experience in each room'));
    features.push(new Feature('Custom CSS', 'Have your own or another community made theme you want to use? Put in the link to the stylesheet and enjoy your new experience!'));
    features.push(new Feature('Custom Background', 'Display your own custom background if you aren\'t enjoying the room\'s'));
    features.push(new Feature('Custom Notification Sound', 'Customize the sound that plays for a notification! (Mention, alert, etc.)', ));
    features.push(new Feature('Snow Animation', 'Let it snow!!!'));
    features.push(new Feature('Rain Animation', 'Make it rain!!!', ));
    features.push(new Feature('ETA Timer', 'Know exactly the amount of minutes before it\'s your turn to be DJ. Hover over the timer icon under the video'));
    features.push(new Feature('Snooze Button', 'Don\'t like the song playing? Click the snooze button so the room is only muted for the current song. Your volume will automatically turn back up when a new song starts!'))
    features.push(new Feature('Snooze Video', 'Hide the video for the current song. The video will automatically turn back on when a new song starts.', 'NEW!' ));
    features.push(new Feature('Flip Interface', 'Swap the position of the video player and chat column', 'NEW!' ));
    features.push(new Feature('Auto AFK', 'Automatically set yourself as AFK after a designated amount of time', 'NEW!' ));
    features.push(new Feature('Grab Response', 'Automatically send a chat message when you grab a song', 'NEW!' ));
    features.push(new Feature('Collapsible Images', 'Collapse images in chat', 'NEW!' ));

    features.sort((a, b) => {
      return a.Name.localeCompare(b.Name);
    })
    return features;
  }
}
