import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MacBookPro164.module.css';
import { Vector1Icon } from './Vector1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 9:117 */
export const MacBookPro164: FC<Props> = memo(function MacBookPro164(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle6}></div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line4}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.line3}></div>
      <div className={classes.sHOWS}>SHOWS</div>
      <div className={classes.aBOUT}>ABOUT</div>
      <div className={classes.lATEST}>LATEST:</div>
      <div className={classes.rECENTBROADCASTS}>RECENT BROADCASTS:</div>
      <div className={classes.lIVEEVENTTHEIVYHOUSE29THNOV}>
        <div className={classes.textBlock}>LIVE EVENT</div>
        <div className={classes.textBlock2}> @ THE IVY HOUSE </div>
        <div className={classes.textBlock3}>29TH NOV</div>
      </div>
      <div className={classes.anEveningOfReadingsLiveMusicAn}>
        <div className={classes.textBlock4}>An evening of readings, live music and DJs.</div>
        <div className={classes.textBlock5}>Click here for tickets.</div>
      </div>
      <div className={classes.rESIDENTS}>RESIDENTS</div>
      <div className={classes.pROPOSALS}>PROPOSALS</div>
      <div className={classes.nEWS}>NEWS</div>
      <div className={classes.nowPlayingXxxxxxByXxxxxx}>now playing- xxxxxx by xxxxxx</div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.hardFantasy1}></div>
      <div className={classes.screenshot2023914At23233}></div>
      <div className={classes.noBoundsTemplateBlackIGSquare1}></div>
      <div className={classes.uPCOMINGBROADCASTS}>UPCOMING BROADCASTS:</div>
      <div className={classes._1stOctober}>1st October</div>
      <div className={classes._140ThePrayerBook150EightNine16}>
        <div className={classes.textBlock6}>14:00 The Prayer Book</div>
        <div className={classes.textBlock7}>15:00 Eight Nine</div>
        <div className={classes.textBlock8}>16:00 Elements Red</div>
        <div className={classes.textBlock9}>17:00 Love Songs</div>
      </div>
      <div className={classes._140ThePrayerBook150EightNine162}>
        <div className={classes.textBlock10}>14:00 The Prayer Book</div>
        <div className={classes.textBlock11}>15:00 Eight Nine</div>
        <div className={classes.textBlock12}>16:00 Elements Red</div>
        <div className={classes.textBlock13}>17:00 Love Songs</div>
      </div>
      <div className={classes._140ThePrayerBook150EightNine163}>
        <div className={classes.textBlock14}>14:00 The Prayer Book</div>
        <div className={classes.textBlock15}>15:00 Eight Nine</div>
        <div className={classes.textBlock16}>16:00 Elements Red</div>
        <div className={classes.textBlock17}>17:00 Love Songs</div>
      </div>
      <div className={classes._13thOctober}>13th October</div>
      <div className={classes._20thOctober}>20th October</div>
      <div className={classes.ineffableSoundsEarWitness1}></div>
      <div className={classes._15}></div>
      <div className={classes.davidVassieThePrayerbookEP5_Fl}></div>
    </div>
  );
});

