import React, {Component} from 'react';

//react components can show other components give access to all functionality that react.component has
class SearchBar extends React.Component { //define new class called searchbar
  constructor(props){
    super(props);
              //you can set the empty string equal to something
    this.state = {term: ''}; //term is the property we want to record the change from user input on //as the user types we want to update what's stored on state
  }
  render(){
    // GETTING USER INPUT AND STORING IT ON STATE
    return(
    <div>
      <input
      value = {this.state.term} //2nd initial value is empty string
      onChange={ event => this.onInputChange(event.target.value)}
      //1st when user enters text, state is updated and the value is updated on render
      />
      {/* Value of the input: {this.state.term} */}
    </div>
   );
  }

onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
} //vid 31 searching

}

export default SearchBar;



//onchange is prop, this.onInputChange is value
//new SearchBar <-- declares an instance
//index needs a reference to SearchBar, so we export them
//originally had onChange(event){console.log(event.target.value)

// render(){
//   return <input onChange={ event => console.log(event.target.value)} /> //originally had onChange(event){console.log(event.target.value);}
// }
