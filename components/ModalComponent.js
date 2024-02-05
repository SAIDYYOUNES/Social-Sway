import { Modal, View, Text, Button, Switch } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectUsers } from '../redux/actions';
export const ModalComponent = ({ isVisible, onClose }) => {
    const [selectedValues, setSelectedValues] = useState(['animals', 'cars', 'travel']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(selectUsers(selectedValues));
    }, [selectedValues]);
    const handleSwitchToggle = (value) => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];

        setSelectedValues(updatedValues);
    };
    return (
        <Modal
            animationType="slide"
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ marginTop: 100, backgroundColor: '#f5f5f9', height: 600, marginHorizontal: 20 }}>

                <Text style={{ textAlign: 'right', paddingRight: 30, fontSize: 30, marginRight: 10, marginTop: 10 }} onPress={onClose}>X</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
                >{'Réglages'.toUpperCase()}</Text>
                <Text style={{ paddingLeft: 50, fontSize: 25, paddingTop: 30,paddingBottom:40,  }}>Utilisez les paramètres ci-dessous pour gérer les catégories à afficher</Text>
                <View style={{borderBottomWidth: 1, borderBottomColor: 'black',width:300}}></View>
                <View style={{ alignItems: 'center',gap:20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',gap:60,paddingTop:30 }}>
                        <Text style={{fontSize:20}}>Animaux</Text>
                        <Switch

                            value={selectedValues.includes('animals')}
                            onValueChange={() => handleSwitchToggle('animals')}
                        />
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center',gap:60 }}>
                        <Text style={{fontSize:20}}>Voyages</Text>
                        <Switch
                            value={selectedValues.includes('travel')}
                            onValueChange={() => handleSwitchToggle('travel')}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',gap:60 }}>
                        <Text style={{fontSize:20}}>Voitures</Text>
                        <Switch
                            value={selectedValues.includes('cars')}
                            onValueChange={() => handleSwitchToggle('cars')}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 50,marginHorizontal:45}}>
                    <Button title={"validaer les paramétres".toUpperCase()} onPress={onClose} />
                </View>

            </View>
        </Modal>
    );
};