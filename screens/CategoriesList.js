import React, {useState} from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';
import list from '../data/categories';

const CategoriesList = (props) => {

const [categoriesList, updateList] = useState(list);
  const { navigation: { navigate } } = props;

    return (
        <ScrollView>
        <List>
            {
                categoriesList.map((item) => {
                    const { collection, alias, name } = item;
                    return (
                        <ListItem 
                            key={alias} 
                            onPress={() => navigate('ImagesGrid', { collection, title: name })}
                            >
                            <Text>{name}</Text>
                        </ListItem>
                    )
                })
            }
        </List>
    </ScrollView>
    )
}

export default CategoriesList