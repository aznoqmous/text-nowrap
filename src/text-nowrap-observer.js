import TextNowrap from './text-nowrap'
export default class TextNowrapObserver {

  /**
   * Bind all element.querySelectorAll(selector)
   */
  static bind(selector, element=null){
    if(!element) element = document.body
    if(!element) return;
    let targets = [...element.querySelectorAll(selector)]
    if(targets.length) targets.map(t => new TextNowrap(t))
  }

  /**
   * Observe given element and bind when updated
   */
  static observe(selector, element=null){
    if(!element) element = document.body
    if(!element) return;

    TextNowrapObserver.bind(selector, element)

    (new MutationObserver((mutations)=>{
      for(let mutation of mutations) {
        if(mutation.type == 'childList') {
          TextNowrapObserver.bind(selector, mutation.target)
        }
      }
    })).observe(element, {
      childList: true, subtree: true
    })
  }

}
