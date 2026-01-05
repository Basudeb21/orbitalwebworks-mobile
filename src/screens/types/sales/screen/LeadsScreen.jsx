import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { screenStyles } from '../../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LeadCard } from '../../../../components/library/card';
import { EmptyList } from '../../../../components/library/boots';
import { BackPressTopBar } from '../../../../components/library/navbar';

/* -------------------- Dummy Leads -------------------- */
const leads = [
    {
        id: 1,
        name: 'Rahul Sharma',
        phone: '+91 98765 43210',
        source: 'Website',
        status: 'NEW',
        priority: 'HOT',
        assignedTo: 'Amit',
        lastFollowUp: '—',
    },
    {
        id: 2,
        name: 'Anjali Verma',
        phone: '+91 91234 56789',
        source: 'WhatsApp',
        status: 'CONTACTED',
        priority: 'WARM',
        assignedTo: 'Riya',
        lastFollowUp: '20 Sep 2025',
    },
    {
        id: 3,
        name: 'Mohit Singh',
        phone: '+91 99887 66554',
        source: 'Referral',
        status: 'FOLLOW_UP',
        priority: 'HOT',
        assignedTo: 'Amit',
        lastFollowUp: '22 Sep 2025',
    },
    {
        id: 4,
        name: 'Sneha Patel',
        phone: '+91 90909 12345',
        source: 'Facebook Ads',
        status: 'CONVERTED',
        priority: 'COLD',
        assignedTo: 'Neha',
        lastFollowUp: '18 Sep 2025',
    },
];

const LeadsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <BackPressTopBar title={"Leads"} />
            <View style={[screenStyles.container, screenStyles.form]}>
                <FlatList
                    data={leads}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <LeadCard
                            name={item.name}
                            phone={item.phone}
                            source={item.source}
                            status={item.status}
                            priority={item.priority}
                            assignedTo={item.assignedTo}
                            lastFollowUp={item.lastFollowUp}
                            onPress={() =>
                                navigation.navigate('LeadDetails', { id: item.id })
                            }
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    ListEmptyComponent={
                        <EmptyList
                            Icon={AntDesign}
                            iconName="inbox"
                            title="No Leads Found"
                            description="Leads will appear here once they are added."
                        />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default LeadsScreen;

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 8,
    },
});
