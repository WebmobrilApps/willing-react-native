import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, TextInput, PermissionsAndroid, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../styles/colors'
import Scale, { verticalScale } from '../../styles/Scale'
import Contacts from 'react-native-contacts';
import Avatar from '../Avatar';


const ContactListModal = ({
    modalVisible,
    close,
    onPress
}) => {

    let [contacts, setContacts] = useState([])

    useEffect(() => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: 'Contacts',
                message: 'This app would like to view your contacts.',
            }).then(() => {
                loadContacts();
            }
            );
        } else {
            loadContacts();
        }
    }, []);

    const getAvatarInitials = (textString) => {
        if (!textString) return '';
        const text = textString.trim();
        const textSplit = text.split(' ');
        if (textSplit.length <= 1) return text.charAt(0);
        const initials =
          textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
        return initials;
      };

    const loadContacts = () => {
        Contacts.getAll()
            .then(contacts => {
                contacts.sort(
                    (a, b) =>
                        a.givenName.toLowerCase() > b.givenName.toLowerCase(),
                );
                setContacts(contacts);
            })
            .catch(e => {
                alert('Permission to access contacts was denied');
                console.warn('Permission to access contacts was denied');
            });
    };

    const search = (text) => {
        const phoneNumberRegex =
            /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
        if (text === '' || text === null) {
            loadContacts();
        } else if (phoneNumberRegex.test(text)) {
            Contacts.getContactsByPhoneNumber(text).then(contacts => {
                contacts.sort(
                    (a, b) =>
                        a.givenName.toLowerCase() > b.givenName.toLowerCase(),
                );
                setContacts(contacts);
                console.log('contacts', contacts);
            });
        } else {
            Contacts.getContactsMatchingString(text).then(contacts => {
                contacts.sort(
                    (a, b) =>
                        a.givenName.toLowerCase() > b.givenName.toLowerCase(),
                );
                setContacts(contacts);
                console.log('contacts', contacts);
            });
        }
    };


    return (
        <Modal style={styles.container}
            animationType={'fade'}
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.container}>
                <TextInput
                    onChangeText={search}
                    placeholder="Search"
                    placeholderTextColor={colors.black}
                    style={styles.searchBar}
                />
                <FlatList
                    data={contacts}
                    renderItem={(contact) => {
                        {
                            console.log('contact -> ' + JSON.stringify(contact));
                        }
                        return (
                            <View style={styles.cardContainer}>
                                <Avatar
                                    img={
                                        contact.item.hasThumbnail ?
                                            { uri: contact.item.thumbnailPath } : undefined
                                    }
                                    placeholder={getAvatarInitials(
                                        `${contact.item.givenName} ${contact.item.familyName}`,
                                    )}
                                    width={40}
                                    height={40}
                                />
                                <Text
                                    style={
                                        styles.titleStyle
                                    }>{`${contact.item.displayName}`}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </Modal>
    )
}

export default ContactListModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: colors.white
    }, innerContainer: {
        backgroundColor: colors.white,
        padding: Scale(20),
        marginHorizontal: Scale(50),
        borderRadius: Scale(15),
        // justifyContent: 'center',
        // alignItems: 'center'
    }, searchBar: {
        backgroundColor: '#f0eded',
        paddingHorizontal: 30,
        paddingVertical: Platform.OS === 'android' ? undefined : 15,
        color: colors.black
    }, cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        marginBottom: 10,
        // height:'40',
        width: '100%',
        padding: 20
    }
})