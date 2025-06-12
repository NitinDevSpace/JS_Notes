// Write JS code for accordion here
const accords = document.querySelectorAll('.accordion-item')

accords.forEach((accord) => {
    const btn = accord.querySelector('.accordion-button')
    btn.addEventListener('click', () => {
       const content = accord.querySelector('.accordion-content')
       const isVisible = content.style.display === 'block';
       if(!isVisible){
        content.style.display = 'block';
       } else {
           content.style.display = 'none'
       }
       // close other open accords
       accords.forEach((otherItem) => {
      if (otherItem !== accord) {
        otherItem.querySelector('.accordion-content').style.display = 'none';
      }
    });
    })
})