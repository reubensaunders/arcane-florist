import React, {Component} from 'react'
import Link from 'next/link'
import Anime from 'react-anime';
import Anim from './anim';

const links = [
  { href: 'https://github.com/reubensaunders', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

let lastScrollY = 0;
let ticking = false; 

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {navClass: '', hidden: false, anim: false};

    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    

    handleScroll = () => {
        lastScrollY = window.scrollY;
       
        if (!ticking) {
          window.requestAnimationFrame(() => {
              if (window.scrollY > 100) {
                this.setState({hidden: true});
                //stops glitchyness (nav flickering)
              }
              if (window.scrollY > 119)
              {
                this.setState({hidden: false});  
              }

              if (window.scrollY > 120) {                
                this.setState({                    
                    navClass: 'side-transform'
                  });
              }
              else
              {
                this.setState({
                    navClass: '',
                    hidden: false                    
                  });
              }
            // this.nav.current.style.top = `${lastScrollY}px`;
            ticking = false;
          });
       
          ticking = true;
        }
      };

      hoverOn = () => {
        this.setState({ anim: true });
      }

      hoverOff = () => { 
        this.setState({ anim: false });    
      }

    render(){
        return(               
            <nav hidden={this.state.hidden} className={this.state.navClass}>    
            {this.state.anim == false ? 'not hovered' : 'hovered'}                                   
            <ul>            
            <li>
                <Link prefetch href="/">
                <a onMouseOver={this.hoverOn}>Hello</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/skills">
                <a onMouseOver={this.hoverOn}>&lt;3</a>
                </Link>
            </li>      
            <li>
                <Link prefetch href="/blog">
                <a onMouseOver={this.hoverOn}>Blog</a>
                </Link>
            </li>
                {links.map(({ key, href, label }) => (
                <li key={key}>
                    <Link href={href}>
                    <a>{label}</a>
                    </Link>
                </li>
                ))}      
            </ul>                    
        </nav>        
           
        )
    }
}

export default Nav;