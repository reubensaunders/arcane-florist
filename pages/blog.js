import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/temple/nav'
import Section from '../components/section'
import Top from '../components/temple/top';

const Blog = () => (
  <div>
  <Top/>
  <div className="blog">
    <Head title="Blog" />
    
    <Nav/>
    <div id="hi" className="hero">
      <h1 className="title">Super Inspiring Post About Something!</h1>    
      <h3>Smooth, delicious word soup. Yum yum yum!
      </h3>      
      <div className="blog-date">25/02/2019</div>                     
      <div className="legend"></div>      
      <img src="../static/img/cosmos.jpg"></img>    
      <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="big-quote" style={{padding: 'unset'}}>
      <section className="light">
      <div className="gradient1">
          <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h2>
        </div>
        </section>
      </div>
      <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo. Egestas dui id ornare arcu. Tempus urna et pharetra pharetra massa. Purus semper eget duis at tellus at urna. Odio aenean sed adipiscing diam. Cras fermentum odio eu feugiat pretium nibh. Egestas quis ipsum suspendisse ultrices gravida. Cursus sit amet dictum sit amet justo donec enim diam. Donec enim diam vulputate ut pharetra sit amet. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tempor id eu nisl nunc. Non quam lacus suspendisse faucibus interdum posuere lorem. Tellus orci ac auctor augue mauris augue neque gravida in. Magna fermentum iaculis eu non. Eu consequat ac felis donec et odio pellentesque diam.</p>
      <p className="description">

Turpis egestas integer eget aliquet nibh praesent. Dui sapien eget mi proin sed libero. Lorem sed rsisus ultricies tristique nulla aliquet. Pulvinar elementum integer enim neque volutpat ac. Nisi quis eleifend quam adipiscing vitae. Tristique sollicitudin nibh sit amet commodo. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Velit dignissim sodales ut eu. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Massa enim nec dui nunc mattis. Quis enim lobortis scelerisque fermentum dui. Nisl suscipit adipiscing bibendum est ultricies integer. Volutpat ac tincidunt vitae semper quis lectus. Arcu dictum varius duis at consectetur lorem donec massa. Sit amet commodo nulla facilisi nullam vehicula ipsum.
</p>
<div className="big-quote" style={{padding: 'unset'}}>
<section className="light">
<div className="gradient1">
    <h2>"Nibh sed pulvinar proin gravida hendrerit lectus a."</h2>
  </div>
  </section>
</div>
<p className="description">
Et tortor at risus viverra adipiscing at in tellus integer. Tristique risus nec feugiat in fermentum. Id nibh tortor id aliquet. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Facilisis volutpat est velit egestas dui. In vitae turpis massa sed elementum tempus egestas. Duis at tellus at urna condimentum mattis pellentesque. Sed id semper risus in hendrerit gravida rutrum. Lacus suspendisse faucibus interdum posuere lorem ipsum. Massa ultricies mi quis hendrerit dolor magna. Enim sed faucibus turpis in. Quis commodo odio aenean sed adipiscing diam. Tellus cras adipiscing enim eu turpis. Accumsan sit amet nulla facilisi morbi. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Massa tincidunt nunc pulvinar sapien et ligula. Viverra accumsan in nisl nisi scelerisque eu. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Et netus et malesuada fames ac.
</p>
      
      
    <Section/>        
    </div>
</div>
</div>
)

export default Blog