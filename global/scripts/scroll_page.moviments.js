export default class ScriptScrollPage {

   /**
    * @param { number } top
    */
   static scrollToTopWindow(top) {
      window.scrollTo({
         top,
         behavior: 'smooth'
      })
   }
}
