/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';
import base64SoundToByteArray from '../../tambo/js/base64SoundToByteArray.js';
import WrappedAudioBuffer from '../../tambo/js/WrappedAudioBuffer.js';
import phetAudioContext from '../../tambo/js/phetAudioContext.js';

const soundURI = 'data:audio/mpeg;base64,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';
const soundByteArray = base64SoundToByteArray( phetAudioContext, soundURI );
const unlock = asyncLoader.createLock( soundURI );
const wrappedAudioBuffer = new WrappedAudioBuffer();
const onDecodeSuccess = decodedAudio => {
  wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
  unlock();
};
const onDecodeError = decodeError => {
  console.warn( 'decode of audio data failed, using stubbed sound, error: ' + decodeError );
  wrappedAudioBuffer.audioBufferProperty.set( phetAudioContext.createBuffer( 1, 0, phetAudioContext.sampleRate ) );
  unlock();
};
phetAudioContext.decodeAudioData( soundByteArray.buffer, onDecodeSuccess, onDecodeError );
export default wrappedAudioBuffer;