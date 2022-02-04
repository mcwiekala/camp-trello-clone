class GenerateImage {
  private image: string

  constructor(id: string) {
    this.image = `https://picsum.photos/seed/${id}/300/200`
  }

  get getImage() {
    return this.image
  }
}

export default GenerateImage
