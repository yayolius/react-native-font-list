/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    TouchableHighlight,
    ListView,
    UIExplorerPage,
    NavigatorIOS,
} = React;


var {
    NativeFonts
} = require('NativeModules');

var FontList = React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      
      NativeFonts.get(this.getFontCallback);
      return {
        dataSource: ds.cloneWithRows([]),
      };
    },
    getFontCallback: function(results){
       
        var fonts = results.split(",").sort();
      
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource:   ds.cloneWithRows(fonts)  });
    },
    _pressRow:function(fontName){
        if(['Avenir Next Condensed','Zapfino','DIN Condensed'].indexOf(fontName) >= 0 )
            alert("View not implemented for this font");
        else 
           this.props.navigator.push({
            title: 'Font',
            component: FontView,
            passProps: {font:fontName}
          });
    },
    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        
        return (
          <TouchableHighlight onPress={() => this._pressRow(rowData)}>
            <View>
              <View style={styles.row}>
                
                <Text style={{textAlign:'left', fontFamily: ( ['Avenir Next Condensed','Zapfino','DIN Condensed'].indexOf(rowData) >= 0 )? 'Arial':rowData,fontSize:22,fontWeight:"normal" }}>
                  {rowData}
                </Text>
                <Text style={{fontSize:12,color:"#777777"}}>
                    Font name: {rowData}
                </Text>
                

              </View>
              <View style={styles.separator} />
            </View>
          </TouchableHighlight>
        );
      },
    render: function() {
    return (

        
            <ListView style={{flex:1}}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            pageSize={24}
            />
       
    );
  }
});




var FontView = React.createClass({
    
   
    render: function() {
    return (

        <ScrollView style={{flex:1,padding:20}}>
            <Text style={styles.fontViewTitle}>{this.props.font}</Text>
            <Text style={{fontFamily: this.props.font,textAlign:'center',fontSize:12}}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
            <Text style={{fontFamily: this.props.font,textAlign:'center',fontSize:12}}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
            <Text style={{fontFamily: this.props.font,textAlign:'center',fontSize:16,marginBottom:30}}>0 1 2 3 4 5 6 7 8 9</Text>

            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"100"}]}>[14] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"100"}]}>[14,100] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"200"}]}>[14,200] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"300"}]}>[14,300] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"400"}]}>[14,400] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"500"}]}>[14,500] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"600"}]}>[14,600] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"700"}]}>[14,700] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"800"}]}>[14,800] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontWeight:"900",marginBottom:60}]}>[14,900] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>



            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:36}]}>[36] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:30}]}>[30] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:24}]}>[24] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:21}]}>[21] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:18}]}>[18] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:16}]}>[16] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:14}]}>[14] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:12}]}>[12] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text style={[styles.fontViewTextLine,{fontFamily: this.props.font},{fontSize:10}]}>[10] Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

        </ScrollView>
         
    );
  }
});




var reactNativeFontList = React.createClass({
    
   
    render: function() {
    return (

         <NavigatorIOS
            style={styles.container} 
            initialRoute={{
              title: 'Native Fonts',
              component: FontList,
            }}
         />
         
    );
  }
});

var styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
    welcome : {
        fontSize  : 20,
        textAlign : 'center',
        margin    : 10
    },
    instructions : {
        textAlign : 'center',
        color      : '#333333'
    },
    row: {
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    text: {
        flex: 1,
    },
    fontViewTitle:{
        fontFamily: 'Helvetica',
        textAlign:'center',
        fontSize:24,
        fontWeight:"700",
        marginBottom:12,
    },
    fontViewTextLine:{
        fontSize:14,
        marginBottom:12,
        borderColor:"#777777",
        borderBottomWidth:2
    }
});


AppRegistry.registerComponent('reactNativeFontList', () => reactNativeFontList);
