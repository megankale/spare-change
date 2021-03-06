import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
import {List, ListItem, Button} from 'react-native-elements';
import OrgList from './OrgList';

function urlForQueryAndPage(key, value) {
  var data = {
    searchTerm: '',
    eligible: 1,
  };
  data[key] = value;
  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://data.orghunter.com/v1/charitysearch?user_key=b22c8777c79f97270a91f9b7d715b4e3&' + querystring;
};

export default class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: 'wildlife',
            isLoading: false,
            message: '',
            results: [],
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onProfile=this.onProfile.bind(this);
    }

    componentDidMount(){
        this.onSubmit();
    }
    //private method
    _executeQuery(query) {
        console.log(query);
        fetch(query, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(json => this._handleResponse(json))
        .catch(error =>
            this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
        }));
    }

    _handleResponse(response) {
        console.log('_handleResponse');
        this.setState({ isLoading: false , message: '' });
        if (response.code === '200') {
            this.setState({results : response.data});
            console.log('Properties found: ' + this.state.results.length);
        } else {
            this.setState({ message: 'No organizations found; please try again.'});
        }
    }

    //public mrhod with access to private query method
    onSubmit(){
        this.setState({isLoading: true})
        var query = urlForQueryAndPage('searchTerm', this.state.term);
        this.setState({term: ''});
        this._executeQuery(query);
    }

    onProfile(){
      this.props.navigator.push({
        name: "Profile",
        passProps: {}
      });
    }

    renderResults(){
        var organizations = this.state.length;
    }

    render(){
        var spinner = this.state.isLoading ?
            ( <ActivityIndicator
                size='large'/> ) :
            ( <View/>);
        var msg = (<Text>{this.state.message}</Text>);
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder='Search'
                underlineColorAndroid='transparent'
                autoCorrect={true}
                ref= {(el) => { this.term = el; }}
                onChangeText={(term) => this.setState({term})}
                value={this.state.term}
                ></TextInput>
                <Button
                raised
                icon={{name: 'cached'}}
                buttonStyle={styles.button}
                onPress={this.onSubmit}
                title='Search Organizations' />
                <Button
                raised
                icon={{name: 'cached'}}
                buttonStyle={styles.button}
                onPress={this.onProfile}
                title='View Profile' />
                {msg}
                {spinner}
                <ScrollView>
                    <OrgList navigator={this.props.navigator} orgs={this.state.results}/>
                </ScrollView>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    button:{
        backgroundColor:'#48BBEC'
    },
    input: {
        height: 35,
        color: '#000000',
        margin : 20,
        borderRadius: 10,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#f9e5e5'
    },
    listItem:{
        color: '#000000',
    }
});
