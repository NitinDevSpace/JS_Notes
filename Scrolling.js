// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Document</title>
//   <style>
//     p {
//       font-size: 1.5rem;
//     }
//   </style>
// </head>

// <body>
//   <h1>
//     Press 1 to go to Section-1 <br />
//     Press 2 to go to Section-2 <br />
//     Press 3 to go to Section-3 <br />
//     Press t to go to top of the page <br />
//     Press b to go to bottom of the page
//   </h1>

//   <h2 id="s1">Section 1</h2>
//   <p>
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ipsumta dolor quasi
//     nulla quis alias aliquid, nobis eveniet. Nam quam nisi architecto, eius
//     magnam aut exercitationem aspernatur doloribus, iusto, fugit amet quod
//     odio temporibus. Consectetur aspernatur ab voluptatem, in voluptatum
//     excepturi magni hic non, itaque ad quisquam! Ex inventore repellat magni
//     quaerat assumenda magnam adipisci consectetur sit explicabo officiis
//     possimus optio, voluptas doloribus rerum, doloremque similique sapiente
//     commodi. Eligendi ea porro, ad praesentium recusandae vitae laudantium
//     sunt placeat numquam tempora rerum nobis, eum cumque magnam non.
//     Aspernatur quae dolore nemo quasi saepe, id blanditiis repudiandae
//     provident molestias rerum nesciunt similique quos eaque ab facere earum
//     dolor illo ipsam? Debitis enim eius sint sequi dignissimos ipsa unde,
//     natus repudiandae accusamus laborum iste esse, quod, non ex praesentium
//     repellat ullam sapiente perferendis dolores? Impedit sequi consectetur
//     velit pariatur facilis omnis perspiciatis odit officiis libero, optio
//     delectus labore ullam unde a voluptate? Consectetur saepe sed harum fugit
//     magnam accusamus labore ab repudiandae aperiam quae blanditiis pariatur a
//     officiis ut esse eligendi amet veniam maiores architecto soluta magni,
//     ipsam repellendus dolores? Dolor libero sapiente non officia ullam quis
//     quas tenetur itaque laudantium consectetur fugiat deleniti repellat rem
//     dicta, voluptatibus aspernatur omnis nesciunt facere explicabo,
//     necessitatibus odio, sit ex recusandae? Praesentium illo quo tenetur vel
//     iure ipsa consectetur. reprehenderit. Ea architecto autem nemo voluptatem
//     aliquam deleniti ducimus unde?
//   </p>

//   <h2 id="s2">Section 2</h2>
//   <p>
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vel
//     voluptas debitis. Ipsa architecto aspernatur quaerat praesentium magni.
//     Perspiciatis saepe molestiae esse consequuntur dolorem exercitationem
//     asperiores sit, eos odio, est repellat veritatis voluptate modi.
//     Consequatur eos a quisquam quidem illum, labore aliquid sunt voluptas
//     mollitia saepe animi voluptate iure cum ducimus quaerat autem optio iste
//     suscipit tempore. Iure recusandae nam necessitatibus autem ipsa nihil
//     velit, sapiente hic provident, quisquam dignissimos voluptatum sint
//     deleniti magnam fuga ea enim. Quis rem perferendis perspiciatis molestiae
//     molestias excepturi atque consectetur blanditiis! Dolorem voluptatum
//     accusamus eaque ratione voluptatem quaerat atque dicta mollitia,
//     laudantium beatae placeat quia quasi neque obcaecati quidem consequatur
//     illum quae labore. Necessitatibus ducimus maxime velit asperiores in
//     magni! Dolores eum debitis itaque? Lorem ipsum dolor sit amet consectetur
//     adipisicing elit. Numquam, beatae quas! Asperiores fugit, deserunt
//     dignissimos quam, quis quidem totam cupiditate expedita et molestias
//     architecto nesciunt facere culpa accusantium id unde?Lorem ipsum dolor sit
//     amet consectetur adipisicing elit. Labore explicabo ad id! Quo ullam,
//     vitae expedita alias neque delectus pariatur vero aut excepturi beatae,
//     dolore ducimus nulla cumque perspiciatis consequatur incidunt ipsum
//     nostrum maiores quos quasi aspernatur fugiat maxime molestiae placeat.
//     Sint quasi officiis ea magnam dicta cumque libero quam ad ullam
//     reprehenderit et assu
//   </p>

//   <h2 id="s3">Section 3</h2>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, animi
//     eos. Dolores porro dolore, nulla maiores reprehenderit neque, culpa, eaque
//     quos minus iusto ducimus autem ex consequatur. Minus, maxime atque
//     exercitationem excepturi, soluta facilis quidem doloribus, impedit earum
//     molestias molestiae voluptatem voluptatibus odio. Asperiores suscipit eos
//     non maiores. Atque aspernatur quidem omnis, aut aperiam id perferendis
//     incidunt cum! Veritatis, aut nostrum quisquam quae nobis unde? Sint quos
//     illo facilis ex ab! Officiis enim aut nihil laborum adipisci alias a qui,
//     debitis, nulla recusandae repudiandae numquam aliquam labore sequi vitae
//     fugiat inventore. Laborum nam, eius veritatis nulla voluptas aperiam odit
//     fugiat repellendus ab est. Sed repell
//     ratione nesciunt voluptatum, qui, sapiente placeat nihil, dolorem culpa
//     beatae alias neque. At quia, magnam itaque obcaecati amet aspernatur
//     maxime hic nihil omnis adipisci mollitia harum veritatis, voluptate totam
//     voluptas, quas perspiciatis fugit unde. Quaerat quos eius, amet ea quam
//     maiores consectetur perferendis ipsam animi aut, molestiae iure!
//   </p>
//   <script src="script.js"></script>
// </body>

// </html> 




const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')

document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case "1":
      s1.scrollIntoView({behavior: "smooth"});
      break;
    case "2":
      s2.scrollIntoView({behavior: "smooth"});
      break;
    case "3":
      s3.scrollIntoView({behavior: "smooth"});
      break;
    case "b":
      window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
      break;
    case "t":
      window.scrollTo({top: 0, behavior: "smooth"})
      break;
  }
})