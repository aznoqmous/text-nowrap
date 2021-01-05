export default class TextNowrap {

    constructor(element, options){
      this.options = Object.assign({
        lines: 1
      }, options)

      this.element = element
      this.baseContent = element.innerHTML
      this.baseStyles = window.getComputedStyle(element)
      this.baseFontSize = parseFloat(this.baseStyles['font-size'].replace('px', ''))
      this.currentFontSize = this.baseFontSize

      this.resize()
      setTimeout(()=>{
        this.resize()
      }, 1000)
    }

    resize(){
      while(this.isMultiline() && this.currentFontSize > 1){
        this.currentFontSize--
        this.applyFontSize()
      }
    }

    isMultiline(){
      this.element.innerHTML = 'y'
      this.singleLineHeight = this.element.getBoundingClientRect().height

      this.element.innerHTML = this.baseContent
      this.currentHeight = this.element.getBoundingClientRect().height
      return (this.singleLineHeight * this.options.lines < this.currentHeight)
    }

    applyFontSize(){
      this.element.style.fontSize = this.currentFontSize + 'px'
    }

}
