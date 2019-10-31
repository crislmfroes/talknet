import { MobileNet, load } from '@tensorflow-models/mobilenet'

export default class VisionService {
  private mobileNetModel!: MobileNet;
  private videoElement!: HTMLVideoElement;
  constructor () {
    this.videoElement = document.createElement('video')
    load().then(model => {
      this.mobileNetModel = model
    })
    this.setupCamera()
  }
  public async classify () {
    return this.mobileNetModel.classify(this.videoElement)
  }
  private async setupCamera () {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { video: true },
        stream => {
          this.videoElement.src = window.URL.createObjectURL(stream)
        },
        error => {
          console.log(error)
          this.mockCamera()
        }
      )
    } else {
      this.mockCamera()
    }
  }
  private mockCamera () {
    this.videoElement.src = 'videos/cars.mp4'
    this.videoElement.autoplay = true
  }
}
