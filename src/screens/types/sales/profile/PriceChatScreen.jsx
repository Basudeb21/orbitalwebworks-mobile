import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../../../../styles'
import { BackPressTopBar } from '../../../../components/library/navbar'
import { PriceChartTable } from '../../../../components/library/table'
export const priceChartData = [
    {
        name: 'Basic Website',
        basePrice: '$300',
        freeServices: ['Domain', 'Hosting'],
        duration: '7 Days',
    },
    {
        name: 'Business Website',
        basePrice: '$500',
        freeServices: ['Domain', 'Hosting', 'SSL'],
        duration: '10 Days',
    },
    {
        name: 'E-commerce Website',
        basePrice: '$1200',
        freeServices: ['Domain', 'Hosting', 'SSL', '1 Month Support'],
        duration: '20 Days',
    },
    {
        name: 'Portfolio Website',
        basePrice: '$200',
        freeServices: ['Domain'],
        duration: '5 Days',
    },
    {
        name: 'Blog Website',
        basePrice: '$350',
        freeServices: ['Domain', 'Hosting', 'Basic SEO'],
        duration: '8 Days',
    },
    {
        name: 'Landing Page',
        basePrice: '$150',
        freeServices: ['Domain', 'Hosting'],
        duration: '3 Days',
    },
    {
        name: 'Corporate Website',
        basePrice: '$800',
        freeServices: ['Domain', 'Hosting', 'SSL', 'Email Setup'],
        duration: '15 Days',
    },
    {
        name: 'Startup Package',
        basePrice: '$1000',
        freeServices: ['Domain', 'Hosting', 'SSL', 'SEO', '1 Month Support'],
        duration: '18 Days',
    },
];
const PriceChatScreen = () => {
    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <BackPressTopBar title={"Price chart"} />

            <View style={screenStyles.container}>
                <PriceChartTable data={priceChartData} />
            </View>
        </SafeAreaView>
    )
}

export default PriceChatScreen

const styles = StyleSheet.create({})