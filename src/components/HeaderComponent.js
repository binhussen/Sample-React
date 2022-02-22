import React,{ Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className='container'>
                        <NavbarBrand href='/'>Restaurant</NavbarBrand>
                    </div>
                </Navbar>
                <div className='Jumbotron'>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Restaurant</h1>
                                <p>We Deliver the best food ever</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;