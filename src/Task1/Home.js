import React from 'react'

const selected =[];

function Home() {
    return (
        <div className='container'>
            <h1>Dummy Text</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisi at metus mollis, sit amet semper eros maximus. Duis in egestas enim, in laoreet eros. Etiam ultrices varius dictum. Integer mattis felis nulla, vel ultrices lectus aliquet nec. Ut eget mi quis erat rhoncus sodales. Vestibulum ut vestibulum orci, vel pellentesque diam. Ut id bibendum lectus, sed lobortis metus. Proin pulvinar lobortis urna. Fusce vel ipsum gravida, venenatis neque sit amet, sagittis eros.

            Maecenas laoreet posuere lorem sed sollicitudin. Mauris justo erat, blandit sit amet dolor eu, ullamcorper vehicula leo. Proin nec mauris porttitor, posuere tellus eget, auctor nibh. Quisque tincidunt massa et massa auctor pulvinar. Nulla at orci lobortis, consectetur velit eu, aliquam turpis. Aliquam dapibus dapibus risus, hendrerit luctus libero tempus ut. Cras quam velit, gravida eu nisi a, fermentum rhoncus massa.

            Phasellus vitae elementum dui, ac pretium risus. Vestibulum auctor fringilla augue sit amet finibus. Vivamus aliquet orci a sapien lobortis, a rhoncus lectus dictum. Nunc pretium nisi id enim euismod molestie. Sed cursus porttitor nibh sit amet porta. Cras a tortor suscipit, aliquet est nec, porttitor orci. Etiam at mollis quam. Proin eu nibh euismod, fringilla velit et, pretium magna.

            Etiam tincidunt a magna sed lobortis. Nunc ornare metus eget leo blandit mollis. Duis accumsan interdum ipsum, malesuada aliquam mi hendrerit non. Fusce vitae lacus vel metus suscipit rutrum quis et quam. Fusce tincidunt efficitur tortor, vel sollicitudin leo euismod nec. Donec ornare tristique tortor, id consequat nunc porta in. Pellentesque vitae consectetur quam. Vestibulum pharetra hendrerit purus a tristique. Ut pulvinar lectus vel ex rhoncus, eget tempus massa lacinia. Duis lacinia ultrices orci, non faucibus elit imperdiet rutrum. Ut ac eros elementum, tempor justo id, bibendum ex. Pellentesque sit amet arcu sit amet lectus placerat accumsan quis id sapien. Etiam quis posuere tortor. Phasellus at lorem pretium, accumsan sem id, euismod libero. Pellentesque lorem lacus, tempor eget hendrerit eget, rhoncus sit amet lorem.
             <br></br> <br></br>

            <div className='btn'>
            <button 
            onClick={()=>{
            selected.push(window.getSelection().toString()) ;
            console.log(selected);
             }}> Select TEXT </button>

             <button>Highlight</button>
        
            </div>
        </div>
    )
}

export default Home
export {selected}