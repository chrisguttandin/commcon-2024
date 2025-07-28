import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { WindowService } from '../../window.service';

const computeMaximumCrossCorrelation = (xSignal: Float32Array, ySignal: Float32Array) => {
    const difference = ySignal.length - xSignal.length;

    if (difference < 0) {
        return 0;
    }

    let maximumCrossCorrelation = 0;

    for (let i = 0; i < difference; i += 1) {
        const correlation = computeCrossCorrelation(xSignal, ySignal, 0, i);

        if (correlation > maximumCrossCorrelation) {
            maximumCrossCorrelation = correlation;
        }
    }

    return maximumCrossCorrelation;
};

// eslint-disable-next-line padding-line-between-statements
const computeCrossCorrelation = (xSignal: Float32Array, ySignal: Float32Array, xOffset: number, yOffset: number) => {
    let correlation = 0;
    let xSquared = 0;
    let ySquared = 0;

    const length = Math.min(xSignal.length, ySignal.length);

    for (let j = 0; j < length; j += 1) {
        const xSignalValue = xSignal[xOffset + j];
        const ySignalValue = ySignal[yOffset + j];

        correlation += xSignalValue * ySignalValue;

        xSquared += xSignalValue ** 2;
        ySquared += ySignalValue ** 2;
    }

    const normalization = Math.sqrt(xSquared * ySquared);

    if (correlation === 0 && normalization === 0) {
        return 1;
    }

    return correlation / normalization;
};

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-twenty',
    styleUrls: ['./slide-twenty.component.scss'],
    templateUrl: './slide-twenty.component.html'
})
export class SlideTwentyComponent {
    public isEchoCancellationChecked = signal(false);

    public isPlaying = signal(false);

    public recordingState = signal<null | { mediaRecorder: MediaRecorder; mediaStream: MediaStream }>(null);

    public result = signal('no-result');

    private _changeDetectorRef = inject(ChangeDetectorRef);

    private _promisedAudioBuffer: null | Promise<AudioBuffer> = null;

    private _windowService = inject(WindowService);

    public analyze(): void {
        const recordingState = this.recordingState();

        if (recordingState !== null) {
            const audioContext = new AudioContext();
            const { mediaRecorder, mediaStream } = recordingState;

            mediaRecorder.ondataavailable = ({ data }) => {
                for (const mediaStreamTrack of mediaStream.getTracks()) {
                    mediaStreamTrack.stop();
                }

                if (this._promisedAudioBuffer === null) {
                    this._promisedAudioBuffer = fetch('/assets/hey-i-think-you-re-muted-YXWJ4BEB.wav')
                        .then((response) => response.arrayBuffer())
                        .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer));
                }

                Promise.all([
                    this._promisedAudioBuffer,
                    data.arrayBuffer().then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
                ]).then(([referenceBuffer, buffer]) => {
                    const audioBufferSourceNode = new AudioBufferSourceNode(audioContext, { buffer });

                    audioBufferSourceNode.connect(audioContext.destination);
                    audioBufferSourceNode.start();

                    const maximumCrossCorrelation = computeMaximumCrossCorrelation(
                        referenceBuffer.getChannelData(0),
                        buffer.getChannelData(0)
                    );

                    this.result.set(`correlation: ${maximumCrossCorrelation.toFixed(5)}`);
                    this._changeDetectorRef.detectChanges();
                });
            };
            mediaRecorder.stop();

            this.recordingState.set(null);
        }
    }

    public play(): void {
        const audioContext = new AudioContext();

        this.isPlaying.set(true);

        if (this._promisedAudioBuffer === null) {
            this._promisedAudioBuffer = fetch('/assets/hey-i-think-you-re-muted-YXWJ4BEB.wav')
                .then((response) => response.arrayBuffer())
                .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer));
        }

        this._promisedAudioBuffer
            .then((buffer) => {
                const audioBufferSourceNode = new AudioBufferSourceNode(audioContext, { buffer });

                audioBufferSourceNode.onended = () => {
                    audioBufferSourceNode.disconnect(audioContext.destination);

                    audioContext.close().then(() => {
                        this.isPlaying.set(false);

                        this._changeDetectorRef.detectChanges();
                    });
                };

                audioBufferSourceNode.connect(audioContext.destination);
                audioBufferSourceNode.start();
            })
            .catch(() => this.isPlaying.set(false));
    }

    public async record(): Promise<void> {
        this.result.set('no-result');

        try {
            const mediaStream = await this._windowService.nativeWindow?.navigator.mediaDevices.getUserMedia({
                audio: { echoCancellation: this.isEchoCancellationChecked() }
            });

            if (mediaStream === undefined) {
                throw new Error('Microphone access seems to be blocked.');
            }

            const mediaRecorder = new MediaRecorder(mediaStream);

            mediaRecorder.start();

            this.recordingState.set({ mediaRecorder, mediaStream });
        } catch {
            this.recordingState.set(null);
        }
    }
}
