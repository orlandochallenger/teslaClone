import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';
import styles from './styles';


const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                deceleration={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList