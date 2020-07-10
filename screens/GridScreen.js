import React, {useEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import ImageGrid from '../components/ImageGrid';
import axios from 'axios';

// hooks

const GridScreen = (props) => {

    const [isLoaded, onLoaded] = useState(false);
    const [imagesList, updateImageList] = useState([]);    

    useEffect(() => {

        function getCollection(){
            const { navigation } = props;      
            const URL = navigation.state.params.collection;
        
            axios.get( URL,{ redirect: 'follow'})
            .then(res => res.data)
            .then(data => {
                
                    const dataList = data;
                    onLoaded(true);
                    updateImageList(dataList)  
            })
            .catch((err) => console.error('Ошибка получения', err))
        
            }
       
        getCollection();
    }, [])

    if (!isLoaded) {
                    return (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="small" style={styles.loader} />
                        </View>
                    );
                }

    return (<ImageGrid list={imagesList}/>);
}

export default GridScreen;
  
 const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loaderContainer: {
        flex: 1
    }
 });





// react class

// export default class GridScreen extends React.Component {
 
//     state = {
//         isLoaded: false,
//         imagesList: []
//     }
  
//     async componentDidMount() {
//         /**
//          * navigation - прокидвывает react-navigation в пропсы.
//          * В navigation.state.params находятся наши дополнительные данные,
//          * которые мы передавали в главном экране
//          */
//         const { navigation } = this.props;
  
//         try {
//             const response = await fetch(
//                 navigation.state.params.collection,
//                 { method: 'GET', redirect: 'follow'}
//             );
//             const data = await response.json();
//             this.setState({
//                 imagesList: data,
//                 isLoaded: true
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }
  
//     render() {
//         if (!this.state.isLoaded) {
//             return (
//                 <View style={styles.loaderContainer}>
//                     <ActivityIndicator size="small" style={styles.loader} />
//                 </View>
//             );
//         }
  
//         return (<ImageGrid list={this.state.imagesList}/>);
//     }
//  }

